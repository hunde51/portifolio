import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="mb-10 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            01 — About
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-roboto font-semibold text-balance text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight">
            I build quiet, intelligent systems that{" "}
            <span className="italic text-muted-foreground">feel human</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 text-pretty text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:text-lg">
          <Reveal delay={0.1}>
            <p>
              I'm a backend-leaning fullstack engineer with a strong sense for
              the frontend — the kind of builder who cares as much about the
              shape of an API as the rhythm of a button press.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Lately, most of my time goes into agentic AI systems: retrieval
              pipelines, orchestrated agents, and small models doing precise
              work inside larger products.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              I believe in clean architecture, real performance, and interfaces
              that respect attention. Every layer should earn its place.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p>
              When something I build ships into someone's daily workflow and
              quietly does its job — that's the bar I'm chasing.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
