"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, BookOpen, Terminal, Sparkles, Users, Building2, MapPin } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1C2838]/95 backdrop-blur-md border-b border-[#33465C] shadow-lg shadow-black/20"
          : "bg-[#1C2838]/85 backdrop-blur-sm border-b border-[#33465C]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Official Bipartite Logo Lockup */}
          <Link href="/" className="flex flex-col select-none group focus:outline-none shrink-0">
            <div className="font-montserrat font-extrabold text-[17px] sm:text-[19px] tracking-[0.14em] leading-tight">
              <span className="text-[#94A3B8] group-hover:text-white transition-colors">DIGITAL</span>
              <span className="text-white ml-1.5">CODERS</span>
            </div>
            <span className="font-inter font-semibold text-[9.5px] sm:text-[10px] tracking-[0.18em] text-[#E2E8F0]/90 uppercase mt-0.5">
              Escola de Programação
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 text-xs xl:text-sm font-medium text-[#94A3B8] shrink min-w-0">
            <a
              href="#metodologia"
              className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap py-1"
            >
              <BookOpen className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#38BDF8] shrink-0" />
              <span>Metodologia</span>
            </a>
            <a
              href="#trilhas"
              className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap py-1"
            >
              <Terminal className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#CBD5E1] shrink-0" />
              <span>Trilhas & Cursos</span>
            </a>
            <a
              href="#simulador"
              className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap py-1"
            >
              <Sparkles className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#38BDF8] shrink-0" />
              <span>Tutor IA 24/7</span>
            </a>
            <a
              href="#depoimentos"
              className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap py-1"
            >
              <Users className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#94A3B8] shrink-0" />
              <span>Depoimentos</span>
            </a>
            <a
              href="#b2b"
              className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap py-1"
            >
              <Building2 className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#CBD5E1] shrink-0" />
              <span>Para Empresas (B2B)</span>
            </a>
            <a
              href="#campus"
              className="hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap py-1"
            >
              <MapPin className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#38BDF8] shrink-0" />
              <span>Campus JF</span>
            </a>
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#inscricao"
              className="min-h-[38px] px-3.5 sm:px-4 py-1.5 rounded-lg bg-white text-[#1C2838] font-montserrat text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-sm hover:bg-[#E2E8F0] active:scale-95 transition-all whitespace-nowrap"
            >
              <span>Inscrever</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1C2838]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-lg bg-[#243447] border border-[#33465C] flex items-center justify-center text-[#E2E8F0] hover:text-white transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#33465C] bg-[#141E2B]/98 backdrop-blur-xl px-6 pt-4 pb-8 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2.5 font-medium text-[#E2E8F0]">
            <a
              href="#metodologia"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#1C2838] border border-[#33465C]/60 hover:bg-[#243447] text-white transition-colors"
            >
              <BookOpen className="w-5 h-5 text-[#38BDF8]" />
              <span>Metodologia Invertida</span>
            </a>
            <a
              href="#trilhas"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#1C2838] border border-[#33465C]/60 hover:bg-[#243447] text-white transition-colors"
            >
              <Terminal className="w-5 h-5 text-[#CBD5E1]" />
              <span>Trilhas de Formação</span>
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#1C2838] border border-[#33465C]/60 hover:bg-[#243447] text-white transition-colors"
            >
              <Sparkles className="w-5 h-5 text-[#38BDF8]" />
              <span>Tutor IA 24/7</span>
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#1C2838] border border-[#33465C]/60 hover:bg-[#243447] text-white transition-colors"
            >
              <Users className="w-5 h-5 text-[#94A3B8]" />
              <span>Depoimentos de Alunos</span>
            </a>
            <a
              href="#b2b"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#1C2838] border border-[#33465C]/60 hover:bg-[#243447] text-white transition-colors"
            >
              <Building2 className="w-5 h-5 text-[#CBD5E1]" />
              <span>Soluções Corporativas (B2B)</span>
            </a>
            <a
              href="#campus"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#1C2838] border border-[#33465C]/60 hover:bg-[#243447] text-white transition-colors"
            >
              <MapPin className="w-5 h-5 text-[#38BDF8]" />
              <span>Campus Juiz de Fora (MG)</span>
            </a>
          </div>

          <div className="pt-2 border-t border-[#33465C]/60">
            <a
              href="#inscricao"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold font-montserrat uppercase tracking-wider text-sm bg-white text-[#1C2838] shadow-md"
            >
              <span>Candidatar-se à Próxima Turma</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
