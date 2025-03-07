import type React from "react"
import { ArrowRight, Brain, Dumbbell, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">SNAP</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Instantly Warm Up Your Brain
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A sleek, no-friction hub for neuroscience-backed exercises that boost focus, memory, and processing speed
              before tackling deep work.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Mental Warm-up Exercises</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Select an exercise to activate your brain before deep work
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-4">
            <ExerciseCard
              title="Speed Math"
              description="Quick mental calculations to activate numerical processing"
              icon={<Brain className="h-10 w-10" />}
              href="https://example.com/speed-math"
              gradient="from-blue-500 to-cyan-500"
            />
            <ExerciseCard
              title="Dual-N-Back"
              description="Improves working memory and fluid intelligence"
              icon={<Dumbbell className="h-10 w-10" />}
              href="https://example.com/dual-n-back"
              gradient="from-purple-500 to-pink-500"
            />
            <ExerciseCard
              title="Speed Reading"
              description="Trains fast comprehension and information processing"
              icon={<Zap className="h-10 w-10" />}
              href="https://example.com/speed-reading"
              gradient="from-amber-500 to-orange-500"
            />
            <ExerciseCard
              title="Stroop Test"
              description="Enhances cognitive flexibility and attention control"
              icon={<Brain className="h-10 w-10" />}
              href="https://example.com/stroop-test"
              gradient="from-green-500 to-emerald-500"
            />
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-800 bg-black py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Built for peak mental performance. © {new Date().getFullYear()} SNAP.
          </p>
        </div>
      </footer>
    </div>
  )
}

interface ExerciseCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  gradient: string
}

function ExerciseCard({ title, description, icon, href, gradient }: ExerciseCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-xl border border-gray-800 bg-black/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div
        className={cn(
          "absolute inset-0 opacity-10 blur-xl transition-all duration-300 group-hover:opacity-25",
          `bg-gradient-to-br ${gradient}`,
        )}
      />
      <CardHeader>
        <div className={cn("mb-2 inline-flex rounded-lg p-3", `bg-gradient-to-br ${gradient}`)}>{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Start Exercise <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}

