"use client"

import React from "react"
import { Button } from "./ui/button"

export const Navigation = () => {
  return (
    <nav className="relative z-50 w-full border-b border-white/10 bg-slate-950/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-white">Seance</div>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-slate-300 transition-colors hover:text-white">
            Features
          </a>
          <a href="#docs" className="text-sm text-slate-300 transition-colors hover:text-white">
            Docs
          </a>
          <a href="#pricing" className="text-sm text-slate-300 transition-colors hover:text-white">
            Pricing
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="hidden text-slate-300 hover:bg-white/10 hover:text-white md:inline-flex"
          >
            Sign In
          </Button>
          <Button className="bg-cyan-500 text-slate-950 hover:bg-cyan-400">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}
