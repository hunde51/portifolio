import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import p1 from "@/assets/projects/auratrade/p-1.png";
import p1b from "@/assets/projects/auratrade/p-2.png";
import p1c from "@/assets/projects/auratrade/p-3.png";
import p2 from "@/assets/projects/ecommerce/p-1.png";
import p2b from "@/assets/projects/ecommerce/p-2.png";
import p2c from "@/assets/projects/ecommerce/p-3.png";
import p3 from "@/assets/projects/Relay-AI-Support/p-1.png";
import p3b from "@/assets/projects/Relay-AI-Support/p-2.png";
import p3c from "@/assets/projects/Relay-AI-Support/p-3.png";

type Project = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  images: string[];
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
    title: "AuraTrade",
    tagline: "Real-Time Paper Trading Platform",
    description:
      "A paper trading platform where users practice stock and crypto trading with $100,000 in virtual money — live market prices streamed every 2 seconds, real order execution, portfolio tracking, and an AI trading coach. Zero financial risk.",
    image: p1,
    images: [p1, p1b, p1c],
    tags: ["FastAPI Cloud", "FastAPI", "Next.js", "Supabase", "Redis"],
    label: "Fullstack Platform",
    status: "Live Product",
    live: "https://auratrade-platform.vercel.app/",
    github: "https://github.com/hunde51/auratrade-platform",
    overview:
      "AuraTrade is a paper trading platform that lets users practice stock and crypto trading with $100,000 in virtual money — real market prices, real order execution, zero financial risk. Built for traders who want to sharpen their strategy before putting real capital on the line.",
    architecture:
      "Market data is polled every 2 seconds from Alpaca/Polygon/Alpha Vantage via APScheduler, published to a Redis pub/sub channel, and broadcast to browser clients over WebSockets. FastAPI handles auth (JWT + argon2), trade execution, and portfolio state via SQLAlchemy async ORM on PostgreSQL. Celery + Redis manage background jobs; Prometheus exposes metrics at /metrics.",
    challenges:
      "Keeping live prices consistent across WebSocket clients, REST reads, and alert evaluation simultaneously. Solved by caching prices in Redis with a 5s TTL and running alert rule checks on every poll cycle — ensuring notifications fire within seconds of a price crossing a threshold.",
    ai: "An AI trading coach powered by Gemini/OpenAI answers user questions, analyzes open positions, and surfaces market sentiment — giving traders contextual guidance without leaving the platform.",
    stack: ["FastAPI", "FastAPI Cloud", "Next.js", "Supabase", "Postgres", "Redis"],
  },
  {
    title: "Nexus AI Shop",
    tagline: "AI-powered marketplace built for Ethiopia",
    description:
      "A full-stack multi-role e-commerce platform with AI at its core. Sellers list products, customers shop with AI-powered semantic search and personalized recommendations, and admins manage the platform through a rich dashboard with AI-generated business insights, fraud detection, and demand forecasting.",
    image: p2,
    images: [p2, p2b, p2c],
    tags: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Google Gemini", "Qdrant", "LangChain", "Chapa"],
    label: "Fullstack Platform",
    status: "Live Product",
    live: "https://smartshop-ethiopia-pojy.vercel.app",
    github: "https://github.com/hunde51/smartshop-ethiopia",
    overview:
      "A production-deployed marketplace targeting Ethiopian commerce. Four distinct roles — customer, seller, admin, super admin — each with their own dashboard and permissions. Customers browse and buy, sellers manage inventory and track revenue, admins moderate products and users, super admins control the entire platform.",
    architecture:
      "React + TypeScript + Vite frontend on Vercel. FastAPI (Python) backend with async SQLAlchemy + PostgreSQL on FastAPI Cloud. AI layer: Google Gemini for embeddings and content generation, DeepSeek for reasoning agents, Qdrant as vector database for semantic search, LangChain/LangGraph for agentic workflows. Auth is JWT-based and role-scoped with a seller approval flow. Payments via Chapa + M-Pesa sandbox.",
    challenges:
      "Multi-role auth where the same email can hold both a customer and seller account simultaneously — required a role-scoped unique constraint on the users table and role-aware JWT resolution on every request.",
    ai: "Semantic product search using Gemini embeddings stored in Qdrant with hybrid keyword + vector reranking. Role-scoped AI assistant with different capabilities per role. AI Insights dashboard with auto-generated restock alerts, pricing suggestions, and conversion analysis powered by Gemini on live sales data. Demand forecasting and fraud detection agents running via LangGraph.",
    stack: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Qdrant", "Gemini", "DeepSeek", "LangGraph", "Chapa", "M-Pesa", "Vercel"],
  },
  {
    title: "Relay AI Support",
    tagline: "Knowledge retrieval, made answerable",
    description:
      "AI-assisted support that retrieves company knowledge and proposes safe, auditable actions for agents.",
    image: p3,
    images: [p3, p3b, p3c],
    tags: ["RAG", "LangGraph", "Python", "Qdrant"],
    label: "AI System",
    status: "Prototype / In development",
    live: "#",
    github: "https://github.com/hunde51/Relay-AI-Support",
    overview:
      "Relay AI Support indexes ticket history and support documents to surface relevant answers and suggested actions for support teams. It produces validated suggestions, requires human approval for risky actions, records audit logs, and can execute approved actions via pluggable tools. Built for support orgs and internal ops who need faster, auditable resolution workflows.",
    architecture:
      "Hybrid retrieval (dense vectors + vector store) with application-level ranking and agent nodes managed by LangGraph. A FastAPI backend handles API, tool registry, and AI workflows; async SQLAlchemy persists AI runs, audit logs, and ticket state. The vectorization pipeline writes embeddings to Qdrant.",
    challenges:
      "Unreliable LLM outputs: centralized prompt templates and Pydantic v2 output schemas with render_and_validate helpers to parse and validate LLM responses. Unsafe tool execution: suggested-action workflow with requires_approval, RBAC checks, and AuditLog entries. Reproducible testing: DummyLLM and test scaffolding plus AI run persistence for deterministic tests.",
    ai:
      "Query → retrieve via Qdrant → agent nodes run LLM prompts (centralized templates) → synthesize candidate responses/actions → validate with Pydantic → create AISuggestedAction → human approval (if required) → execute via tool_service → persist AuditLog and AIToolCall.",
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Google Gemini",
      "Qdrant",
      "SQLAlchemy",
      "React",
      "TypeScript",
      "WebSockets",
    ],
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
          <h2 className="font-roboto font-semibold max-w-3xl text-balance text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight">
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
                        target="_blank"
                        rel="noopener noreferrer"
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
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (!project) return;
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [project, slide]);

  function prev() {
    setSlide((s) => (s - 1 + project!.images.length) % project!.images.length);
  }
  function next() {
    setSlide((s) => (s + 1) % project!.images.length);
  }

  return (
    <AnimatePresence onExitComplete={() => setSlide(0)}>
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
            {/* Image slider */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide}
                  src={project.images[slide]}
                  alt={`${project.title} slide ${slide + 1}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Close */}
              <button
                onClick={onClose}
                className="glass absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-foreground hover:bg-card"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Labels */}
              <div className="absolute left-5 top-5 flex gap-2">
                <span className="glass rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em]">
                  {project.label}
                </span>
                <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  {project.status}
                </span>
              </div>

              {/* Prev / Next arrows */}
              <button
                onClick={prev}
                className="glass absolute left-4 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full text-foreground hover:bg-card"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="glass absolute right-4 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full text-foreground hover:bg-card"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === slide
                        ? "w-5 bg-foreground"
                        : "w-2 bg-foreground/40 hover:bg-foreground/70"
                    }`}
                  />
                ))}
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
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
