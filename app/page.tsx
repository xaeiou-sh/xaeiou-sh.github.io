"use client"

import { Navigation } from "@/components/navigation"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { Button } from "@/components/ui/button"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { ArrowRight, Code2 } from "lucide-react"

export default function Home() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(15, 23, 42)"
      gradientBackgroundEnd="rgb(30, 41, 59)"
      firstColor="59, 130, 246"
      secondColor="147, 51, 234"
      thirdColor="236, 72, 153"
      fourthColor="6, 182, 212"
      fifthColor="139, 92, 246"
      pointerColor="59, 130, 246"
      size="80%"
      blendingValue="hard-light"
      containerClassName="!fixed"
      interactive={true}
    >
      <div className="relative z-10 min-h-screen">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <main className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Main Heading */}
            <h1 className="mb-8 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Turn{" "}
              <PointerHighlight>
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  collaborative design sessions
                </span>
              </PointerHighlight>{" "}
              into{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                <TypewriterEffect
                  words={["written code", "production apps", "real software", "working systems"]}
                  className="inline-block"
                />
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Seance is an agentic coding tool that turns your collaborative software design sessions into written code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="xl"
                className="group bg-cyan-500 text-slate-950 hover:bg-cyan-400"
              >
                <Code2 className="h-5 w-5" />
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-slate-700 bg-slate-900/50 text-white hover:bg-slate-800/50"
              >
                Explore Features
              </Button>
            </div>

            {/* Feature Highlight */}
            <div className="mt-16 flex items-center justify-center gap-2 text-sm text-slate-400">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Powered by advanced AI agents</span>
            </div>
          </div>
        </div>

        {/* Visual Element - Code Preview */}
        <div className="relative mx-auto max-w-5xl px-6 pb-24 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm text-slate-300">
              <div className="mb-2">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">session</span>{" "}
                <span className="text-slate-500">=</span>{" "}
                <span className="text-cyan-400">seance</span>
                <span className="text-slate-500">.</span>
                <span className="text-yellow-400">create</span>
                <span className="text-slate-500">({"{"}</span>
              </div>
              <div className="mb-2 pl-4">
                <span className="text-slate-400">design:</span>{" "}
                <span className="text-green-400">&quot;Build a user authentication system&quot;</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="mb-2 pl-4">
                <span className="text-slate-400">framework:</span>{" "}
                <span className="text-green-400">&quot;Next.js&quot;</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="pl-4">
                <span className="text-slate-400">output:</span>{" "}
                <span className="text-green-400">&quot;production-ready&quot;</span>
              </div>
              <div>
                <span className="text-slate-500">{"}"});</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </BackgroundGradientAnimation>
  );
}
