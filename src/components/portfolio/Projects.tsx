import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, X, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

type Project = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  label: string;
  status: string;
  live: string;
  github: string;
  overview: string;
  architecture: string;
  challenges: string;
  ai?: string;
  stack: string[];
};

const projects: Project[] = [
  {
    title: "Atlas Intelligence",
    tagline: "An agentic research workspace",
    description:
      "A production agentic platform that orchestrates retrieval, planning, and tool-use to answer deep research questions over private knowledge bases.",
    image: p1,
    tags: ["LangGraph", "FastAPI", "Next.js", "Postgres"],
    label: "AI System",
    status: "Live Product",
    live: "#",
    github: "#",
    overview:
      "Atlas turns scattered company knowledge into a living research surface. Teams ask complex, multi-step questions; the system decomposes, retrieves, and synthesizes — citing sources at every step.",
    architecture:
      "A LangGraph supervisor coordinates retrieval, reasoning, and verification agents. FastAPI handles streaming responses; pgvector + Neon power retrieval; Next.js renders a calm, document-first interface.",
    challenges:
      "Designing deterministic-feeling outputs from a non-deterministic system. We built a verification loop that re-checks claims against retrieved spans before any answer is shown.",
    ai: "Multi-agent orchestration with structured intermediate state, tool-use guardrails, and a citation contract that the UI enforces visually.",
    stack: ["LangGraph", "LangChain", "FastAPI", "Next.js", "pgvector", "Neon", "AWS"],
  },
  {
    title: "Lumen Workflows",
    tagline: "Human-in-the-loop AI operations",
    description:
      "A workflow runtime where teams compose AI agents alongside humans — drafting, reviewing, and approving work in a single conversational surface.",
    image: p2,
    tags: ["LangChain", "FastAPI", "React", "Redis"],
    label: "Fullstack Platform",
    status: "Production Ready",
    live: "#",
    github: "#",
    overview:
      "Lumen lets ops teams replace brittle automations with agent-driven workflows that ask for human input only when it matters.",
    architecture:
      "Event-driven backend in FastAPI, Redis-backed task queues, and a React client built around a thread-first conversation model. State is persisted at every step for full observability.",
    challenges:
      "Making partial automation feel safe. Every agent action is reversible, auditable, and gated by a clear human checkpoint.",
    ai: "LangChain agents with strict tool schemas, plus a critic model that reviews drafts before they reach the human.",
    stack: ["FastAPI", "LangChain", "React", "Redis", "Postgres", "AWS"],
  },
  {
    title: "Form & Field",
    tagline: "A modern commerce platform",
    description:
      "A fullstack storefront and admin built for independent fashion brands — fast, accessible, and shaped around the way real merchants work.",
    image: p3,
    tags: ["Next.js", "FastAPI", "Stripe", "Postgres"],
    label: "Live Product",
    status: "Live Product",
    live: "#",
    github: "#",
    overview:
      "A headless commerce platform that pairs a beautifully restrained storefront with an admin designed for daily merchandising work.",
    architecture:
      "Next.js storefront with edge rendering, FastAPI service layer, Stripe for payments, and a fully typed admin SDK shared between client and server.",
    challenges:
      "Achieving Lighthouse-grade performance without sacrificing rich product imagery — solved with progressive image strategies and disciplined data fetching.",
    stack: ["Next.js", "FastAPI", "Stripe", "Postgres", "Tailwind"],
  },
  {
    title: "Signal RAG",
    tagline: "Knowledge retrieval, made answerable",
    description:
      "A retrieval system tuned for technical teams — turning sprawling docs, tickets, and code into precise, cited answers inside the tools they already use.",
    image: p4,
    tags: ["RAG", "LangGraph", "Python", "AWS"],
    label: "AI System",
    status: "Production Ready",
    live: "#",
    github: "#",
    overview:
      "Signal indexes a company's written world and exposes it as a single, calm answer surface — across web, Slack, and IDE.",
    architecture:
      "Hybrid retrieval (BM25 + dense), a re-ranker, and a small synthesis model behind a FastAPI service. LangGraph manages multi-hop questions.",
    challenges:
      "Ranking quality across heterogeneous sources. We built domain-specific rerankers and a feedback loop that quietly improves retrieval over time.",
    ai: "Hybrid RAG with adaptive query rewriting and a reranking ensemble; answers are composed under a strict citation contract.",
    stack: ["Python", "FastAPI", "LangGraph", "AWS", "Neon"],
  },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            03 — Selected work
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display max-w-3xl text-balance text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight">
            Four products. All shipped.{" "}
            <span className="italic text-muted-foreground">All in production.</span>
          </h2>
        </Reveal>

        <div className="mt-20 space-y-32 md:space-y-40">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={p.title}
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal y={32}>
                  <button
                    onClick={() => setActive(p)}
                    className="group relative block w-full overflow-hidden rounded-3xl bg-surface shadow-soft transition-all duration-700 hover:shadow-float"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={p.image}
                        alt={`${p.title} preview`}
                        loading="lazy"
                        width={1280}
                        height={896}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <div className="absolute left-4 top-4 flex gap-2">
                      <span className="glass rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em]">
                        {p.label}
                      </span>
                    </div>
                    <div className="absolute right-4 top-4">
                      <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em]">
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                        {p.status}
                      </span>
                    </div>
                  </button>
                </Reveal>

                <Reveal delay={0.1} y={32}>
                  <div>
                    <div className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      0{i + 1} / Case study
                    </div>
                    <h3 className="font-display text-balance text-4xl leading-[1.05] tracking-tight md:text-5xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-base text-muted-foreground">{p.tagline}</p>
                    <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border hairline bg-card/60 px-3 py-1 text-xs text-foreground/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setActive(p)}
                        className="group/btn inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                      >
                        Read case study
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>
                      <a
                        href={p.github}
                        className="inline-flex items-center gap-2 rounded-full border hairline bg-card/50 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
                      >
                        <Github className="h-4 w-4" />
                        Repository
                      </a>
                    </div>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] overflow-y-auto bg-foreground/40 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto my-10 max-w-4xl overflow-hidden rounded-3xl bg-background shadow-float"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface">
              <img
                src={project.image}
                alt={`${project.title} cover`}
                className="h-full w-full object-cover"
              />
              <button
                onClick={onClose}
                className="glass absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-foreground hover:bg-card"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute left-5 top-5 flex gap-2">
                <span className="glass rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em]">
                  {project.label}
                </span>
                <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  {project.status}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h3 className="font-display text-balance text-4xl leading-[1.05] tracking-tight md:text-5xl">
                {project.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{project.tagline}</p>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <Block title="Overview" body={project.overview} />
                <Block title="Architecture" body={project.architecture} />
                <Block title="Challenges solved" body={project.challenges} />
                {project.ai && <Block title="AI workflow" body={project.ai} />}
              </div>

              <div className="mt-10">
                <div className="mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border hairline bg-card/60 px-3 py-1 text-xs text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 border-t hairline pt-8">
                <a
                  href={project.live}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live demo
                </a>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 rounded-full border hairline bg-card/50 px-5 py-2.5 text-sm font-medium hover:bg-card"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="mb-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {title}
      </div>
      <p className="text-pretty text-[15px] leading-relaxed text-foreground/85">
        {body}
      </p>
    </div>
  );
}
