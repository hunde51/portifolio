import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import portrait from "@/assets/hunde-portrait.jpg";

const stack = ["FastAPI", "Next.js", "LangGraph", "React", "AWS", "Python"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-beige/60 blur-3xl animate-glow-pulse" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border hairline bg-card/60 px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
            </span>
            Available for select engagements
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-tight"
          >
            Hunde
            <br />
            <span className="italic text-muted-foreground/80">Tesfa.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Fullstack developer & agentic AI builder. I design scalable backend
            systems, intelligent AI workflows, and human-centered digital
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border hairline bg-card/50 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted-foreground/70"
          >
            {stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </motion.div>
        </div>

        {/* Portrait with floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface shadow-float">
            <img
              src={portrait}
              alt="Portrait of Hunde Tesfa"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
          </div>

          {/* Floating glass cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-6 top-10 hidden rounded-2xl px-4 py-3 shadow-soft sm:block"
          >
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Currently
            </div>
            <div className="mt-1 text-sm font-medium">Building agentic systems</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="glass absolute -right-4 bottom-12 hidden rounded-2xl px-4 py-3 shadow-soft sm:block"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-foreground" />
              <span className="text-xs font-medium">4 production systems</span>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-beige/50 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
