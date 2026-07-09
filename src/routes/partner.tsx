import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, BadgeCheck, Building2, Cog, LineChart, MapPin, Users } from "lucide-react";
import { Nav } from "@/components/sites/Nav";
import { Footer } from "@/components/sites/Footer";
import { Marquee } from "@/components/sites/Marquee";
import franchise from "@/assets/franchise.jpg";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Become a Partner — Thrive Gym Franchise" },
      { name: "description", content: "Open a Thrive Gym in your city. Proven model, full setup support, premium brand. Apply for a franchise today." },
      { property: "og:title", content: "Become a Partner — Thrive Gym Franchise" },
      { property: "og:description", content: "Open a Thrive Gym in your city. Premium fitness franchise opportunity." },
    ],
  }),
  component: Partner,
});

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Partner() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <img src={franchise} alt="Thrive franchise gym floor" className="absolute inset-0 w-full h-full object-cover opacity-30" width={1600} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
              <BadgeCheck className="size-3" /> Franchise Opportunity
            </span>
            <h1 className="mt-6 text-display text-[14vw] md:text-[10vw] leading-[0.88]">
              OWN A <span className="text-primary italic">THRIVE.</span><br />
              BUILD A <br />MOVEMENT.
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/80">
              Bring India's most exciting gym brand to your city. We've spent years perfecting the model — equipment, design, coaching, marketing. You bring the ambition. We bring everything else.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground hover:opacity-90 transition">
                Apply now <ArrowRight className="size-4" />
              </a>
              <a href="#why" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 font-semibold hover:bg-secondary transition">
                Why Thrive
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Marquee items={["12+ OUTLETS", "PROFITABLE IN 18 MOS", "FULL SETUP SUPPORT", "PROVEN PLAYBOOK"]} />

      {/* NUMBERS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { v: "₹1.2Cr", l: "Avg. yr-1 revenue" },
          { v: "18mo", l: "Avg. breakeven" },
          { v: "85%", l: "Member retention" },
          { v: "20+", l: "Cities targeted" },
        ].map((s) => (
          <motion.div key={s.l} {...fade} className="rounded-2xl border border-border bg-surface p-6">
            <div className="text-display text-5xl text-primary">{s.v}</div>
            <div className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">{s.l}</div>
          </motion.div>
        ))}
      </section>

      {/* WHY */}
      <section id="why" className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div {...fade} className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Why partner with us</p>
            <h2 className="text-display text-5xl md:text-7xl">A BRAND THAT<br />ALREADY <span className="text-primary">WORKS.</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { I: Building2, t: "Turn-key buildouts", d: "From site selection to equipment install — we run the entire setup." },
              { I: Cog, t: "Operations playbook", d: "Membership systems, classes, staffing, SOPs — all done for you." },
              { I: Users, t: "Coach hiring & training", d: "Tap into our network of certified trainers and our coaching academy." },
              { I: LineChart, t: "Marketing engine", d: "National campaigns + local growth playbooks that fill your floor." },
              { I: MapPin, t: "Territory protection", d: "Exclusive catchment so you build the brand without internal competition." },
              { I: BadgeCheck, t: "Brand credibility", d: "Walk into your launch with brand trust India already recognises." },
            ].map(({ I, t, d }) => (
              <motion.div key={t} {...fade} className="rounded-2xl border border-border bg-background p-7 hover:border-primary/40 transition">
                <div className="size-12 grid place-items-center rounded-xl bg-primary/15 text-primary">
                  <I className="size-6" />
                </div>
                <h3 className="mt-5 text-display text-2xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <motion.h2 {...fade} className="text-display text-5xl md:text-7xl mb-14">
          THE <span className="text-primary">PROCESS.</span>
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { n: "01", t: "Apply", d: "Submit your interest and we'll reach out within 48 hours." },
            { n: "02", t: "Discovery", d: "We walk you through the model, unit economics, expectations." },
            { n: "03", t: "Sign & site", d: "Lock the territory and lock the location together." },
            { n: "04", t: "Launch", d: "120-day buildout to grand opening, with our team on the ground." },
          ].map((s) => (
            <motion.div key={s.n} {...fade} className="relative rounded-2xl border border-border p-6 bg-surface">
              <span className="text-display text-6xl text-primary/20 absolute right-4 top-2">{s.n}</span>
              <p className="text-xs uppercase tracking-widest text-primary">Step {s.n}</p>
              <h3 className="text-display text-3xl mt-2">{s.t}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="bg-surface py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <motion.div {...fade}>
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Apply</p>
            <h2 className="text-display text-5xl md:text-7xl">LET'S BUILD<br />SOMETHING <span className="text-primary">BIG.</span></h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
              Tell us a bit about you and your city. Our partnerships team will be in touch within 48 hours.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-10 rounded-2xl border border-primary bg-primary/10 p-10 text-center">
              <BadgeCheck className="size-12 text-primary mx-auto" />
              <h3 className="mt-4 text-display text-3xl">Application received.</h3>
              <p className="mt-2 text-muted-foreground">We'll be in touch within 48 hours.</p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-10 grid sm:grid-cols-2 gap-4"
            >
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="City of interest" name="city" required />
              <Field label="Investment capacity (₹)" name="invest" />
              <Field label="Background" name="bg" placeholder="Your professional background" />
              <div className="sm:col-span-2">
                <label className="text-sm uppercase tracking-widest text-muted-foreground">Why Thrive?</label>
                <textarea name="why" rows={4} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary transition" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:opacity-90 transition">
                  Submit application <ArrowRight className="size-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field(props: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm uppercase tracking-widest text-muted-foreground">{props.label}</label>
      <input
        name={props.name}
        type={props.type ?? "text"}
        required={props.required}
        placeholder={props.placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary transition"
      />
    </div>
  );
}
