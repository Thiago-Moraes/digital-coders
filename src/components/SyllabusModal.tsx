"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, Calendar, Clock, Laptop, ArrowRight, Award, Layers } from "lucide-react";
import { CourseTrack } from "@/data/mockData";

interface SyllabusModalProps {
  track: CourseTrack | null;
  onClose: () => void;
  onSelectTrack: (trackId: string) => void;
}

export function SyllabusModal({ track, onClose, onSelectTrack }: SyllabusModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (track) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [track, onClose]);

  if (!track) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#141E2B] border border-[#33465C] rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header Bar */}
        <div className="relative p-6 sm:p-8 bg-[#1C2838] border-b border-[#33465C]">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#243447] transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#243447] border border-[#33465C] text-xs font-montserrat font-bold text-[#38BDF8] uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Ementa Curricular Completa</span>
          </div>

          <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-white">
            {track.title}
          </h3>

          <p className="mt-2 text-sm sm:text-base text-[#94A3B8] max-w-2xl font-inter">
            {track.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-5 text-xs sm:text-sm font-inter text-[#CBD5E1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#38BDF8]" />
              <span>{track.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-[#CBD5E1]" />
              <span>{track.format}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#38BDF8]" />
              <span>Início: {track.nextCohort}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6 text-[#94A3B8] font-inter">
          
          <div>
            <h4 className="font-montserrat text-xs uppercase tracking-wider text-white mb-2 font-bold flex items-center gap-2">
              <Award className="w-4 h-4 text-[#38BDF8]" />
              Perfil do Programa
            </h4>
            <p className="text-sm text-[#CBD5E1] bg-[#1C2838] p-4 rounded-xl border border-[#33465C]">
              {track.targetAudience}
            </p>
          </div>

          <div>
            <h4 className="font-montserrat text-xs uppercase tracking-wider text-white mb-4 font-bold flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#38BDF8]" />
              Grade de Engenharia ({track.modules.length} Módulos)
            </h4>

            <div className="space-y-3">
              {track.modules.map((mod, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#1C2838] border border-[#33465C]"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-[#38BDF8] bg-[#243447] px-2 py-0.5 rounded border border-[#33465C]">
                      {mod.number}
                    </span>
                    <span className="font-montserrat text-[10px] text-[#CBD5E1] font-semibold uppercase tracking-wider">
                      Entregável
                    </span>
                  </div>

                  <h5 className="font-montserrat font-bold text-base text-white mb-1">
                    {mod.title}
                  </h5>

                  <p className="text-xs text-[#94A3B8] mb-3 leading-relaxed">
                    {mod.description}
                  </p>

                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#141E2B] border border-[#33465C] text-xs text-[#E2E8F0]">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white font-montserrat">Projeto:</strong> {mod.deliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-montserrat text-xs uppercase tracking-wider text-white mb-3 font-bold">
              Stack Tecnológica
            </h4>
            <div className="flex flex-wrap gap-2">
              {track.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-[#1C2838] text-[#E2E8F0] border border-[#33465C] text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#101C2C] border-t border-[#33465C] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#94A3B8] block">Próxima Turma Presencial</span>
            <span className="font-montserrat text-sm font-bold text-white">{track.nextCohort} • 24 vagas</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#94A3B8] hover:text-white transition-colors w-full sm:w-auto"
            >
              Fechar
            </button>
            <button
              type="button"
              onClick={() => {
                onSelectTrack(track.id);
                onClose();
              }}
              className="px-6 py-2.5 rounded-lg bg-white text-[#1C2838] font-montserrat text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow hover:bg-[#E2E8F0] w-full sm:w-auto transition-all"
            >
              <span>Garantir Vaga</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
