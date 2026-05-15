import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML / CSS / JS", value: 90 },
      { name: "React", value: 90 },
      { name: "Next.js", value: 90 },
      { name: "Tailwind CSS", value: 85 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "FastAPI", value: 90 },
      { name: "Django", value: 70 },
      { name: "Python", value: 80 },
    ],
  },
  {
    title: "Agentic AI",
    items: [
      { name: "RAG", value: 80 },
      { name: "LangChain", value: 80 },
      { name: "LangGraph", value: 90 },
    ],
  },
  {
    title: "Deployment & Cloud",
    items: [
      { name: "FastAPI Cloud", value: 80 },
      { name: "AWS", value: 70 },
      { name: "Neon", value: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            02 — Craft
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display max-w-2xl text-balance text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
            A toolkit refined over thousands of small decisions.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.06}>
              <div className="group glass relative h-full rounded-3xl p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-float">
                <div className="mb-6 flex items-baseline justify-between">
                  <h3 className="font-display text-2xl tracking-tight">{g.title}</h3>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    0{gi + 1}
                  </span>
                </div>
                <div className="space-y-5">
                  {g.items.map((s, i) => (
                    <div key={s.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-foreground/90">{s.name}</span>
                        <span className="tabular-nums text-muted-foreground">
                          {s.value}%
                        </span>
                      </div>
                      <div className="h-[3px] w-full overflow-hidden rounded-full bg-foreground/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.value}%` }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{
                            duration: 1.2,
                            delay: 0.1 + i * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-full rounded-full bg-foreground"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
