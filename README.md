# Stocks Tracker Tool

A full-stack stock trade tracking application built with **Next.js**. Log your buy and sell transactions, monitor your portfolio performance, and review your complete trade history — all in one secure place.

---

## Technology Stack

| Layer | Technology | URL / Docs |
|---|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) | https://nextjs.org/docs |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | https://www.typescriptlang.org/docs |
| **Runtime** | [React 19](https://react.dev/) | https://react.dev |
| **Database** | [PostgreSQL](https://www.postgresql.org/) via [Neon](https://neon.tech/) (serverless) | https://neon.tech/docs |
| **ORM** | [Drizzle ORM](https://orm.drizzle.team/) | https://orm.drizzle.team/docs |
| **Authentication** | [Clerk](https://clerk.com/) (`@clerk/nextjs`) | https://clerk.com/docs/quickstarts/nextjs |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | https://tailwindcss.com/docs |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) | https://ui.shadcn.com/docs |
| **Icons** | [Lucide React](https://lucide.dev/) | https://lucide.dev/icons |
| **Utilities** | [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge), [class-variance-authority](https://cva.style/docs) | — |
| **Animations** | [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) | — |
| **DB Migrations** | [Drizzle Kit](https://orm.drizzle.team/kit-docs/overview) | https://orm.drizzle.team/kit-docs/overview |

---

## Project Structure

```
TradeTrackingTool/           # repository root
├── app/                        # Next.js App Router pages & layouts
│   ├── api/
│   │   └── health/
│   │       └── route.ts        # GET /api/health — health check endpoint
│   ├── dashboard/
│   │   └── page.tsx            # /dashboard — protected stocks dashboard
│   ├── globals.css             # Global Tailwind CSS styles
│   ├── layout.tsx              # Root layout (ClerkProvider, header, nav)
│   └── page.tsx                # / — public landing page (homepage)
├── components/
│   └── ui/                     # shadcn/ui reusable components (Button, Card, …)
├── db/
│   ├── index.ts                # Drizzle ORM client (Neon serverless connection)
│   └── schema.ts               # Database schema definitions
├── docs/
│   ├── auth.md                 # Authentication guidelines (Clerk)
│   └── ui.md                   # UI component guidelines (shadcn/ui)
├── lib/
│   └── utils.ts                # Shared utility functions (cn helper, etc.)
├── public/                     # Static assets
├── proxy.ts                    # Route protection & request handling (Clerk middleware)
├── next.config.ts              # Next.js configuration
├── drizzle.config.ts           # Drizzle Kit configuration (schema & migrations)
├── components.json             # shadcn/ui CLI configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint configuration
└── package.json                # Dependencies & npm scripts
```

---

## Application Routes

| Route | Access | Description |
|---|---|---|
| `http://localhost:3000/` | Public | Landing page — highlights app features |
| `http://localhost:3000/dashboard` | 🔒 Authenticated | Stocks list dashboard |
| `http://localhost:3000/api/health` | Public | Health check — returns `{ status, timestamp, uptime }` |

> **Note:** Authenticated users visiting `/` are automatically redirected to `/dashboard`.  
> Unauthenticated users visiting `/dashboard` are redirected back to `/`.

---

## Getting Started

### Prerequisites

- [Node.js 18+](https://nodejs.org/)
- A [Neon](https://neon.tech/) PostgreSQL database
- A [Clerk](https://clerk.com/) application

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
# Neon PostgreSQL connection string
DATABASE_URL=postgresql://<user>:<password>@<host>/<database>?sslmode=require

# Clerk authentication keys (from https://dashboard.clerk.com)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
```

### 3. Apply Database Migrations

```bash
npx drizzle-kit push
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server at http://localhost:3000 |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npx drizzle-kit push` | Push schema changes to the database |
| `npx drizzle-kit studio` | Open Drizzle Studio (DB GUI) |

---

## Deploy on Vercel

The easiest way to deploy this app is with the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub.
2. Import the repository in Vercel.
3. Add the required environment variables (`DATABASE_URL`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`).
4. Deploy.

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
