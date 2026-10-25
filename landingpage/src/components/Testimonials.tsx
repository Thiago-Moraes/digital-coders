import React from "react";
import { Star, Building2, Users } from "lucide-react";
import { TESTIMONIALS, HIRING_PARTNERS } from "@/data/mockData";

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 relative bg-[#141E2B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-10 max-w-3xl">
          <span className="font-montserrat font-bold text-[10px] tracking-[0.2em] text-[#38BDF8] uppercase">
            Depoimentos & Casos Reais
          </span>
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-4xl leading-tight text-white">
            Validação de Quem Atua em Produção
          </h2>
          <p className="font-inter text-sm text-[#94A3B8]">
            Engenheiros formados e líderes técnicos que aceleraram resultados através do modelo de Software House da Digital Coders.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#243447] border border-[#33465C] flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center gap-1 text-[#38BDF8] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#38BDF8] text-[#38BDF8]" />
                  ))}
                </div>
                <p className="font-inter text-xs sm:text-sm text-[#E2E8F0] italic leading-relaxed mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#33465C]/80">
                <img
                  src={
                    idx === 0
                      ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDRuMEPmjEssI9ISihDvZjrXPRJa30eRbuaJDj3TFQbmN2jjehqHl_NOVwHEG-h86fe6pP3hyd-6c5LuiSGXReCavYCN0AdFuzAJ6APs_V72D7R667-p3-wJz2pX9sdO9s_U_FV0F5DgjBcfgXK4wI7PsEE8fA83DYPNOsj6a4fNVnN2UV1gLJLBLtpmRBcqVVu0ohbN2J1DvObYRtO3RIbWVZrzu-4R7lhduvnsJ4swY7KU9GbA431PA"
                      : testimonial.avatar
                  }
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#33465C]"
                />
                <div className="flex flex-col min-w-0">
                  <span className="font-montserrat font-bold text-xs text-white truncate">
                    {testimonial.name}
                  </span>
                  <span className="font-inter text-[11px] text-[#94A3B8] truncate">
                    {testimonial.role} • <span className="text-[#38BDF8]">{testimonial.company}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Partners Bar */}
        <div className="p-4 rounded-xl bg-[#1C2838] border border-[#33465C] text-center">
          <span className="font-montserrat text-[10px] uppercase tracking-wider text-[#94A3B8] font-bold block mb-3">
            Onde Nossos Desenvolvedores e Squads Atuam:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-[#CBD5E1]">
            {HIRING_PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#243447] border border-[#33465C] hover:border-[#38BDF8] transition-colors"
              >
                <Building2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
