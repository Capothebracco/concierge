'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Crown, Gem, Watch, Car, Ship, Key, Building2, CalendarCheck2, Sparkles, MessageCircle } from "lucide-react";

// === QUICK SETTINGS ===
const WHATSAPP_NUMBER = "4916097205010";
const WHATSAPP_TEXT = encodeURIComponent("Hello — I’d like help sourcing a luxury item.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;
const PHONE_NUMBER = "+49 160 9720 5010";
const EMAIL = "concierge@example.com";
const BRAND = "Silken Falcon";
const LOGO_SRC = "/logo.png";
const FAVICON_SRC = "/favicon.png";
const OG_IMAGE_SRC = "/og-image.png";

export const metadata = {
  title: BRAND,
  description: "Discreet luxury sourcing for Dubai's elite.",
  icons: {
    icon: FAVICON_SRC
  },
  openGraph: {
    title: BRAND,
    description: "Discreet access to rare luxury goods and experiences.",
    images: [OG_IMAGE_SRC]
  }
};

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-zinc-800/80">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={LOGO_SRC} alt={BRAND} width={140} height={40} priority className="h-9 w-auto object-contain" />
            <span className="font-semibold tracking-wide text-lg">{BRAND}</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">How It Works</a>
            <a href="#membership" className="hover:text-white">Membership</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <a href={WHATSAPP_URL} className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition">
              <MessageCircle className="h-4 w-4" /> WhatsApp VIP
            </a>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <div className="max-w-2xl text-center mx-auto">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Discreet Access to the World's Rarest Luxuries
            </motion.h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              From yachts to timepieces, we source the unobtainable for Dubai’s elite — with precision, speed, and confidentiality.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a href={WHATSAPP_URL} className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-zinc-200 transition">
                Request Now
              </a>
              <a href="#services" className="text-sm font-semibold leading-6 text-white hover:underline">
                Explore Services →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
