import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="font-cartridge text-2xl text-emerald-400 sm:text-3xl">
            Seance
          </div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
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
              className="text-zinc-400 transition-colors duration-300 hover:bg-zinc-800 hover:text-emerald-400"
            >
              Sign In
            </Button>
          </a>
          <a
            href="https://forms.gle/6Br64PFmTZSD4qjd9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-emerald-500 text-zinc-950 transition-colors duration-300 hover:bg-emerald-400">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};
