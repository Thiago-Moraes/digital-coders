"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Terminal, Shield } from "lucide-react";

export function MasterFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050C16] border-t border-[#33465C]/60 py-12 text-[#94A3B8] text-xs font-inter relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#33465C]/40">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="font-montserrat font-black text-lg tracking-[0.14em] text-white">
              <span className="text-[#94A3B8]">DIGITAL</span> CODERS
              <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#38BDF8] text-[#071423] tracking-widest uppercase">
                MASTER
              </span>
            </Link>
            <span className="text-[11px] text-[#94A3B8] mt-1 font-mono">
              Formação Executiva de Arquitetura de Software & IA
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#CBD5E1]">
            <a href="#raio-x" className="hover:text-[#38BDF8] transition-colors">Raio-X 3D</a>
            <a href="#grade" className="hover:text-[#38BDF8] transition-colors">Grade (21 Módulos)</a>
            <a href="#planos" className="hover:text-[#38BDF8] transition-colors">Planos & Upgrade</a>
            <a href="#faq" className="hover:text-[#38BDF8] transition-colors">FAQ</a>
            <Link href="/" className="text-[#38BDF8] hover:underline flex items-center gap-1">
              <span>← Voltar ao Portal Principal</span>
            </Link>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#142030] border border-[#33465C] text-[#E2E8F0] hover:text-[#38BDF8] hover:border-[#38BDF8] transition-all"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Legal Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-[#94A3B8]">
          <p>
            Digital Coders · Formação Master · © 2026. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span>Polo de Inovação Tecnológica Juiz de Fora (MG)</span>
            <span>•</span>
            <span>Pagamento Seguro Criptografado</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
