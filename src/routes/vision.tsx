import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Nav } from "@/components/sites/Nav";
import { Footer } from "@/components/sites/Footer";
import { Marquee } from "@/components/sites/Marquee";
import founder1 from "@/assets/founder1.jpg";
import founder2 from "@/assets/founder2.jpg";
import vision from "@/assets/vision.jpg";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Our Vision — Thrive Gym" },
      { name: "description", content: "How Rahul Ramamurthy and Kez Rahul Ron built Thrive Gym to give India a world-class fitness experience." },
      { property: "og:title", content: "Our Vision — Thrive Gym" },
      { property: "og:description", content: "The story of two founders building India's most exciting gym experience." },
    ],
  }),
  component: Vision,
});

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Vision() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-sm uppercase tracking-widest text-primary mb-4">Our Vision</p>
            <h1 className="text-display text-[14vw] md:text-[10vw] leading-[0.88]">
              A GYM INDIA<br />
              ACTUALLY <span className="text-primary italic">DESERVES.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/80">
              We grew up loving fitness — and hating most of the gyms around us. Bad equipment. No coaching. Zero atmosphere. So we built the gym we always wanted to train at.
            </p>
          </motion.div>
        </div>
      </section>

      <Marquee items={["BUILT IN INDIA", "OBSESSED WITH DETAIL", "COMMUNITY FIRST", "NO COMPROMISE"]} />

      {/* MANIFESTO */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div {...fade} className="lg:col-span-5">
            <h2 className="text-display text-5xl md:text-6xl sticky top-28">
              THE <span className="text-primary">MANIFESTO.</span>
            </h2>
          </motion.div>
          <div className="lg:col-span-7 space-y-12">
            {[
              { n: "01", t: "World-class, in your neighbourhood.", d: "Equipment, lighting, music, coaching — every detail benchmarked against the best gyms in the world. No 'good enough'." },
              { n: "02", t: "Coaches who care.", d: "Our trainers aren't selling protein. They're invested in your progress. Every plan is personal, every form check is honest." },
              { n: "03", t: "A room that moves you.", d: "The space pulls you in. The community keeps you coming back. Showing up gets easier when the room is electric." },
              { n: "04", t: "Real results, repeatable.", d: "We measure what matters — strength, mobility, sleep, mood. Not just the scale. Progress you can feel and friends who notice." },
            ].map((m) => (
              <motion.div key={m.n} {...fade} className="border-t border-border pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-display text-2xl text-primary">{m.n}</span>
                  <h3 className="text-display text-3xl md:text-4xl">{m.t}</h3>
                </div>
                <p className="mt-3 text-muted-foreground text-lg max-w-2xl">{m.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-surface py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div {...fade} className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">The Founders</p>
            <h2 className="text-display text-5xl md:text-7xl">TWO PEOPLE.<br />ONE OBSESSION.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { img: founder1, name: "Rahul Ramamurthy", role: "Co-Founder & CEO", bio: "Former competitive lifter turned operator. Rahul spent years travelling the world looking for what makes the best gyms tick — then brought every lesson back home." },
              { img: founder2, name: "Kez Rahul Ron", role: "Co-Founder & Head of Experience", bio: "Trainer, coach, community builder. Kez designs the energy of every Thrive floor — the music, the rituals, the people who make it feel like home." },
            ].map((f, i) => (
              <motion.article
                key={f.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-background border border-border"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={f.img} alt={f.name} loading="lazy" width={1024} height={1280} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background via-background/70 to-transparent">
                    <p className="text-xs uppercase tracking-widest text-primary">{f.role}</p>
                    <h3 className="text-display text-4xl mt-1">{f.name}</h3>
                  </div>
                </div>
                <p className="p-7 text-muted-foreground text-lg leading-relaxed">{f.bio}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={vision} alt="" loading="lazy" width={1600} height={1000} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8 py-32 text-center">
          <Quote className="size-12 text-primary mx-auto" />
          <motion.p {...fade} className="mt-8 text-display text-3xl md:text-5xl leading-tight">
            "We didn't want to open another gym. We wanted to build a place that India would feel proud to train in — and a community that turns up for each other long after the workout ends."
          </motion.p>
          <p className="mt-8 text-sm uppercase tracking-widest text-muted-foreground">— Rahul & Kez, Founders</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24 text-center">
        <h2 className="text-display text-5xl md:text-7xl">JOIN THE <span className="text-primary">MOVEMENT.</span></h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground hover:opacity-90 transition">
            Explore Thrive
          </Link>
          <Link to="/partner" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 font-semibold hover:bg-secondary transition">
            Become a Partner
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
