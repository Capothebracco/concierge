'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Watch, Car, Ship, Key, Building2, Gem } from "lucide-react";

// === SETTINGS ===
const BRAND = "Silken Falcon";
const WHATSAPP_NUMBER = "4916097205010"; // no + or spaces
const WHATSAPP_TEXT = encodeURIComponent("Hello — I’d like help sourcing a luxury item.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-zinc-800/80">

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt={BRAND} width={160} height={40} priority className="h-9 w-auto object-contain" />
            <span className="font-semibold tracking-wide text-lg">{BRAND}</span>
          </div>
          <a href={WHATSAPP_URL} className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition">
            <MessageCircle className="h-4 w-4" /> WhatsApp VIP
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-4xl text-center mx-auto">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Discreet Access to the World&apos;s Rarest Luxuries
            </motion.h1>
            <p className="mt-6 text-lg text-zinc-300 max-w-3xl mx-auto">
              From yachts to timepieces, we source the unobtainable for Dubai’s elite — with precision, speed, and confidentiality.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a href={WHATSAPP_URL} className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-zinc-200 transition">
                Request Now
              </a>
              <a href="#services" className="text-sm font-semibold leading-6 hover:underline">
                Explore Services →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Discrete Sourcing Across Categories</h2>
        <p className="mt-3 text-zinc-400 max-w-3xl">
          Our network spans private collectors, authorised dealers, off-market brokers, and marquee venues across Europe, the Middle East, and beyond.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card icon={<Watch className="h-5 w-5" />} title="Watches & Jewellery" desc="Daytona, Royal Oak, Nautilus, high jewellery commissions, vintage rarities." />
          <Card icon={<Car className="h-5 w-5" />} title="Supercars & Classics" desc="Ferrari allocations, GT models, bespoke specs, EU sourcing with UAE delivery." />
          <Card icon={<Ship className="h-5 w-5" />} title="Yachts & Tenders" desc="Off-market listings, survey & sea trials, buyer/seller representation." />
          <Card icon={<Key className="h-5 w-5" />} title="Hospitality & Access" desc="Priority reservations, private dining rooms, launch events, cultural access." />
          <Card icon={<Building2 className="h-5 w-5" />} title="Real Estate (Buy/Rent)" desc="Quietly sourced penthouses, villas, and investment opportunities, on and off-plan." />
          <Card icon={<Gem className="h-5 w-5" />} title="Special Commissions" desc="Limited objects, bespoke gifts, art acquisitions, ceremonial pieces." />
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold">How It Works</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <Step n={1} title="Brief" text="We define the specification, budget, and deadline in a short private intake." />
          <Step n={2} title="Commitment" text="A search initiation deposit secures your priority (credited to purchase)." />
          <Step n={3} title="Acquisition" text="We negotiate, authenticate, and secure — with transparent proof at each step." />
          <Step n={4} title="Delivery" text="Handover in Dubai by appointment, or shipped insured worldwide." />
        </div>
        <p className="mt-6 text-sm text-zinc-400 max-w-3xl">
          Vehicles & yachts: we coordinate inspection, escrow, and logistics. Watches & jewellery: authentication and condition reports.
        </p>
      </section>

      {/* FEES / MEMBERSHIP */}
      <section id="membership" className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold">Fees & Membership</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Tier name="Commission-Only" price="Per acquisition"
                features={["15–25% markup — watches & jewellery","5–15% — cars","2–5% — yachts","Deposit credited on completion"]}
                note="Ideal for one-off requests" />
          <Tier name="Executive Retainer" price="AED 15,000 / month"
                features={["Unlimited concurrent searches","Priority previews","Reduced markup","Dedicated WhatsApp line"]}
                note="For frequent buyers & families" highlight />
          <Tier name="Founders Circle" price="By invitation"
                features={["First look at off-market assets","On-site concierge at key handovers","Annual strategy review","Bespoke terms & NDAs"]}
                note="Limited memberships available" />
        </div>
      </section>

      {/* TRUST */}
      <section className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold">Trust, Security & Discretion</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm text-zinc-300">
          <div className="rounded-2xl border border-white/10 p-6">
            <ShieldCheck className="h-5 w-5" />
            <p className="mt-3">Funds handled via UAE banking, with escrow arrangements for vehicles and yachts upon request.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <ShieldCheck className="h-5 w-5" />
            <p className="mt-3">Authentication, provenance checks, and condition reports provided for all collectible categories.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <ShieldCheck className="h-5 w-5" />
            <p className="mt-3">We operate on a strict confidentiality policy. Client identities, requests, and transactions remain private.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold">Frequently Asked</h2>
        <div className="mt-8 grid gap-4">
          <FAQ q="Do you require an upfront payment?" a="Yes. A search initiation deposit secures priority and is credited to the final purchase." />
          <FAQ q="How fast can you deliver?" a="Watches & jewellery often within days; vehicles & yachts depend on inspection and logistics." />
          <FAQ q="Can you work with my family office or assistant?" a="Absolutely. We routinely coordinate with representatives and can sign bespoke NDAs." />
          <FAQ q="Do you ship internationally?" a="Yes, fully insured. Local handover in Dubai is also available by appointment." />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-lg font-medium">Private, by introduction.</div>
            <div className="mt-2 text-sm text-zinc-400 max-w-xl">
              For access requests and time-sensitive sourcing, contact us directly below. Messages are answered promptly.
            </div>
          </div>
          <div className="md:text-right">
            <a href={WHATSAPP_URL} className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-10 text-xs text-zinc-500">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

/* Components */
function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-white/0 hover:bg-white/[0.03] transition">
      <div className="flex items-center gap-3 text-zinc-200">
        <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center">{icon}</div>
        <div className="font-medium">{title}</div>
      </div>
      <p className="mt-3 text-sm text-zinc-400">{desc}</p>
    </div>
  );
}

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-6">
      <div className="text-xs text-zinc-400">Step {n}</div>
      <div className="mt-1 font-medium">{title}</div>
      <p className="mt-2 text-sm text-zinc-400">{text}</p>
    </div>
  );
}

function Tier({ name, price, features, note, highlight }: { name: string; price: string; features: string[]; note?: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border p-6 ${highlight ? "border-white/30 bg-white/5" : "border-white/10"}`}>
      <div className="text-sm text-zinc-300">{name}</div>
      <div className="mt-1 text-2xl font-semibold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-zinc-400">
        {features.map((f, i) => (<li key={i} className="flex gap-2"><span>•</span><span>{f}</span></li>))}
      </ul>
      {note && <div className="mt-4 text-xs text-zinc-500">{note}</div>}
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10">
      <button className="w-full text-left px-4 py-3 flex items-center justify-between" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="font-medium">{q}</span>
        <span className="text-zinc-500">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-4 pb-4 text-sm text-zinc-400">{a}</div>}
    </div>
  );
}
