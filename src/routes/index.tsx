import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import class1 from "@/assets/class1.jpg";
import class2 from "@/assets/class2.jpg";
import class3 from "@/assets/class3.jpg";
import class4 from "@/assets/class4.jpg";
import vision from "@/assets/vision.jpg";
import founder1 from "@/assets/founder1.jpg";
import founder2 from "@/assets/founder2.jpg";
import { Nav } from "@/components/sites/Nav";
import { Footer } from "@/components/sites/Footer";
import { Marquee } from "@/components/sites/Marquee";

export const Route = createFileRoute("/")(  {
  head: () => ({
    meta: [
      { title: "Thrive Gym — Train Hard. Live Well. Thrive." },
      { name: "description", content: "India's most exciting gym experience. Premium equipment, expert coaches, group classes and a community built around your goals." },
      { property: "og:title", content: "Thrive Gym — Train Hard. Live Well. Thrive." },
      { property: "og:description", content: "India's most exciting gym experience." },
    ],
  }),
  component: Home,
});

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const locations = [
  {
    id: 1,
    name: "Ocus Medley, Gurugram",
    address: "Ground Floor, Ocus Medley, Sector 99, Gurugram, Haryana 122018",
    hours: "Mon–Fri: 5:30 AM – 11 PM · Sat–Sun: 6 AM – 10 PM",
    phone: "+91 98100 12345",
    email: "gurugram@thrivegym.in",
    members: "2,400+",
    coaches: "18",
    rating: "4.9",
    features: ["Olympic Lifting Zone", "Boxing Lab", "Sauna & Recovery", "Café Bar", "Parking Available"],
    mapEmbed: "https://maps.google.com/maps?q=Gurugram+Sector+99&output=embed",
    img: class1,
  },
  {
    id: 2,
    name: "Dwarka Sector 23",
    address: "Plot 45, Sector 23, Dwarka, New Delhi 110077",
    hours: "Mon–Fri: 5 AM – 11:30 PM · Sat–Sun: 6 AM – 10 PM",
    phone: "+91 98100 67890",
    email: "dwarka@thrivegym.in",
    members: "1,800+",
    coaches: "14",
    rating: "4.8",
    features: ["CrossFit Rig", "HIIT Studio", "Women-Only Zone", "Physiotherapy", "Free WiFi"],
    mapEmbed: "https://maps.google.com/maps?q=Dwarka+Sector+23+Delhi&output=embed",
    img: class3,
  },
];

type Location = typeof locations[number];

function LocationModal({ loc, onClose }: { loc: Location; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);
  const images = [loc.img, class2, class4];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        <motion.div
          className="relative z-10 w-full max-w-2xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── IMAGE CAROUSEL ── */}
          <div className="relative h-64 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                src={images[activeImg]}
                alt={loc.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

            {/* Prev */}
            <button
              onClick={() => setActiveImg((p) => (p - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 size-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center hover:bg-black/80 transition"
            >
              <LucideIcons.ChevronLeft className="size-4" />
            </button>

            {/* Next */}
            <button
              onClick={() => setActiveImg((p) => (p + 1) % images.length)}
              className="absolute right-16 top-1/2 -translate-y-1/2 size-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center hover:bg-black/80 transition"
            >
              <LucideIcons.ChevronRight className="size-4" />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 size-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center hover:bg-black/80 transition"
            >
              <LucideIcons.X className="size-4" />
            </button>

            {/* Thumbnails */}
            <div className="absolute bottom-10 left-4 flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`size-12 rounded-lg overflow-hidden border-2 transition ${
                    i === activeImg ? "border-primary" : "border-white/20"
                  }`}
                >
                  <img src={img} className="size-full object-cover" />
                </button>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeImg ? "w-6 bg-primary" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Badge */}
            <div className="absolute bottom-4 right-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                <LucideIcons.MapPin className="size-3" /> Thrive Gym
              </span>
            </div>
          </div>

          {/* ── ALL ORIGINAL DETAILS ── */}
          <div className="p-6 space-y-5">
            <div>
              <h3 className="text-display text-3xl">{loc.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground flex items-start gap-2">
                <LucideIcons.MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                {loc.address}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: LucideIcons.Users, label: "Members", value: loc.members },
                { icon: LucideIcons.Star, label: "Rating", value: loc.rating },
                { icon: LucideIcons.Dumbbell, label: "Coaches", value: loc.coaches },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-surface rounded-xl p-3 text-center">
                  <Icon className="size-4 text-primary mx-auto mb-1" />
                  <div className="text-display text-xl">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <LucideIcons.Clock className="size-4 text-primary shrink-0 mt-0.5" />
              <p className="text-sm">{loc.hours}</p>
            </div>

            {/* Facilities */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Facilities</p>
              <div className="flex flex-wrap gap-2">
                {loc.features.map((f) => (
                  <span key={f} className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              
              <a  href={`tel:${loc.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                <LucideIcons.Phone className="size-4" /> {loc.phone}
              </a>
              <a
                href={`mailto:${loc.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-semibold hover:bg-secondary transition"
              >
                <LucideIcons.Mail className="size-4" /> Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
const trainers = [
  { name: "Raj Malhotra", role: "Head Strength Coach", spec: "Olympic Lifting · Powerlifting", exp: "12 yrs", img: class1 },
  { name: "Priya Sharma", role: "HIIT & Cardio Lead", spec: "Functional Training · Nutrition", exp: "8 yrs", img: class2 },
  { name: "Arjun Nair", role: "Boxing Coach", spec: "Combat Sports · Conditioning", exp: "10 yrs", img: class3 },
  { name: "Meera Iyer", role: "Yoga & Mobility", spec: "Hatha Yoga · Recovery Science", exp: "9 yrs", img: class4 },
];

function Home() {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* MARQUEE — fixed at the very top */}
      <div className="fixed top-0 inset-x-0 z-50">
        <Marquee items={["STRENGTH", "ENDURANCE", "MOBILITY", "COMMUNITY", "RECOVERY", "MINDSET"]} />
      </div>

    <Nav offsetTop />


{/* spacer for fixed marquee + fixed nav */}
<div className="h-14" />
<div className="h-16" />

{/* Location selector — sits cleanly below marquee */}
<div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-wrap items-center gap-4">
  <p className="text-xs uppercase tracking-widest text-muted-foreground shrink-0">
    Select a location
  </p>
  <div className="flex flex-wrap gap-3">
    {locations.map((loc) => (
      <button
        key={loc.id}
        onClick={() => setActiveLocation(loc)}
        className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
          activeLocation?.id === loc.id
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-background hover:border-primary hover:text-primary"
        }`}
      >
        <LucideIcons.MapPin className="size-3.5" />
        {loc.name}
      </button>
    ))}
  </div>
</div>

{/* HERO */}
<section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <img
          src={hero}
          alt="Athlete deadlifting in a dark gym"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

        <div className="relative mx-auto max-w-7xl w-full px-5 lg:px-8 pb-16 lg:pb-24 pt-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-widest">
              <LucideIcons.Sparkles className="size-3 text-primary" /> India's new fitness standard
            </span>
            <h1 className="mt-6 text-display text-[14vw] md:text-[9vw] leading-[0.85]">
              TRAIN HARD.<br />
              LIVE <span className="text-primary italic">WELL.</span><br />
              THRIVE.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">
              Premium equipment. World-class coaches. A community that pushes you to be 1% better — every single day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#programs" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground hover:opacity-90 transition">
                Start your trial <LucideIcons.ArrowRight className="size-4" />
              </a>
              <Link to="/vision" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 backdrop-blur px-7 py-4 font-semibold hover:bg-secondary transition">
                Our Vision
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { v: "12+", l: "Outlets across India" },
          { v: "50k", l: "Members thriving" },
          { v: "120", l: "Certified coaches" },
          { v: "24/7", l: "Open access" },
        ].map((s) => (
          <motion.div key={s.l} {...fade} className="border-l-2 border-primary pl-5">
            <div className="text-display text-5xl md:text-6xl">{s.v}</div>
            <div className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">{s.l}</div>
          </motion.div>
        ))}
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="bg-surface relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
          <motion.div {...fade} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary mb-3">What we offer</p>
              <h2 className="text-display text-6xl md:text-8xl">PICK YOUR<br />WEAPON.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              From strength to mindfulness — pick a program built around the energy you bring.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: class1, tag: "Strength", title: "Power & Lift", desc: "Olympic platforms, heavy iron, expert spotters." },
              { img: class3, tag: "Cardio", title: "HIIT Studio", desc: "45-minute fat-burning sessions, music led." },
              { img: class4, tag: "Combat", title: "Boxing Lab", desc: "Bags, mitts, pads — sweat it out." },
              { img: class2, tag: "Recovery", title: "Yoga & Mobility", desc: "Reset your body. Reset your mind." },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary/50 transition"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1280} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{p.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-display text-2xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER & TRAINERS ── */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <motion.div {...fade} className="mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">The people behind Thrive</p>
          <h2 className="text-display text-5xl md:text-7xl">MEET THE<br /><span className="text-primary">TEAM.</span></h2>
        </motion.div>

        {/* Founders */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Founders</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { img: founder1, name: "Vikram Sethi", role: "Co-Founder & CEO", bio: "Former national-level powerlifter turned entrepreneur. Vikram has spent 15 years building fitness communities across India with a mission to make world-class training accessible to every city." },
              { img: founder2, name: "Ananya Kapoor", role: "Co-Founder & Head of Experience", bio: "Sports scientist and wellness strategist with 12 years in performance coaching. Ananya designed the Thrive methodology that has helped 50,000+ members achieve their goals." },
            ].map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5 rounded-2xl border border-border bg-surface p-5 hover:border-primary/40 transition"
              >
                <div className="relative shrink-0">
                  <img src={f.img} alt={f.name} className="size-28 rounded-xl object-cover" />
                  <span className="absolute -bottom-2 -right-2 size-6 rounded-full bg-primary border-2 border-background flex items-center justify-center">
                    <LucideIcons.Star className="size-3 text-primary-foreground fill-primary-foreground" />
                  </span>
                </div>
                <div>
                  <h3 className="text-display text-2xl">{f.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-primary mt-0.5 mb-3">{f.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trainers */}
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Head Trainers</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trainers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary/50 transition"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={t.img} alt={t.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-background/80 backdrop-blur px-2.5 py-1 text-xs font-medium">
                    {t.exp} exp
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-display text-xl">{t.name}</h3>
                  <p className="text-xs text-primary uppercase tracking-widest mt-0.5">{t.role}</p>
                  <p className="text-xs text-muted-foreground mt-2">{t.spec}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section id="locations" className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div {...fade} className="mb-12">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Find us</p>
            <h2 className="text-display text-5xl md:text-7xl">OUR<br />LOCATIONS.</h2>
            <p className="mt-4 text-muted-foreground max-w-md">Click on any location to see hours, facilities, and how to reach us.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {locations.map((loc, i) => (
              <motion.button
                key={loc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => setActiveLocation(loc)}
                className="group text-left rounded-2xl border border-border bg-background overflow-hidden hover:border-primary/60 transition-all hover:shadow-[0_0_40px_-10px_oklch(0.92_0.24_130/0.3)] cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={loc.img} alt={loc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur border border-primary/30 px-3 py-1.5">
                    <LucideIcons.MapPin className="size-3.5 text-primary" />
                    <span className="text-xs font-semibold text-primary">Thrive Gym</span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur px-2.5 py-1">
                    <LucideIcons.Star className="size-3 text-primary fill-primary" />
                    <span className="text-xs font-semibold">{loc.rating}</span>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-display text-2xl group-hover:text-primary transition">{loc.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{loc.address}</p>
                    <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1.5">
                      <LucideIcons.Clock className="size-3 text-primary" />
                      {loc.hours.split("·")[0].trim()}
                    </p>
                  </div>
                  <div className="shrink-0 size-10 rounded-full border border-border bg-surface flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition ml-4">
                    <LucideIcons.ChevronRight className="size-4 group-hover:text-primary-foreground transition" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fade} className="relative">
            <img src={vision} alt="Thrive gym interior" loading="lazy" width={1600} height={1000} className="rounded-3xl object-cover w-full h-[520px]" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 max-w-xs hidden md:block">
              <div className="text-display text-5xl">98%</div>
              <p className="text-sm mt-1">of members hit their first goal within 90 days.</p>
            </div>
          </motion.div>
          <motion.div {...fade}>
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Why Thrive</p>
            <h2 className="text-display text-5xl md:text-7xl">MORE THAN<br />A GYM.</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              We exist to give India a fitness experience that doesn't compromise — on equipment, on coaching, on atmosphere, on you.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {[
               { t: "Best-in-class kit", d: "Hammer Strength, Rogue, Technogym.", icon: LucideIcons.Wrench },
               { t: "Real coaching", d: "Certified PTs who actually care.", icon: LucideIcons.Users },
               { t: "Group energy", d: "Classes that feel like a concert.", icon: LucideIcons.Zap },
               { t: "24/7 access", d: "Train on your schedule. Always.", icon: LucideIcons.Clock },
             ].map(({ t, d, icon: Icon }) => (
               <div key={t} className="flex gap-3">
                 <div className="size-10 grid place-items-center rounded-xl bg-primary/15 text-primary shrink-0">
                   <Icon className="size-5" />
                 </div>
                 <div>
                   <p className="font-semibold">{t}</p>
                   <p className="text-sm text-muted-foreground">{d}</p>
                 </div>
               </div>
             ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.h2 {...fade} className="text-display text-5xl md:text-7xl mb-12">
            REAL PEOPLE. <span className="text-primary">REAL RESULTS.</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { n: "Aarav S.", r: "Lost 18kg in 6 months. The coaches felt like a second family.", t: "Member, Bengaluru" },
              { n: "Neha K.", r: "Best gym I've trained at in India. The energy is unmatched.", t: "Member, Mumbai" },
              { n: "Karthik R.", r: "Hit my first 200kg deadlift here. Equipment is world-class.", t: "Member, Hyderabad" },
            ].map((t, i) => (
              <motion.blockquote
                key={t.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-background p-7"
              >
                <p className="text-lg leading-relaxed">"{t.r}"</p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/20 grid place-items-center text-primary font-bold">{t.n[0]}</div>
                  <div>
                    <p className="font-semibold text-sm">{t.n}</p>
                    <p className="text-xs text-muted-foreground">{t.t}</p>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <motion.div {...fade} className="mb-12">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Get in touch</p>
          <h2 className="text-display text-5xl md:text-7xl">LET'S<br /><span className="text-primary">TALK.</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div {...fade} className="space-y-6">
            <p className="text-muted-foreground text-lg max-w-md">
              Have a question about memberships, franchises, or just want to say hi? We're here for all of it.
            </p>
            <div className="space-y-4">
              {[
                { icon: LucideIcons.Phone, label: "Call us", value: "+91 98100 00000", href: "tel:+919810000000" },
                { icon: LucideIcons.Mail, label: "Email us", value: "hello@thrivegym.in", href: "mailto:hello@thrivegym.in" },
                { icon: LucideIcons.Mail, label: "Follow us", value: "@thrivegym.in", href: "https://instagram.com" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 hover:border-primary/50 transition group"
                >
                  <div className="size-11 rounded-xl bg-primary/15 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                    <p className="font-semibold">{value}</p>
                  </div>
                  <LucideIcons.ArrowRight className="size-4 ml-auto text-muted-foreground group-hover:text-primary transition" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Location Shortcuts</p>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm hover:border-primary/60 hover:text-primary transition"
                  >
                    <LucideIcons.MapPin className="size-3.5 text-primary" />
                    {loc.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick form */}
          <motion.div {...fade} className="rounded-2xl border border-border bg-surface p-6 space-y-4">
            <h3 className="text-display text-2xl">Send a message</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us what you're looking for…"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition resize-none"
              />
            </div>
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary py-4 font-semibold text-primary-foreground hover:opacity-90 transition">
              Send Message <LucideIcons.ArrowRight className="size-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-28 text-center">
          <motion.h2 {...fade} className="text-display text-6xl md:text-9xl">
            YOUR BEST SELF<br /><span className="text-primary">IS WAITING.</span>
          </motion.h2>
          <motion.div {...fade} className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:opacity-90 transition">
              Book a free trial <LucideIcons.ArrowRight className="size-4" />
            </a>
            <Link to="/partner" className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-semibold hover:bg-secondary transition">
              Partner with us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Location modal */}
      {activeLocation && (
        <LocationModal loc={activeLocation} onClose={() => setActiveLocation(null)} />
      )}
    </div>
  );
}






