import { Reveal } from "./Reveal";

const beliefs = [
  {
    k: "Scalable systems",
    v: "Design for the version of the product that exists in two years, not the demo on Monday.",
  },
  {
    k: "Backend first",
    v: "Most product feel comes from the data model. Get the seams right and everything downstream gets easier.",
  },
  {
    k: "AI as ingredient",
    v: "Models are tools, not features. The interesting work is the workflow around them.",
  },
  {
    k: "Clean architecture",
    v: "Boring boundaries. Predictable layers. Code that tomorrow's collaborator can love.",
  },
  {
    k: "Human-centered",
    v: "Interfaces should respect attention. Quiet defaults, clear actions, no theatre.",
  },
  {
    k: "Performance",
    v: "Latency is a UX decision. Treat every millisecond like it belongs to the user.",
  },
  {
    k: "Elegant UX",
    v: "Restraint is a craft. The best moments are the ones nobody notices.",
  },
  {
    k: "Production ready",
    v: "If it can't be observed, deployed, and rolled back, it isn't built yet.",
  },
];

export function Philosophy() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            04 — Building philosophy
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-roboto font-semibold max-w-3xl text-balance text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight">
            <span className="italic text-muted-foreground">in eight notes.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border hairline bg-border/40 sm:grid-cols-2 lg:grid-cols-4">
          {beliefs.map((b, i) => (
            <Reveal key={b.k} delay={(i % 4) * 0.05}>
              <div className="group h-full bg-background p-7 transition-colors duration-500 hover:bg-surface">
                <div className="mb-6 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl leading-tight tracking-tight">
                  {b.k}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {b.v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
