import { forwardRef } from "react";
import { Navigation } from "@/components/navigation";
import { HeroBackground } from "@/components/HeroBackground";
import { CursorOverlay } from "@/components/CursorOverlay";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import CardSwap, { Card } from "@/components/CardSwap";
import { ArrowRight, Code2 } from "lucide-react";

type ConnectionType =
  | 'local'
  | { tailscale: string } // machine name over tailscale
  | string; // region names like "us-west-2"

interface AgentCardProps {
  name: string;
  activity: string;
  connection?: ConnectionType;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const ConnectionBadge = ({ connection }: { connection?: ConnectionType }) => {
  if (!connection) return null;

  if (typeof connection === 'object' && 'tailscale' in connection) {
    return (
      <div className="flex items-center gap-1.5 text-xs text-zinc-500">
        <span>{connection.tailscale} over</span>
        <img src="/logos/tailscale.svg" alt="Tailscale" className="h-3 w-auto" />
        <span>tailscale</span>
      </div>
    );
  }

  return (
    <div className="text-xs text-zinc-500">
      {connection}
    </div>
  );
};

const ClaudeCard = forwardRef<HTMLDivElement, AgentCardProps>(
  ({ name, activity, connection, style, onClick }, ref) => (
    <Card ref={ref} className="flex flex-col justify-between p-6" style={style} onClick={onClick}>
      <pre className="font-mono text-base leading-none text-flame text-glow-flame">{` ▐▛███▜▌
▝▜█████▛▘
  ▘▘ ▝▝`}</pre>
      <div>
        <div className="font-mono text-lg text-flame">{name}</div>
        <ConnectionBadge connection={connection} />
        <div className="mt-1 flex items-center gap-2 text-sm text-pure">
          <div className="h-2 w-2 animate-pulse rounded-full bg-flame"></div>
          {activity}
        </div>
      </div>
    </Card>
  )
);

const GeminiCard = forwardRef<HTMLDivElement, AgentCardProps>(
  ({ name, activity, connection, style, onClick }, ref) => (
    <Card ref={ref} className="flex flex-col justify-between p-4" style={style} onClick={onClick}>
      <pre className="font-mono text-[4px] leading-none text-[#4285F4]">{` ███            █████████  ██████████ ██████   ██████ █████ ██████   █████ █████
░░░███         ███░░░░░███░░███░░░░░█░░██████ ██████ ░░███ ░░██████ ░░███ ░░███
  ░░░███      ███     ░░░  ░███  █ ░  ░███░█████░███  ░███  ░███░███ ░███  ░███
    ░░░███   ░███          ░██████    ░███░░███ ░███  ░███  ░███░░███░███  ░███
     ███░    ░███    █████ ░███░░█    ░███ ░░░  ░███  ░███  ░███ ░░██████  ░███
   ███░      ░░███  ░░███  ░███ ░   █ ░███      ░███  ░███  ░███  ░░█████  ░███
 ███░         ░░█████████  ██████████ █████     █████ █████ █████  ░░█████ █████
░░░            ░░░░░░░░░  ░░░░░░░░░░ ░░░░░     ░░░░░ ░░░░░ ░░░░░    ░░░░░ ░░░░░`}</pre>
      <div>
        <div className="font-mono text-lg text-[#4285F4]">{name}</div>
        <ConnectionBadge connection={connection} />
        <div className="mt-1 flex items-center gap-2 text-sm text-pure">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#4285F4]"></div>
          {activity}
        </div>
      </div>
    </Card>
  )
);

const CodexCard = forwardRef<HTMLDivElement, AgentCardProps>(
  ({ name, activity, connection, style, onClick }, ref) => (
    <Card ref={ref} className="flex flex-col justify-between p-4" style={style} onClick={onClick}>
      <img src="/logos/openai.svg" alt="OpenAI" className="h-16 w-auto object-contain self-start" />
      <div>
        <div className="font-mono text-lg text-[#10A37F]">{name}</div>
        <ConnectionBadge connection={connection} />
        <div className="mt-1 flex items-center gap-2 text-sm text-pure">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#10A37F]"></div>
          {activity}
        </div>
      </div>
    </Card>
  )
);

const GLMCard = forwardRef<HTMLDivElement, AgentCardProps>(
  ({ name, activity, connection, style, onClick }, ref) => (
    <Card ref={ref} className="flex flex-col justify-between p-4" style={style} onClick={onClick}>
      <img src="/logos/glm.png" alt="GLM" className="h-16 w-auto object-contain self-start" />
      <div>
        <div className="font-mono text-lg text-[#1E88E5]">{name}</div>
        <ConnectionBadge connection={connection} />
        <div className="mt-1 flex items-center gap-2 text-sm text-pure">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#1E88E5]"></div>
          {activity}
        </div>
      </div>
    </Card>
  )
);

const QwenCard = forwardRef<HTMLDivElement, AgentCardProps>(
  ({ name, activity, connection, style, onClick }, ref) => (
    <Card ref={ref} className="flex flex-col justify-between p-4" style={style} onClick={onClick}>
      <img src="/logos/qwen.png" alt="Qwen" className="h-16 w-auto object-contain self-start" />
      <div>
        <div className="font-mono text-lg text-[#6366F1]">{name}</div>
        <ConnectionBadge connection={connection} />
        <div className="mt-1 flex items-center gap-2 text-sm text-pure">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#6366F1]"></div>
          {activity}
        </div>
      </div>
    </Card>
  )
);

const DeepSeekCard = forwardRef<HTMLDivElement, AgentCardProps>(
  ({ name, activity, connection, style, onClick }, ref) => (
    <Card ref={ref} className="flex flex-col justify-between p-4" style={style} onClick={onClick}>
      <img src="/logos/deepseek.png" alt="DeepSeek" className="h-16 w-auto object-contain self-start" />
      <div>
        <div className="font-mono text-lg text-[#4D6BFE]">{name}</div>
        <ConnectionBadge connection={connection} />
        <div className="mt-1 flex items-center gap-2 text-sm text-pure">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#4D6BFE]"></div>
          {activity}
        </div>
      </div>
    </Card>
  )
);

export default function App() {
  return (
    <div className="min-h-screen bg-void">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with contained background */}
      <section className="relative overflow-hidden">
        {/* Cursor Overlay - constrained to hero */}
        <CursorOverlay />
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

      {/* Multi-Agent Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 md:items-start">
            {/* Copy */}
            <div className="relative z-10 flex-1 text-center md:text-left">
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-pure sm:text-3xl lg:text-4xl">
                More Agents Than You Can{" "}
                <span className="text-neon text-glow-neon">Track</span>
              </h2>
              <p className="text-lg leading-relaxed text-mist">
                While you design, a team of specialized agents works in
                parallel—architects planning structure, implementers writing
                code, reviewers catching issues.{" "}
                <span className="font-cartridge text-xl text-neon">Seance</span>{" "}
                orchestrates them all so you don't have to.
              </p>
            </div>

            {/* CardSwap */}
            <div className="relative h-[500px] w-full flex-1 md:h-[500px] translate-y-16 md:translate-y-0 md:-translate-x-48">
              <CardSwap
                cardDistance={50}
                verticalDistance={50}
                delay={3000}
                pauseOnHover={true}
                width={400}
                height={250}
              >
                <ClaudeCard name="Atlas" activity="Designing system structure..." connection="local" />
                {/* <QwenCard name="Echo" activity="Processing natural language..." connection={{ tailscale: "nyx" }} /> */}
                <ClaudeCard name="Echo" activity="Processing natural language..." connection={{ tailscale: "nyx" }} />
                {/* <GeminiCard name="Forge" activity="Writing React components..." connection="us-west-2" /> */}
                <ClaudeCard name="Forge" activity="Writing React components..." connection="us-west-2" />
                {/* <DeepSeekCard name="Depth" activity="Deep code analysis..." connection={{ tailscale: "helios" }} /> */}
                <ClaudeCard name="Depth" activity="Deep code analysis..." connection={{ tailscale: "helios" }} />
                {/* <CodexCard name="Sentinel" activity="Checking for vulnerabilities..." connection="us-east-1" /> */}
                <ClaudeCard name="Sentinel" activity="Checking for vulnerabilities..." connection="us-east-1" />
                {/* <GLMCard name="Nexus" activity="Coordinating agent tasks..." connection={{ tailscale: "luna" }} /> */}
                <ClaudeCard name="Nexus" activity="Coordinating agent tasks..." connection={{ tailscale: "luna" }} />
              </CardSwap>
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
