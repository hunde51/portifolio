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
            I build intelligent software systems that solve real business problems with{" "}
            <span className="italic text-muted-foreground">reliability and clarity</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 text-pretty text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:text-lg">
          <Reveal delay={0.1}>
            <p>
              My background spans backend engineering, full-stack development, and modern AI systems, allowing me to design solutions that are both technically robust and practical for the people who use them. From scalable APIs and data-intensive platforms to agentic AI workflows, retrieval systems, and automation tools, I focus on building technology that creates measurable value.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              I care deeply about architecture, performance, and usability. The best systems are not the most complex—they are the ones that fit naturally into a workflow, reduce friction, and consistently deliver results.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Recently, much of my work has centered on AI-powered products: orchestrated agents, retrieval pipelines, and specialized models that help teams automate tasks, surface knowledge, and make better decisions. My goal is always the same: turn complexity into tools that feel simple, useful, and dependable.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p>
              When a product becomes an indispensable part of someone's day because it quietly solves a problem better than the alternatives, that's success.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
