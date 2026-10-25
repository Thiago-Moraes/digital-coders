"use client";

import React, { useState } from "react";
import { 
  Terminal, 
  Smartphone, 
  Building2, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ChevronRight,
  FileText
} from "lucide-react";
import { COURSE_TRACKS, CourseTrack } from "@/data/mockData";
import { SyllabusModal } from "./SyllabusModal";

interface TracksProps {
  onSelectTrackForApplication?: (trackId: string) => void;
}

export function Tracks({ onSelectTrackForApplication }: TracksProps) {
  const [selectedTrackForSyllabus, setSelectedTrackForSyllabus] = useState<CourseTrack | null>(null);

  const handleSelectTrack = (trackId: string) => {
    if (onSelectTrackForApplication) {
      onSelectTrackForApplication(trackId);
    }
    const element = document.getElementById("inscricao");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="trilhas" className="py-20 relative bg-[#141E2B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 max-w-3xl">
          <span className="font-montserrat font-bold text-[10px] tracking-[0.2em] text-[#94A3B8] uppercase">
            Trilhas Presenciais
          </span>
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-4xl leading-tight text-white">
            Programas Imersivos de Alta Densidade
          </h2>
          <p className="font-inter text-sm text-[#94A3B8]">
            Grade curricular validada trimestralmente por tech leads e diretores de engenharia.
          </p>
        </div>

        {/* 3 Tracks Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {COURSE_TRACKS.map((track) => {
            const isFullstack = track.id === "bootcamp-fullstack";
            const isMobile = track.id === "especializacao-mobile";
            const isB2B = track.id === "imersoes-b2b";

            return (
              <div
                key={track.id}
                className={`rounded-2xl p-6 bg-[#243447] flex flex-col justify-between transition-all duration-300 shadow-xl ${
                  track.highlight
                    ? "border-2 border-[#38BDF8]/60 lg:-translate-y-1.5 shadow-black/40"
                    : "border border-[#33465C] hover:border-[#38BDF8]/40"
                }`}
              >
                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 font-montserrat font-bold text-[10px] tracking-wider text-[#38BDF8] uppercase bg-[#1C2838] border border-[#33465C] px-2.5 py-1 rounded-md">
                      {isFullstack && <Terminal className="w-3.5 h-3.5" />}
                      {isMobile && <Smartphone className="w-3.5 h-3.5" />}
                      {isB2B && <Building2 className="w-3.5 h-3.5" />}
                      <span>
                        {isFullstack ? "Presencial / 6 Meses" : isMobile ? "Presencial / Híbrido • 4 Meses" : "In-Company • Customizado"}
                      </span>
                    </span>

                    {track.highlight && (
                      <span className="font-montserrat font-bold text-[10px] text-[#141E2B] bg-[#38BDF8] px-2.5 py-1 rounded uppercase tracking-wider">
                        Principal
                      </span>
                    )}
                  </div>

                  <h3 className="font-montserrat font-extrabold text-xl text-white mb-2">
                    {track.title}
                  </h3>

                  <p className="font-inter text-xs text-[#94A3B8] leading-relaxed mb-6">
                    {track.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {track.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded bg-[#1C2838] border border-[#33465C] font-mono text-[11px] ${
                          tech.includes("AI") || tech.includes("OpenAI") ? "text-[#38BDF8]" : "text-[#E2E8F0]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-[#33465C]/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-inter text-[#94A3B8]">
                    <span className="uppercase text-[10px]">Início da Turma</span>
                    <span className="font-montserrat text-xs font-bold text-white">{track.nextCohort}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedTrackForSyllabus(track)}
                      className="min-h-[42px] px-3 rounded-lg bg-[#1C2838] border border-[#33465C] text-[#E2E8F0] font-montserrat text-xs font-semibold flex items-center justify-center gap-1 hover:bg-[#202e40] transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Ementa</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectTrack(track.id)}
                      className="min-h-[42px] px-3 rounded-lg bg-white text-[#1C2838] font-montserrat text-xs font-bold flex items-center justify-center gap-1 shadow hover:bg-[#E2E8F0] active:scale-95 transition-all"
                    >
                      <span>Candidatar</span>
                      <ChevronRight className="w-4 h-4 text-[#1C2838]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Syllabus Modal */}
      <SyllabusModal
        track={selectedTrackForSyllabus}
        onClose={() => setSelectedTrackForSyllabus(null)}
        onSelectTrack={handleSelectTrack}
      />
    </section>
  );
}
