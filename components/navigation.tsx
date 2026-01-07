import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-void/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="font-cartridge text-2xl text-neon text-glow-neon sm:text-3xl">
            Seance
          </div>
          <div className="h-2 w-2 animate-pulse-neon rounded-full bg-neon"></div>
        </a>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://forms.gle/6Br64PFmTZSD4qjd9"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex"
          >
            <Button
              variant="ghost"
              className="text-mist transition-colors duration-300 hover:bg-secondary hover:text-neon"
            >
              Sign In
            </Button>
          </a>
          <a
            href="https://forms.gle/6Br64PFmTZSD4qjd9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-neon text-void glow-neon transition-all duration-300 hover:glow-neon-intense">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};
