# Authentication Guidelines

**IMPORTANT:** All authentication in this application is handled exclusively by Clerk. No other authentication methods, libraries, or custom auth implementations should be used.

## Authentication Provider

- **Provider:** Clerk (`@clerk/nextjs`)
- **Strategy:** Modal-based sign-in/sign-up
- **Session Management:** Handled automatically by Clerk

## Core Rules

1. **Clerk only.** Never implement custom auth or use any other auth library (e.g. NextAuth, Passport, Supabase Auth).
2. **Sign in and sign up must always open as a modal** — never redirect to a dedicated sign-in/sign-up page.
3. **`/dashboard` is a protected route.** All routes under `/dashboard/*` must require authentication.
4. **Redirect authenticated users away from `/`.** If a logged-in user visits the homepage, redirect to `/dashboard`.
5. **Use `Show` from `@clerk/nextjs` for conditional UI rendering** — never use `SignedIn`/`SignedOut` components.
6. **Get the current user in Server Components** via `auth()` from `@clerk/nextjs/server`.
7. **Filter all DB queries by `userId`** from Clerk — never trust client-supplied user IDs.

## Route Protection & Redirects

Use `clerkMiddleware` with `createRouteMatcher` in `middleware.ts`:

```ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  if (userId && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
```

## Sign In / Sign Up UI

All sign-in and sign-up flows must launch as modals:

```tsx
import { SignInButton, SignUpButton } from "@clerk/nextjs";

<SignInButton mode="modal">
  <Button>Sign In</Button>
</SignInButton>

<SignUpButton mode="modal">
  <Button>Sign Up</Button>
</SignUpButton>
```

## Common Clerk Hooks & Functions

**Client Components:**

```typescript
import { useUser, useAuth } from "@clerk/nextjs";

const { user, isLoaded, isSignedIn } = useUser();
const { userId, sessionId } = useAuth();
```

**Server Components / Actions:**

```typescript
import { auth, currentUser } from "@clerk/nextjs/server";

const { userId } = await auth();
const user = await currentUser();
```

## Database User Association

Always use `userId` from Clerk as the foreign key and verify ownership on server actions:

```typescript
export async function updateLink(linkId: string, data: UpdateData) {
  const { userId } = await auth();

  if (!userId) throw new Error("Unauthorized");

  const link = await db.query.links.findFirst({
    where: eq(links.id, linkId),
  });

  if (link.userId !== userId) throw new Error("Forbidden");

  // Proceed with update
}
```

## Root Layout Setup

- Wrap the app with `<ClerkProvider>` in the root layout
- Required `.env.local` variables:
  ```
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
  CLERK_SECRET_KEY=sk_...
  ```

## Security Best Practices

1. **Never trust client-side auth state** — always verify on the server.
2. **Use Clerk's built-in middleware** — don't reinvent route protection.
3. **Validate `userId` on all server actions** — check auth before data operations.
4. **Leverage Clerk's session management** — don't implement custom tokens.

---

**Remember:** When in doubt, consult [Clerk's Next.js documentation](https://clerk.com/docs/quickstarts/nextjs). All auth concerns should be solved with Clerk's built-in features.
