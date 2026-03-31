import { SignInButton, SignUpButton, Show } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  BarChart2,
  History,
  Shield,
  Target,
  LineChart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Track Trades",
    description:
      "Log every buy and sell transaction with price, quantity, and date. Keep a complete record of your trading activity.",
  },
  {
    icon: BarChart2,
    title: "Portfolio Overview",
    description:
      "See all your holdings in one place. Get a clear snapshot of your current positions and their market value.",
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    description:
      "Measure returns, track profit & loss, and evaluate your trading performance with intuitive charts.",
  },
  {
    icon: History,
    title: "Trade History",
    description:
      "Browse your full trade history with powerful filtering and sorting. Never lose track of a past transaction.",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description:
      "Set portfolio targets and monitor progress. Stay focused on your investment objectives.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your trade data is protected and only accessible to you. We take your privacy seriously.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create an Account",
    description: "Sign up in seconds and get instant access to your personal trading dashboard.",
  },
  {
    step: "02",
    title: "Log Your Trades",
    description: "Add your stock transactions — buys, sells, and dividends — with full details.",
  },
  {
    step: "03",
    title: "Analyze & Grow",
    description: "Review your performance, spot patterns, and make more informed trading decisions.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-24 md:py-36 gap-6 bg-gradient-to-b from-background to-muted/30">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
          <TrendingUp className="size-3.5 text-primary" />
          Smart stock trade tracking
        </div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Track every trade.{" "}
          <span className="text-primary">Grow your portfolio.</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
          Stocks Tracker Tool gives you a clear view of your trading activity, portfolio
          performance, and investment history — all in one secure place.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Show when="signed-out">
            <SignUpButton mode="modal">
              <Button size="lg" className="gap-2">
                Get started free
                <ArrowRight className="size-4" />
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button size="lg" variant="outline">
                Sign in
              </Button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <Button size="lg" asChild>
              <a href="/dashboard" className="gap-2">
                Go to Dashboard
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </Show>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
          {["Free to get started", "No credit card required", "Your data stays private"].map(
            (item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle className="size-3.5 text-primary" />
                {item}
              </span>
            )
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl flex flex-col items-center gap-12">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to trade smarter
            </h2>
            <p className="max-w-xl text-muted-foreground text-base leading-relaxed">
              A focused set of tools designed to help individual investors stay organised and
              informed.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-border bg-muted/20 hover:bg-muted/40 transition-colors">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-20 md:py-28 bg-muted/20 border-y border-border">
        <div className="mx-auto max-w-4xl flex flex-col items-center gap-12">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
            <p className="max-w-md text-muted-foreground text-base">
              Get up and running in minutes with three simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 w-full">
            {steps.map(({ step, title, description }) => (
              <div key={step} className="flex flex-col items-center text-center gap-3">
                <span className="text-4xl font-bold text-primary/30 tabular-nums">{step}</span>
                <h3 className="font-semibold text-base">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:py-28 flex flex-col items-center text-center gap-6">
        <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to take control of your trades?
        </h2>
        <p className="max-w-md text-muted-foreground text-base leading-relaxed">
          Join traders who use Stocks Tracker Tool to stay on top of their portfolio performance.
        </p>
        <Show when="signed-out">
          <SignUpButton mode="modal">
            <Button size="lg" className="gap-2">
              Start tracking for free
              <ArrowRight className="size-4" />
            </Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <Button size="lg" asChild>
            <a href="/dashboard" className="gap-2">
              Open Dashboard
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </Show>
      </section>
    </div>
  );
}
