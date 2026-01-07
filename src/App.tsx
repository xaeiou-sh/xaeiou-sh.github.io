import { Navigation } from "@/components/navigation";
import { HeroBackground } from "@/components/HeroBackground";
import { CursorOverlay } from "@/components/CursorOverlay";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ArrowRight, Code2 } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-void">
      {/* Cursor Overlay - decorative animated cursors */}
      <CursorOverlay />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section with contained background */}
      <section className="relative overflow-hidden">
        {/* Animated Background - contained to hero */}
        <HeroBackground />

        <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="mb-8 min-h-[4.5rem] text-3xl font-bold tracking-tight text-pure sm:min-h-[3.5rem] sm:text-4xl lg:min-h-[4rem] lg:text-5xl">
              Turn{" "}
              <span className="text-neon text-glow-neon">
                collaborative design sessions
              </span>{" "}
              into{" "}
              <span className="text-neon">
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
            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">
              <span className="font-cartridge text-2xl text-neon text-glow-neon sm:text-3xl">
                Seance
              </span>{" "}
              is an agentic coding tool that turns your collaborative software
              design sessions into{" "}
              <span className="text-pure">written code</span>.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a
                href="https://forms.gle/6Br64PFmTZSD4qjd9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="xl"
                  className="group bg-neon text-void glow-neon transition-all duration-300 hover:glow-neon-intense"
                >
                  <Code2 className="h-5 w-5" />
                  Join Waitlist Now
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </div>

            {/* Feature Highlight */}
            <div className="mt-16 flex items-center justify-center gap-2 text-sm text-mist">
              <div className="h-2 w-2 animate-pulse-neon rounded-full bg-neon"></div>
              <span>Powered by advanced AI agents</span>
            </div>
          </div>
        </div>
      </section>

        {/* Screenshots Section */}
        <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
          <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-pure sm:text-3xl">
            See It In <span className="text-neon text-glow-neon">Action</span>
          </h2>

          <div className="space-y-24">
            {/* Whiteboards - Image left, copy right */}
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="flex-1">
                <div className="overflow-hidden rounded-lg border-4 border-neon border-glow-neon">
                  <img
                    src="/screenshots/whiteboards.jpeg"
                    alt="Whiteboards"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-4 text-xl font-bold text-pure sm:text-2xl">
                  Design Together, Build Faster
                </h3>
                <p className="text-mist leading-relaxed">
                  Sketch out your ideas on collaborative whiteboards. Seance watches your design sessions in real-time, understanding your intent and translating rough concepts into structured code architecture.
                </p>
              </div>
            </div>

            {/* Multiple Windows - Copy left, image right */}
            <div className="flex flex-col-reverse items-center gap-8 md:flex-row">
              <div className="flex-1 text-center md:text-right">
                <h3 className="mb-4 text-xl font-bold text-pure sm:text-2xl">
                  Context Across Every Window
                </h3>
                <p className="text-mist leading-relaxed">
                  Work naturally across multiple windows—docs, diagrams, references, and code. Seance synthesizes context from everything on your screen to generate code that actually fits your project.
                </p>
              </div>
              <div className="flex-1">
                <div className="overflow-hidden rounded-lg border-4 border-phantom border-glow-phantom">
                  <img
                    src="/screenshots/multiple-windows.jpeg"
                    alt="Multiple Windows"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
