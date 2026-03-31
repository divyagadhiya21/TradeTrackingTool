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
  Zap,
  BookOpen,
  PieChart,
  X,
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

const stats = [
  { value: "100%", label: "Free to start" },
  { value: "6+", label: "Powerful features" },
  { value: "∞", label: "Trades you can log" },
  { value: "0", label: "Spreadsheets needed" },
];

const benefits = [
  {
    icon: Zap,
    title: "Instant insights",
    description: "See your portfolio value, P&L, and performance metrics update the moment you log a trade.",
  },
  {
    icon: BookOpen,
    title: "Complete trade journal",
    description: "Every transaction is stored securely. Filter by date, symbol, or trade type to find anything instantly.",
  },
  {
    icon: PieChart,
    title: "Portfolio breakdown",
    description: "Understand exactly how your capital is allocated. Spot overexposure and rebalance with confidence.",
  },
];

const comparisons = [
  { feature: "Automatic P&L calculation", tracker: true, spreadsheet: false },
  { feature: "Trade history & filtering", tracker: true, spreadsheet: false },
  { feature: "Portfolio allocation view", tracker: true, spreadsheet: false },
  { feature: "Goal & target tracking", tracker: true, spreadsheet: false },
  { feature: "Secure, private storage", tracker: true, spreadsheet: false },
  { feature: "Works on any device", tracker: true, spreadsheet: false },
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

      {/* Stats Bar */}
      <section className="border-y border-border bg-muted/10 px-6 py-10">
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-3xl font-bold tabular-nums">{value}</span>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
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
              <Card
                key={title}
                className="border-border bg-muted/20 hover:bg-muted/40 transition-colors"
              >
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

      {/* Benefits Section */}
      <section className="px-6 py-20 md:py-28 bg-muted/20 border-y border-border">
        <div className="mx-auto max-w-5xl flex flex-col items-center gap-12">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for serious traders
            </h2>
            <p className="max-w-xl text-muted-foreground text-base leading-relaxed">
              Stop juggling spreadsheets. Get the clarity and control you need to make better
              investment decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 w-full">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-muted/50">
                  <Icon className="size-6 text-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold text-base">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-12">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why use a dedicated tracker?
            </h2>
            <p className="max-w-md text-muted-foreground text-base">
              Spreadsheets were not designed for trading. See the difference.
            </p>
          </div>
          <div className="w-full rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-muted/50 px-6 py-3 text-sm font-semibold">
              <span>Feature</span>
              <span className="text-center">Stocks Tracker Tool</span>
              <span className="text-center text-muted-foreground">Spreadsheet</span>
            </div>
            <div className="divide-y divide-border">
              {comparisons.map(({ feature, tracker, spreadsheet }) => (
                <div
                  key={feature}
                  className="grid grid-cols-3 items-center px-6 py-4 text-sm hover:bg-muted/20 transition-colors"
                >
                  <span className="text-muted-foreground">{feature}</span>
                  <span className="flex justify-center">
                    {tracker ? (
                      <CheckCircle className="size-4 text-primary" />
                    ) : (
                      <X className="size-4 text-muted-foreground" />
                    )}
                  </span>
                  <span className="flex justify-center">
                    {spreadsheet ? (
                      <CheckCircle className="size-4 text-primary" />
                    ) : (
                      <X className="size-4 text-muted-foreground/50" />
                    )}
                  </span>
                </div>
              ))}
            </div>
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
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 w-full">
            {steps.map(({ step, title, description }, index) => (
              <div key={step} className="flex flex-col items-center text-center gap-3 relative">
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px border-t border-dashed border-border" />
                )}
                <div className="flex size-12 items-center justify-center rounded-full border border-border bg-muted/50 text-sm font-bold tabular-nums text-primary">
                  {step}
                </div>
                <h3 className="font-semibold text-base">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:py-32 flex flex-col items-center text-center gap-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
          <Zap className="size-3.5 text-primary" />
          Start for free, no credit card required
        </div>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to take control of your trades?
        </h2>
        <p className="max-w-md text-muted-foreground text-base leading-relaxed">
          Join traders who use Stocks Tracker Tool to stay on top of their portfolio performance.
          Your smarter trading journey starts here.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Show when="signed-out">
            <SignUpButton mode="modal">
              <Button size="lg" className="gap-2">
                Start tracking for free
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
                Open Dashboard
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </Show>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-medium text-foreground">
            <TrendingUp className="size-4 text-primary" />
            Stocks Tracker Tool
          </div>
          <p className="text-center">
            Built to help you invest smarter — track trades, grow your portfolio.
          </p>
          <p>© {new Date().getFullYear()} Stocks Tracker Tool</p>
        </div>
      </footer>
    </div>
  );
}
