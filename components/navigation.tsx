import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-border bg-void/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="font-cartridge text-3xl text-pure sm:text-4xl">
            Seance
          </div>
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
              className="text-mist transition-colors duration-300 hover:bg-secondary hover:text-flame"
            >
              Sign In
            </Button>
          </a>
          <a
            href="https://forms.gle/6Br64PFmTZSD4qjd9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-flame text-void glow-flame transition-all duration-300 hover:glow-flame-intense">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};
