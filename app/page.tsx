'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Crown, Gem, Watch, Car, Ship, Key, Building2, CalendarCheck2, Sparkles, MessageCircle, Phone, Mail, ArrowRight } from "lucide-react";
import "./globals.css";

// Replace these with your actual contact details once ready
const WHATSAPP_URL = "https://wa.me/971500000000?text=I%20am%20interested%20in%20your%20private%20sourcing%20concierge.";
const PHONE_NUMBER = "+971 50 000 0000";
const EMAIL = "concierge@example.com";
const BRAND = "Private Acquisition Office"; // temporary placeholder name

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-zinc-800/80">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-400" />
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

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Discreet access to the things money can’t easily buy.
            </motion.h1>
            <p className="mt-6 text-lg text-zinc-300 max-w-2xl">
              We privately source, acquire, and deliver exceptional assets and experiences for discerning clients in Dubai — from rare watches and supercars to yachts, fine jewellery, coveted reservations, and off‑market real estate.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={WHATSAPP_URL} className="inline-flex items-center gap-2 rounded-2xl bg-white text-black px-6 py-3 text-sm font-medium hover:bg-zinc-200 transition">
                <Crown className="h-4 w-4" /> Request Access
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 text-sm hover:bg-white/10 transition">
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-zinc-400">
              <div className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Discretion‑first</div>
              <div className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4"/> By invitation</div>
              <div className="inline-flex items-center gap-2"><CalendarCheck2 className="h-4 w-4"/> Time‑definite sourcing</div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/10 p-6 bg-gradient-to-b from-zinc-900/60 to-zinc-900">
              <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[0_0_120px_-20px_rgba(255,255,255,0.08)]" />
              <h3 className="text-xl font-medium">Begin a Private Request</h3>
              <p className="mt-2 text-sm text-zinc-400">Share what you’re looking for. We’ll respond within hours via WhatsApp or email.</p>
              <form className="mt-6 grid gap-4" onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}} aria-label="Private Request Form">
                <input className="rounded-xl bg-zinc-950/60 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" placeholder="Your Name" required aria-label="Your Name" />
                <input className="rounded-xl bg-zinc-950/60 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" placeholder="Email or WhatsApp" required aria-label="Email or WhatsApp" />
                <select className="rounded-xl bg-zinc-950/60 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" aria-label="Category">
                  <option>Watches</option>
                  <option>Cars</option>
                  <option>Yachts</option>
                  <option>Jewellery</option>
                  <option>Dining & Experiences</option>
                  <option>Real Estate</option>
                  <option>Other</option>
                </select>
                <textarea className="rounded-xl bg-zinc-950/60 border border-white/10 px-4 py-3 text-sm min-h-[120px] outline-none focus:ring-2 focus:ring-white/20" placeholder="Describe the item, budget, timeframe…" aria-label="Request details" />
                <button type="submit" className="rounded-2xl bg-white text-black px-5 py-3 text-sm font-medium hover:bg-zinc-200 transition">
                  Submit Secure Request
                </button>
                {submitted && (
                  <p className="text-xs text-emerald-400">Thank you — we will reply privately via WhatsApp or email.</p>
                )}
              </form>
              <div className="mt-6 text-xs text-zinc-500">By submitting, you agree to confidential, one‑to‑one communication. We do not share or resell client information.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-semibold">Discrete Sourcing Across Categories</h2>
        <p className="mt-3 text-zinc-400 max-w-3xl">Our network spans private collectors, authorised dealers, off‑market brokers, and marquee venues across Europe, the Middle East, and beyond. We acquire on your terms, with your timeline, under full discretion.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard icon={<Watch className="h-5 w-5" />} title="Watches & Jewellery" desc="Daytona, Royal Oak, Nautilus, high jewellery commissions, vintage rarities." />
          <ServiceCard icon={<Car className="h-5 w-5" />} title="Supercars & Classics" desc="Ferrari allocations, GT models, bespoke specs, EU sourcing with UAE delivery." />
          <ServiceCard icon={<Ship className="h-5 w-5" />} title="Yachts & Tenders" desc="Off‑market listings, survey & sea trial coordination, seller/buyer representation." />
          <ServiceCard icon={<Key className="h-5 w-5" />} title="Hospitality & Access" desc="Priority reservations, private dining rooms, launch events, cultural access." />
          <ServiceCard icon={<Building2 className="h-5 w-5" />} title="Real Estate (Buy/Rent)" desc="Quietly sourced penthouses, villas, and investment opportunities, on and off‑plan." />
          <ServiceCard icon={<Gem className="h-5 w-5" />} title="Special Commissions" desc="Limited objects, bespoke gifts, art acquisitions, ceremonial pieces." />
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold">How It Works</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          <Step n={1} title="Brief" text="We define the specification, budget, and deadline in a short private intake." />
          <Step n={2} title="Commitment" text="A search initiation deposit secures your priority (credited to purchase)." />
          <Step n={3} title="Acquisition" text="We negotiate, authenticate, and secure — with transparent proof at each step." />
          <Step n={4} title="Delivery" text="Your item is hand‑off in Dubai by appointment, or shipped insured worldwide." />
        </div>
        <div className="mt-6 text-sm text-zinc-400 max-w-3xl">For vehicles & yachts we coordinate inspection, escrow, and logistics. For watches & jewellery we provide authentication and condition reports. Discretion governs all communications.</div>
      </section>

      {/* MEMBERSHIP / PRICING */}
      <section id="membership" className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold">Fees & Membership</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Tier name="Commission‑Only" price="Per acquisition" features={["15–25% markup – watches & jewellery","5–15% – cars","2–5% – yachts (industry standard)","Search deposit credited on completion"]} note="Ideal for one‑off requests" />
          <Tier highlight name="Executive Retainer" price="AED 15,000 / month" features={["Unlimited concurrent searches","Priority response & previews","Reduced per‑deal markup","Dedicated WhatsApp line"]} note="For frequent buyers & families" />
          <Tier name="Founders Circle" price="By invitation" features={["First look at off‑market assets","On‑site concierge at key handovers","Annual strategy review","Bespoke terms & NDAs"]} note="Limited memberships available" />
        </div>
      </section>

      {/* TRUST */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
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
      <section id="faq" className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold">Frequently Asked</h2>
        <div className="mt-8 grid gap-4">
          <FAQ q="Do you require an upfront payment?" a="Yes. A search initiation deposit secures priority and is credited to the final purchase. This protects both parties and accelerates results." />
          <FAQ q="How fast can you deliver?" a="Watches and jewellery often within days; vehicles and yachts vary by inspection and logistics. Timelines are agreed at brief." />
          <FAQ q="Can you work with my family office or assistant?" a="Absolutely. We regularly coordinate with representatives and can sign bespoke NDAs." />
          <FAQ q="Do you ship internationally?" a="Yes, fully insured. Local handover in Dubai is also available by appointment." />
          <FAQ q="What makes you different?" a="Our network and velocity. We combine European sourcing reach with a discreet, on‑the‑ground presence in Dubai." />
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-lg font-medium">Private, by introduction.</div>
            <div className="mt-2 text-sm text-zinc-400 max-w-xl">For access requests and time‑sensitive sourcing, contact us directly below. Messages are answered promptly.</div>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <a href={WHATSAPP_URL} className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition" aria-label="Phone">
              <Phone className="h-4 w-4" /> {PHONE_NUMBER}
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition" aria-label="Email">
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-10 text-xs text-zinc-500">© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-zinc-900/40 to-zinc-900/20 hover:bg-zinc-900/40 transition shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
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
    <div className={`rounded-2xl border p-6 ${highlight ? "border-white/30 bg-white/5" : "border-white/10 bg-white/0"}`}>
      <div className="text-sm text-zinc-300">{name}</div>
      <div className="mt-1 text-2xl font-semibold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-zinc-400">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2"><span>•</span><span>{f}</span></li>
        ))}
      </ul>
      {note && <div className="mt-4 text-xs text-zinc-500">{note}</div>}
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10">
      <button className="w-full text-left px-4 py-3 flex items-center justify-between" onClick={()=>setOpen(!open)} aria-expanded={open}>
        <span className="font-medium">{q}</span>
        <span className="text-zinc-500">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-4 pb-4 text-sm text-zinc-400">{a}</div>}
    </div>
  );
}
