import type React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="container flex flex-col items-center py-12 text-left text-base sm:text-lg sm:leading-7">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Why I Built SNAP</h1>
          <p className="mt-6 leading-7 text-muted-foreground">
            Last weekend, I took some time off—and when I got back to work, I noticed something. My brain felt slow, like it wasn't firing at full speed. 
            It took longer to get into deep focus, and I wasn't as sharp as usual.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            I realized that just like athletes warm up before a game, our brains also need a cognitive warm-up to hit peak performance faster. 
            Instead of diving straight into complex work, I wanted a way to prime my brain in just a few minutes—getting my processing speed, memory, and focus fully activated before tackling demanding tasks.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That's why I built SNAP—a hub for the best neuroscience-backed exercises designed to help you snap into high-performance mode instantly.
          </p>

          <h2 className="mt-12 text-2xl font-bold sm:text-3xl">What's Next</h2>
          <p className="mt-6 leading-7 text-muted-foreground pl-0">
            For V1, I hand-picked four powerful exercises, each targeting a key cognitive skill:
          </p>
          <ul className="mt-4 list-disc ml-0 pl-5 space-y-2 leading-7 text-muted-foreground">
            <li><strong>Speed Math</strong> - Sharpens mental calculations and processing speed.</li>
            <li><strong>Dual-N-Back</strong> - Boosts working memory and cognitive flexibility.</li>
            <li><strong>Speed Reading</strong> - Trains fast comprehension and attention span.</li>
            <li><strong>Stroop Test</strong> - Enhances cognitive control and reaction time.</li>
          </ul>

          <p className="mt-4 leading-7 text-muted-foreground">
            These are just the beginning. As SNAP grows, I'll be adding more exercises based on what actually works—through research, user feedback, and personal experience. 
            If you have a warm-up routine that gets your brain firing, let me know—I'd love to add it to the hub.
          </p>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Built by <Link href="https://danielgao.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Daniel Gao</Link>.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/">
              <Button size="lg" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
