import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">Stocks List Dashboard</h1>
      <Card className="bg-sky-200 text-sky-900 ring-sky-300">
        <CardContent className="p-6">
          <p>Your stocks will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
