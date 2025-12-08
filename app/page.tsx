"use client";

import { Navigation } from "@/components/navigation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ArrowRight, Code2 } from "lucide-react";

export default function Home() {
  return (
    <AuroraBackground>
      <div className="relative z-10 min-h-screen">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <main className="relative z-10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-4xl text-center">
              {/* Main Heading */}
              <h1 className="mb-8 text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">
                Turn{" "}
                <PointerHighlight>
                  <span className="bg-gradient-to-r from-emerald-400 via-purple-500 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                    collaborative design sessions
                  </span>
                </PointerHighlight>{" "}
                into{" "}
                <span className="bg-gradient-to-r from-purple-400 via-emerald-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                  <TypewriterEffect
                    words={[
                      "written code",
                      "production apps",
                      "real software",
                      "working systems",
                    ]}
                    className="inline-block"
                  />
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-emerald-100/80 sm:text-xl">
                <span className="text-emerald-400 font-cartridge text-3xl">
                  Seance
                </span>{" "}
                is an agentic coding tool that turns your collaborative software
                design sessions into{" "}
                <span className="text-purple-400">written code</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://forms.gle/6Br64PFmTZSD4qjd9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="xl"
                    className="group border border-emerald-400 bg-emerald-500 uppercase tracking-wider text-black shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.8)]"
                  >
                    <Code2 className="h-5 w-5" />
                    Join Waitlist Now
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>

              {/* Feature Highlight */}
              <div className="mt-16 flex items-center justify-center gap-2 text-sm uppercase tracking-wider text-emerald-400">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                <span className="drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                  Powered by advanced AI agents
                </span>
              </div>
            </div>
          </div>

          {/* Visual Element - Code Preview */}
          <div className="relative mx-auto max-w-5xl px-6 pb-24 lg:px-8">
            <div className="overflow-hidden rounded-lg border-2 border-emerald-500/50 bg-black/90 p-8 shadow-[0_0_30px_rgba(16,185,129,0.3)] backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.8)]"></div>
                <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
                <span className="ml-4 font-mono text-xs uppercase text-emerald-400">
                  terminal://seance
                </span>
              </div>
              <div className="font-mono text-sm text-emerald-100/90">
                <div className="mb-2">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-emerald-400">session</span>{" "}
                  <span className="text-emerald-500/50">=</span>{" "}
                  <span className="text-purple-300">seance</span>
                  <span className="text-emerald-500/50">.</span>
                  <span className="text-emerald-400">create</span>
                  <span className="text-emerald-500/50">({"{"}</span>
                </div>
                <div className="mb-2 pl-4">
                  <span className="text-emerald-300/60">design:</span>{" "}
                  <span className="text-emerald-400">
                    &quot;Build a user authentication system&quot;
                  </span>
                  <span className="text-emerald-500/50">,</span>
                </div>
                <div className="mb-2 pl-4">
                  <span className="text-emerald-300/60">framework:</span>{" "}
                  <span className="text-emerald-400">&quot;Next.js&quot;</span>
                  <span className="text-emerald-500/50">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-emerald-300/60">output:</span>{" "}
                  <span className="text-emerald-400">
                    &quot;production-ready&quot;
                  </span>
                </div>
                <div>
                  <span className="text-emerald-500/50">{"}"});</span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-purple-400">&gt;&gt;</span>
                  <span className="animate-pulse text-emerald-400">█</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AuroraBackground>
  );
}
