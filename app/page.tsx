'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

// === SETTINGS ===
const WHATSAPP_NUMBER = "4916097205010"; // your number without + or spaces
const WHATSAPP_TEXT = encodeURIComponent("Hello — I’d like help sourcing a luxury item.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;
const BRAND = "Silken Falcon";

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* LOGO */}
            <Image src="/logo.png" alt={BRAND} width={140} height={40} priority className="h-9 w-auto object-contain" />
            <span className="font-semibold tracking-wide text-lg">{BRAND}</span>
          </div>
          <a
            href={WHATSAPP_URL}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp VIP
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Discreet Access to the World's Rarest Luxuries
        </motion.h1>
        <p className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto">
          From yachts to timepieces, we source the unobtainable for Dubai’s elite — with precision, speed, and confidentiality.
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <a
            href={WHATSAPP_URL}
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-zinc-200 transition"
          >
            Request Now
          </a>
        </div>
      </section>
    </div>
  );
}
