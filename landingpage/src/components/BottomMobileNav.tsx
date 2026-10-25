"use client";

import React from "react";
import { Home, Code, Smartphone, Briefcase, CheckCircle2 } from "lucide-react";

export function BottomMobileNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 pb-safe bg-[#1C2838]/95 backdrop-blur-lg border-t border-[#33465C] shadow-lg">
      <div className="flex items-center justify-around h-16 px-2">
        <a
          href="#"
          className="flex flex-col items-center justify-center min-w-[48px] min-h-[44px] text-white hover:text-[#38BDF8] transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="font-montserrat text-[10px] font-bold mt-0.5">Início</span>
        </a>

        <a
          href="#trilhas"
          className="flex flex-col items-center justify-center min-w-[48px] min-h-[44px] text-[#94A3B8] hover:text-white transition-colors"
        >
          <Code className="w-5 h-5" />
          <span className="font-montserrat text-[10px] font-medium mt-0.5">Bootcamp</span>
        </a>

        <a
          href="#trilhas"
          className="flex flex-col items-center justify-center min-w-[48px] min-h-[44px] text-[#94A3B8] hover:text-white transition-colors"
        >
          <Smartphone className="w-5 h-5" />
          <span className="font-montserrat text-[10px] font-medium mt-0.5">Mobile</span>
        </a>

        <a
          href="#b2b"
          className="flex flex-col items-center justify-center min-w-[48px] min-h-[44px] text-[#94A3B8] hover:text-white transition-colors"
        >
          <Briefcase className="w-5 h-5" />
          <span className="font-montserrat text-[10px] font-medium mt-0.5">B2B</span>
        </a>

        <a
          href="#inscricao"
          className="flex flex-col items-center justify-center min-w-[48px] min-h-[44px] text-[#38BDF8] hover:text-white transition-colors"
        >
          <CheckCircle2 className="w-5 h-5" />
          <span className="font-montserrat text-[10px] font-bold mt-0.5">Candidatar</span>
        </a>
      </div>
    </nav>
  );
}
