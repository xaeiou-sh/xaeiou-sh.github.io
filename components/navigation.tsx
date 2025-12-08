"use client";

import React from "react";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="relative z-50 w-full border-b border-emerald-500/30 bg-black/80 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.3)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="font-cartridge text-4xl font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">
            SEANCE
          </div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
        </a>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="https://forms.gle/6Br64PFmTZSD4qjd9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              className="hidden border border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200 md:inline-flex"
            >
              Sign In
            </Button>
          </a>
          <a
            href="https://forms.gle/6Br64PFmTZSD4qjd9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="border border-emerald-400 bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.8)]">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};
