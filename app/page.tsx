import type React from "react";
import { ArrowRight, Brain, Dumbbell, Zap, Keyboard, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ExerciseCard from "@/components/ExerciseCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1">

        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-24">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Instantly Warm Up Your Brain
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A hub for neuroscience-backed exercises that boost focus, memory, and processing speed
              before tackling deep work.
            </p>
            <div className="space-x-4">
              <Link href="/about">
                <Button size="lg" className="gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-2 mb-2 w-1/2 mx-auto border-t border-gray-800"></div>

        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-2xl font-bold leading-[1.1] sm:text-3xl">Mental Warm-up Exercises</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Select an exercise to activate your brain before deep work
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-4">
            <ExerciseCard
              title="Speed Math"
              description="Quick mental calculations to activate numerical processing"
              icon={<Brain className="h-10 w-10" />}
              href="https://arithmetic.zetamac.com/"
              gradient="from-blue-500 to-cyan-500"
            />
            <ExerciseCard
              title="Dual-N-Back"
              description="Improves working memory and fluid intelligence"
              icon={<Dumbbell className="h-10 w-10" />}
              href="https://dual-n-back.io/"
              gradient="from-purple-500 to-pink-500"
            />
            <ExerciseCard
              title="Speed Reading"
              description="Trains fast comprehension and information processing"
              icon={<Zap className="h-10 w-10" />}
              href="https://www.freereadingtest.com/"
              gradient="from-amber-500 to-orange-500"
            />
            <ExerciseCard
              title="Stroop Test"
              description="Enhances cognitive flexibility and attention control"
              icon={<Brain className="h-10 w-10" />}
              href="https://www.memozor.com/other-memory-games/words-memory-games/stroop-effect-game"
              gradient="from-green-500 to-emerald-500"
            />
            <ExerciseCard
              title="Speed Typing"
              description="Improves typing speed, accuracy, and finger dexterity"
              icon={<Keyboard className="h-10 w-10" />}
              href="https://monkeytype.com/"
              gradient="from-red-500 to-pink-500"
            />
            <ExerciseCard
              title="Trivia"
              description="Test your knowledge and boost cognitive recall"
              icon={<HelpCircle className="h-10 w-10" />}
              href="/trivia"
              gradient="from-yellow-500 to-green-500"
            />
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}

