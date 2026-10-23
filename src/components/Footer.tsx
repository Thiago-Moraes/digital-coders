import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#1C2838] border-t border-[#33465C] pt-12 pb-24 lg:pb-12 text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & Bipartite Logo */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex flex-col select-none">
              <div className="font-montserrat font-extrabold text-[18px] tracking-[0.14em] leading-tight">
                <span className="text-[#94A3B8]">DIGITAL</span>
                <span className="text-white ml-1.5">CODERS</span>
              </div>
              <span className="font-inter font-semibold text-[10px] tracking-[0.18em] text-[#E2E8F0] uppercase mt-0.5">
                Escola de Programação
              </span>
            </Link>

            <p className="font-inter text-xs text-[#94A3B8] leading-relaxed">
              Formação de excelência técnica para desenvolvedores e arquitetos de software em ambiente de imersão presencial no polo de Juiz de Fora.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#243447] border border-[#33465C] flex items-center justify-center text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#243447] border border-[#33465C] flex items-center justify-center text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#243447] border border-[#33465C] flex items-center justify-center text-[#CBD5E1] hover:text-[#38BDF8] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Programas */}
          <div className="flex flex-col gap-2">
            <span className="font-montserrat font-bold text-xs tracking-wider text-[#E2E8F0] uppercase">
              Programas
            </span>
            <div className="flex flex-col gap-2 font-inter text-xs">
              <a href="#trilhas" className="hover:text-white transition-colors">Bootcamp Fullstack Web</a>
              <a href="#trilhas" className="hover:text-white transition-colors">Especialização Mobile</a>
              <a href="#b2b" className="hover:text-white transition-colors">Imersões Corporativas B2B</a>
              <a href="#metodologia" className="hover:text-white transition-colors">Sala de Aula Invertida</a>
              <a href="#simulador" className="hover:text-white transition-colors">Tutor IA 24/7</a>
            </div>
          </div>

          {/* Institucional */}
          <div className="flex flex-col gap-2">
            <span className="font-montserrat font-bold text-xs tracking-wider text-[#E2E8F0] uppercase">
              Institucional
            </span>
            <div className="flex flex-col gap-2 font-inter text-xs">
              <a href="#metodologia" className="hover:text-white transition-colors">Dinâmica de Software House</a>
              <a href="#campus" className="hover:text-white transition-colors">Campus Juiz de Fora (MG)</a>
              <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos de Alunos</a>
              <a href="#b2b" className="hover:text-white transition-colors">Soluções para Empresas</a>
              <a href="#inscricao" className="hover:text-white transition-colors">Processo Seletivo</a>
            </div>
          </div>

          {/* Contato & T2C2TECH Mention */}
          <div className="flex flex-col gap-2">
            <span className="font-montserrat font-bold text-xs tracking-wider text-[#E2E8F0] uppercase">
              Contato & Sede
            </span>
            <div className="flex flex-col gap-2 font-inter text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="text-[#E2E8F0]">contato@digitalcoders.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="text-[#E2E8F0]">(32) 3025-8800</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[#E2E8F0] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Sede em Juiz de Fora, MG</span>
              </div>
            </div>
          </div>

        </div>

        {/* Menções Institucionais Obrigatórias conforme DESIGN.md e template */}
        <div className="pt-6 border-t border-[#33465C]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94A3B8] font-inter">
          <div>
            Uma iniciativa educacional alinhada aos padrões de engenharia do <strong className="text-white font-montserrat">Grupo T2C2TECH</strong>.
          </div>
          <div className="text-[11px] text-[#94A3B8]/70">
            © 2026 Digital Coders Escola de Programação. Todos os direitos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
}
