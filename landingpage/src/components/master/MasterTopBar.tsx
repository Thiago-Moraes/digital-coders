"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Zap } from "lucide-react";

interface MasterTopBarProps {
  onCtaClick?: () => void;
}

export function MasterTopBar({ onCtaClick }: MasterTopBarProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: "47",
    minutes: "59",
    seconds: "59",
  });

  useEffect(() => {
    const PROMO_MS = 48 * 60 * 60 * 1000;
    const STORAGE_KEY = "digitalcoders_master_upgrade_start";
    
    let startTime: number;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && !isNaN(Number(stored))) {
        startTime = Number(stored);
      } else {
        startTime = Date.now();
        localStorage.setItem(STORAGE_KEY, String(startTime));
      }
    } catch {
      startTime = Date.now();
    }

    const deadline = startTime + PROMO_MS;

    const updateCountdown = () => {
      const now = Date.now();
      const diff = deadline - now;

      if (diff <= 0) {
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0"),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0F1722]/95 backdrop-blur-md border-b border-[#38BDF8]/30 shadow-xl shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
          
          {/* Logo Brand Lockup */}
          <Link href="/" className="flex items-center gap-2 group select-none shrink-0">
            <div className="flex flex-col">
              <div className="font-montserrat font-black text-sm sm:text-base tracking-[0.14em] leading-none">
                <span className="text-[#94A3B8] group-hover:text-white transition-colors">DIGITAL</span>
                <span className="text-white ml-1">CODERS</span>
                <span className="ml-1.5 px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#38BDF8] text-[#071423] tracking-widest uppercase">
                  MASTER
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#38BDF8] tracking-widest uppercase mt-0.5">
                Upgraded Edition
              </span>
            </div>
          </Link>

          {/* Center: Live 48h Offer Countdown */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#182332] border border-[#33465C]">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
              <span className="font-montserrat text-xs font-bold text-[#E2E8F0] tracking-wider uppercase">
                Oferta Especial de Upgrade:
              </span>
            </div>

            {/* Countdown Boxes */}
            <div className="flex items-center gap-1 font-mono text-sm">
              <div className="px-2 py-0.5 rounded bg-black/80 border border-[#38BDF8]/40 text-[#38BDF8] font-bold">
                {timeLeft.hours}
                <span className="text-[9px] text-[#94A3B8] ml-0.5 font-sans">h</span>
              </div>
              <span className="text-[#38BDF8] font-bold">:</span>
              <div className="px-2 py-0.5 rounded bg-black/80 border border-[#38BDF8]/40 text-[#38BDF8] font-bold">
                {timeLeft.minutes}
                <span className="text-[9px] text-[#94A3B8] ml-0.5 font-sans">m</span>
              </div>
              <span className="text-[#38BDF8] font-bold">:</span>
              <div className="px-2 py-0.5 rounded bg-black/80 border border-[#38BDF8]/40 text-[#38BDF8] font-bold">
                {timeLeft.seconds}
                <span className="text-[9px] text-[#94A3B8] ml-0.5 font-sans">s</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-[#94A3B8]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Garantia 7 Dias</span>
            </div>

            <a
              href="#planos"
              onClick={onCtaClick}
              className="min-h-[38px] px-3.5 sm:px-5 py-2 rounded-lg bg-gradient-to-r from-[#38BDF8] to-[#0ea5e9] text-[#071423] font-montserrat text-xs font-black tracking-wider uppercase flex items-center gap-1.5 shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_28px_rgba(56,189,248,0.7)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              <span>Destravar Master</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#071423]" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
