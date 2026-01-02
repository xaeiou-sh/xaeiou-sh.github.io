import { Navigation } from "@/components/navigation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ArrowRight, Code2 } from "lucide-react";

export default function App() {
  return (
    <AuroraBackground>
      <div className="relative z-10 min-h-screen">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <main className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-4xl text-center">
              {/* Main Heading */}
              <h1 className="mb-6 text-[1.75rem] font-bold uppercase leading-tight tracking-tight text-white min-[375px]:text-3xl sm:mb-8 sm:text-5xl sm:leading-tight lg:text-7xl">
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
              <p className="mx-auto mb-12 max-w-2xl text-sm leading-6 text-emerald-100/80 min-[375px]:text-base min-[375px]:leading-7 sm:text-lg sm:leading-8 lg:text-xl">
                <span className="text-emerald-400 font-cartridge text-lg min-[375px]:text-xl sm:text-2xl lg:text-3xl">
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
                    className="group border border-emerald-400 bg-emerald-500 text-xs uppercase tracking-wider text-black shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] min-[375px]:text-sm sm:text-base"
                  >
                    <Code2 className="h-4 w-4 min-[375px]:h-5 min-[375px]:w-5" />
                    Join Waitlist Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 min-[375px]:h-5 min-[375px]:w-5" />
                  </Button>
                </a>
              </div>

              {/* Feature Highlight */}
              <div className="mt-12 flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-emerald-400 sm:mt-16 sm:text-sm">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                <span className="drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                  Powered by advanced AI agents
                </span>
              </div>
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
                See It In{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-purple-500 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                  Action
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-emerald-100/80 sm:text-base lg:text-lg">
                Experience the power of collaborative software design
              </p>
            </div>

            <Carousel
              slides={[
                {
                  src: "/screenshots/whiteboards.jpeg",
                  title: "Whiteboards",
                  button: "Learn More",
                },
                {
                  src: "/screenshots/multiple-windows.jpeg",
                  title: "Multiple Windows",
                  button: "Learn More",
                },
              ]}
            />
          </div>
        </main>
      </div>
    </AuroraBackground>
  );
}
