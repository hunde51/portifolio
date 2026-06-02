import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { e as emailjs } from "../_libs/emailjs__browser.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { A as ArrowUpRight, M as Mail, G as Github, L as Linkedin, X, C as ChevronLeft, a as ChevronRight, E as ExternalLink } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${scrolled ? "glass shadow-soft" : "bg-transparent border border-transparent"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2 text-sm font-medium tracking-tight", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 place-items-center rounded-full bg-foreground text-[11px] font-semibold text-background", children: "H" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Hunde Tesfa" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  className: "rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  children: l.label
                },
                l.href
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#contact",
                    className: "hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.02] sm:inline-block",
                    children: "Resume"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setOpen((o) => !o),
                    className: "grid h-9 w-9 place-items-center rounded-full hairline border md:hidden",
                    "aria-label": "Menu",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-px w-4 bg-foreground" })
                  }
                )
              ] })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass mt-2 flex flex-col gap-1 rounded-2xl p-3 shadow-soft md:hidden", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            onClick: () => setOpen(false),
            className: "rounded-xl px-4 py-2.5 text-sm text-foreground hover:bg-surface",
            children: l.label
          },
          l.href
        )) })
      ] })
    }
  );
}
const portrait = "/assets/hunde-portrait-C1AxvAdT.jpg";
const stack = ["FastAPI", "Next.js", "LangGraph", "React", "AWS", "Python"];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 -z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-beige/60 blur-3xl animate-glow-pulse" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.15fr_0.85fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "mb-6 inline-flex items-center gap-2 rounded-full border hairline bg-card/60 px-3 py-1.5 text-xs text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" })
              ] }),
              "Available for select engagements"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            className: "font-display text-balance text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-tight",
            children: [
              "Hunde",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-muted-foreground/80", children: "Tesfa." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.15 },
            className: "mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
            children: "I build intelligent software systems that solve real business problems with reliability, clarity, and attention to detail. Focused on backend engineering, scalable APIs, and modern AI workflows."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.3 },
            className: "mt-9 flex flex-wrap items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#projects",
                  className: "group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]",
                  children: [
                    "View Projects",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#contact",
                  className: "inline-flex items-center gap-2 rounded-full border hairline bg-card/50 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                    "Contact Me"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, delay: 0.5 },
            className: "mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted-foreground/70",
            children: stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s }, s))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
          className: "relative mx-auto w-full max-w-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface shadow-float", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: portrait,
                  alt: "Portrait of Hunde Tesfa",
                  width: 1024,
                  height: 1280,
                  className: "h-full w-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                animate: { y: [0, -10, 0] },
                transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                className: "glass absolute -left-6 top-10 hidden rounded-2xl px-4 py-3 shadow-soft sm:block",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Currently" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-medium", children: "Building agentic systems" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { y: [0, 12, 0] },
                transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
                className: "glass absolute -right-4 bottom-12 hidden rounded-2xl px-4 py-3 shadow-soft sm:block",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: "4 production systems" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -inset-10 -z-10 rounded-full bg-beige/50 blur-3xl" })
          ]
        }
      )
    ] })
  ] });
}
function Reveal({ children, delay = 0, y = 24, className, ...rest }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
      className,
      ...rest,
      children
    }
  );
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-32 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-10 text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "01 — About" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-roboto font-semibold text-balance text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight", children: [
      "I build intelligent software systems that solve real business problems with",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-muted-foreground", children: "reliability and clarity" }),
      "."
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-10 text-pretty text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:text-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "My background spans backend engineering, full-stack development, and modern AI systems, allowing me to design solutions that are both technically robust and practical for the people who use them. From scalable APIs and data-intensive platforms to agentic AI workflows, retrieval systems, and automation tools, I focus on building technology that creates measurable value." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I care deeply about architecture, performance, and usability. The best systems are not the most complex—they are the ones that fit naturally into a workflow, reduce friction, and consistently deliver results." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Recently, much of my work has centered on AI-powered products: orchestrated agents, retrieval pipelines, and specialized models that help teams automate tasks, surface knowledge, and make better decisions. My goal is always the same: turn complexity into tools that feel simple, useful, and dependable." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.25, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "When a product becomes an indispensable part of someone's day because it quietly solves a problem better than the alternatives, that's success." }) })
    ] })
  ] }) });
}
const groups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML / CSS / JS", value: 90 },
      { name: "React", value: 90 },
      { name: "Next.js", value: 90 },
      { name: "Tailwind CSS", value: 85 }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "FastAPI", value: 90 },
      { name: "Django", value: 70 },
      { name: "Python", value: 80 }
    ]
  },
  {
    title: "Agentic AI",
    items: [
      { name: "RAG", value: 80 },
      { name: "LangChain", value: 80 },
      { name: "LangGraph", value: 90 }
    ]
  },
  {
    title: "Deployment & Cloud",
    items: [
      { name: "FastAPI Cloud", value: 80 },
      { name: "AWS", value: 70 },
      { name: "Neon", value: 80 }
    ]
  }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "relative py-32 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "02 — Craft" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-roboto font-semibold max-w-2xl text-balance text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight", children: "A toolkit refined over thousands of small decisions." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-5 md:grid-cols-2", children: groups.map((g, gi) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: gi * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group glass relative h-full rounded-3xl p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-float", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-baseline justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl tracking-tight", children: g.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: [
          "0",
          gi + 1
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: g.items.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums text-muted-foreground", children: [
            s.value,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[3px] w-full overflow-hidden rounded-full bg-foreground/[0.06]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { width: 0 },
            whileInView: { width: `${s.value}%` },
            viewport: { once: true, margin: "-40px" },
            transition: {
              duration: 1.2,
              delay: 0.1 + i * 0.08,
              ease: [0.22, 1, 0.36, 1]
            },
            className: "h-full rounded-full bg-foreground"
          }
        ) })
      ] }, s.name)) })
    ] }) }, g.title)) })
  ] }) });
}
const p1 = "/assets/p-1-DNjFGwd6.png";
const p1b = "/assets/p-2-BS-1o-Jd.png";
const p1c = "/assets/p-3-DEvi_X8z.png";
const p2 = "/assets/p-1-CvBdNPR3.png";
const p2b = "/assets/p-2-nQ2a6Wc9.png";
const p2c = "/assets/p-3-Dr4Id-y8.png";
const p3 = "/assets/p-1-zifcU7tc.png";
const p3b = "/assets/p-2-x3OJ-iKd.png";
const p3c = "/assets/p-3-DpR6ZYfA.png";
const projects = [
  {
    title: "AuraTrade",
    tagline: "Real-Time Paper Trading Platform",
    description: "A paper trading platform where users practice stock and crypto trading with $100,000 in virtual money — live market prices streamed every 2 seconds, real order execution, portfolio tracking, and an AI trading coach. Zero financial risk.",
    image: p1,
    images: [p1, p1b, p1c],
    tags: ["FastAPI Cloud", "FastAPI", "Next.js", "Supabase", "Redis"],
    label: "Fullstack Platform",
    status: "Live Product",
    live: "https://auratrade-platform.vercel.app/",
    github: "https://github.com/hunde51/auratrade-platform",
    overview: "AuraTrade is a paper trading platform that lets users practice stock and crypto trading with $100,000 in virtual money — real market prices, real order execution, zero financial risk. Built for traders who want to sharpen their strategy before putting real capital on the line.",
    architecture: "Market data is polled every 2 seconds from Alpaca/Polygon/Alpha Vantage via APScheduler, published to a Redis pub/sub channel, and broadcast to browser clients over WebSockets. FastAPI handles auth (JWT + argon2), trade execution, and portfolio state via SQLAlchemy async ORM on PostgreSQL. Celery + Redis manage background jobs; Prometheus exposes metrics at /metrics.",
    challenges: "Keeping live prices consistent across WebSocket clients, REST reads, and alert evaluation simultaneously. Solved by caching prices in Redis with a 5s TTL and running alert rule checks on every poll cycle — ensuring notifications fire within seconds of a price crossing a threshold.",
    ai: "An AI trading coach powered by Gemini/OpenAI answers user questions, analyzes open positions, and surfaces market sentiment — giving traders contextual guidance without leaving the platform.",
    stack: ["FastAPI", "FastAPI Cloud", "Next.js", "Supabase", "Postgres", "Redis"]
  },
  {
    title: "Nexus AI Shop",
    tagline: "AI-powered marketplace built for Ethiopia",
    description: "A full-stack multi-role e-commerce platform with AI at its core. Sellers list products, customers shop with AI-powered semantic search and personalized recommendations, and admins manage the platform through a rich dashboard with AI-generated business insights, fraud detection, and demand forecasting.",
    image: p2,
    images: [p2, p2b, p2c],
    tags: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Google Gemini", "Qdrant", "LangChain", "Chapa"],
    label: "Fullstack Platform",
    status: "Live Product",
    live: "https://smartshop-ethiopia-pojy.vercel.app",
    github: "https://github.com/hunde51/smartshop-ethiopia",
    overview: "A production-deployed marketplace targeting Ethiopian commerce. Four distinct roles — customer, seller, admin, super admin — each with their own dashboard and permissions. Customers browse and buy, sellers manage inventory and track revenue, admins moderate products and users, super admins control the entire platform.",
    architecture: "React + TypeScript + Vite frontend on Vercel. FastAPI (Python) backend with async SQLAlchemy + PostgreSQL on FastAPI Cloud. AI layer: Google Gemini for embeddings and content generation, DeepSeek for reasoning agents, Qdrant as vector database for semantic search, LangChain/LangGraph for agentic workflows. Auth is JWT-based and role-scoped with a seller approval flow. Payments via Chapa + M-Pesa sandbox.",
    challenges: "Multi-role auth where the same email can hold both a customer and seller account simultaneously — required a role-scoped unique constraint on the users table and role-aware JWT resolution on every request.",
    ai: "Semantic product search using Gemini embeddings stored in Qdrant with hybrid keyword + vector reranking. Role-scoped AI assistant with different capabilities per role. AI Insights dashboard with auto-generated restock alerts, pricing suggestions, and conversion analysis powered by Gemini on live sales data. Demand forecasting and fraud detection agents running via LangGraph.",
    stack: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Qdrant", "Gemini", "DeepSeek", "LangGraph", "Chapa", "M-Pesa", "Vercel"]
  },
  {
    title: "Relay AI Support",
    tagline: "Knowledge retrieval, made answerable",
    description: "AI-assisted support that retrieves company knowledge and proposes safe, auditable actions for agents.",
    image: p3,
    images: [p3, p3b, p3c],
    tags: ["RAG", "LangGraph", "Python", "Qdrant"],
    label: "AI System",
    status: "Prototype / In development",
    live: "#",
    github: "https://github.com/hunde51/Relay-AI-Support",
    overview: "Relay AI Support indexes ticket history and support documents to surface relevant answers and suggested actions for support teams. It produces validated suggestions, requires human approval for risky actions, records audit logs, and can execute approved actions via pluggable tools. Built for support orgs and internal ops who need faster, auditable resolution workflows.",
    architecture: "Hybrid retrieval (dense vectors + vector store) with application-level ranking and agent nodes managed by LangGraph. A FastAPI backend handles API, tool registry, and AI workflows; async SQLAlchemy persists AI runs, audit logs, and ticket state. The vectorization pipeline writes embeddings to Qdrant.",
    challenges: "Unreliable LLM outputs: centralized prompt templates and Pydantic v2 output schemas with render_and_validate helpers to parse and validate LLM responses. Unsafe tool execution: suggested-action workflow with requires_approval, RBAC checks, and AuditLog entries. Reproducible testing: DummyLLM and test scaffolding plus AI run persistence for deterministic tests.",
    ai: "Query → retrieve via Qdrant → agent nodes run LLM prompts (centralized templates) → synthesize candidate responses/actions → validate with Pydantic → create AISuggestedAction → human approval (if required) → execute via tool_service → persist AuditLog and AIToolCall.",
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
      "WebSockets"
    ]
  }
];
function Projects() {
  const [active, setActive] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "relative py-32 md:py-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "03 — Selected work" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-roboto font-semibold max-w-3xl text-balance text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-muted-foreground", children: "All in production." }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 space-y-32 md:space-y-40", children: projects.map((p, i) => {
        const reverse = i % 2 === 1;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "article",
          {
            className: `grid items-center gap-10 md:grid-cols-2 md:gap-16 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { y: 32, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setActive(p),
                  className: "group relative block w-full overflow-hidden rounded-3xl bg-surface shadow-soft transition-all duration-700 hover:shadow-float",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: p.image,
                          alt: `${p.title} preview`,
                          loading: "lazy",
                          width: 1280,
                          height: 896,
                          className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-4 flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em]", children: p.label }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 top-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-foreground" }),
                      p.status
                    ] }) })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, y: 32, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground", children: [
                  "0",
                  i + 1,
                  " / Case study"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-balance text-4xl leading-[1.05] tracking-tight md:text-5xl", children: p.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base text-muted-foreground", children: p.tagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground", children: p.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 flex flex-wrap gap-2", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "rounded-full border hairline bg-card/60 px-3 py-1 text-xs text-foreground/80",
                    children: t
                  },
                  t
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setActive(p),
                      className: "group/btn inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]",
                      children: [
                        "Read case study",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: p.github,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-2 rounded-full border hairline bg-card/50 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
                        "Repository"
                      ]
                    }
                  )
                ] })
              ] }) })
            ]
          },
          p.title
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectModal, { project: active, onClose: () => setActive(null) })
  ] });
}
function ProjectModal({
  project,
  onClose
}) {
  const [slide, setSlide] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!project) return;
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % project.images.length);
    }, 3e3);
    return () => clearInterval(id);
  }, [project, slide]);
  function prev() {
    setSlide((s) => (s - 1 + project.images.length) % project.images.length);
  }
  function next() {
    setSlide((s) => (s + 1) % project.images.length);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { onExitComplete: () => setSlide(0), children: project && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 },
      onClick: onClose,
      className: "fixed inset-0 z-[80] overflow-y-auto bg-foreground/40 backdrop-blur-md",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30, scale: 0.98 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 30, scale: 0.98 },
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          onClick: (e) => e.stopPropagation(),
          className: "mx-auto my-10 max-w-4xl overflow-hidden rounded-3xl bg-background shadow-float",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/9] w-full overflow-hidden bg-surface", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.img,
                {
                  src: project.images[slide],
                  alt: `${project.title} slide ${slide + 1}`,
                  initial: { opacity: 0, x: 40 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: -40 },
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  className: "h-full w-full object-cover"
                },
                slide
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "glass absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-foreground hover:bg-card",
                  "aria-label": "Close",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-5 top-5 flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em]", children: project.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-foreground" }),
                  project.status
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: prev,
                  className: "glass absolute left-4 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full text-foreground hover:bg-card",
                  "aria-label": "Previous image",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: next,
                  className: "glass absolute right-4 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full text-foreground hover:bg-card",
                  "aria-label": "Next image",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2", children: project.images.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setSlide(i),
                  "aria-label": `Go to slide ${i + 1}`,
                  className: `h-2 rounded-full transition-all duration-300 ${i === slide ? "w-5 bg-foreground" : "w-2 bg-foreground/40 hover:bg-foreground/70"}`
                },
                i
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-balance text-4xl leading-[1.05] tracking-tight md:text-5xl", children: project.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: project.tagline }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-8 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "Overview", body: project.overview }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "Architecture", body: project.architecture }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "Challenges solved", body: project.challenges }),
                project.ai && /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "AI workflow", body: project.ai })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: "Stack" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: project.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "rounded-full border hairline bg-card/60 px-3 py-1 text-xs text-foreground/80",
                    children: s
                  },
                  s
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3 border-t hairline pt-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: project.live,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" }),
                      "Live demo"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: project.github,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-2 rounded-full border hairline bg-card/50 px-5 py-2.5 text-sm font-medium hover:bg-card",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
                      "GitHub"
                    ]
                  }
                )
              ] })
            ] })
          ]
        }
      )
    }
  ) });
}
function Block({ title, body }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-pretty text-[15px] leading-relaxed text-foreground/85", children: body })
  ] });
}
const beliefs = [
  {
    k: "Scalable systems",
    v: "Design for the version of the product that exists in two years, not the demo on Monday."
  },
  {
    k: "Backend first",
    v: "Most product feel comes from the data model. Get the seams right and everything downstream gets easier."
  },
  {
    k: "AI as ingredient",
    v: "Models are tools, not features. The interesting work is the workflow around them."
  },
  {
    k: "Clean architecture",
    v: "Boring boundaries. Predictable layers. Code that tomorrow's collaborator can love."
  },
  {
    k: "Human-centered",
    v: "Interfaces should respect attention. Quiet defaults, clear actions, no theatre."
  },
  {
    k: "Performance",
    v: "Latency is a UX decision. Treat every millisecond like it belongs to the user."
  },
  {
    k: "Elegant UX",
    v: "Restraint is a craft. The best moments are the ones nobody notices."
  },
  {
    k: "Production ready",
    v: "If it can't be observed, deployed, and rolled back, it isn't built yet."
  }
];
function Philosophy() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-32 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "04 — Building philosophy" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-roboto font-semibold max-w-3xl text-balance text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-muted-foreground", children: "in eight notes." }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-px overflow-hidden rounded-3xl border hairline bg-border/40 sm:grid-cols-2 lg:grid-cols-4", children: beliefs.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 4 * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full bg-background p-7 transition-colors duration-500 hover:bg-surface", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: [
        "0",
        i + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl leading-tight tracking-tight", children: b.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: b.v })
    ] }) }, b.k)) })
  ] }) });
}
const EMAILJS_SERVICE_ID = "service_nxrv4iu";
const EMAILJS_TEMPLATE_ID = "template_cbs5lnx";
const EMAILJS_PUBLIC_KEY = "hlLIsms4ng18oMgZs";
function Contact() {
  const formRef = reactExports.useRef(null);
  const [status, setStatus] = reactExports.useState("idle");
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("sent");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-32 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "05 — Contact" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-roboto font-semibold max-w-3xl text-balance text-[clamp(2.25rem,6vw,5rem)] leading-[1] tracking-tight", children: [
      "Let's build something",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-muted-foreground", children: "meaningful." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg", children: "I'm always interested in ambitious ideas, AI systems, and impactful products. Tell me what you're building." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-10 md:grid-cols-[1.1fr_0.9fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          ref: formRef,
          onSubmit: handleSubmit,
          className: "glass rounded-3xl p-7 shadow-soft",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                required: true,
                name: "from_name",
                type: "text",
                className: "w-full bg-transparent text-base outline-none placeholder:text-muted-foreground/60",
                placeholder: "Ada Lovelace"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                required: true,
                name: "from_email",
                type: "email",
                className: "w-full bg-transparent text-base outline-none placeholder:text-muted-foreground/60",
                placeholder: "you@studio.com"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "What are you building?", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                required: true,
                name: "message",
                rows: 4,
                className: "w-full resize-none bg-transparent text-base outline-none placeholder:text-muted-foreground/60",
                placeholder: "A few sentences is plenty."
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                disabled: status === "sending",
                className: "group mt-2 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02] disabled:opacity-60",
                children: [
                  status === "sending" ? "Sending…" : status === "sent" ? "Thank you — I'll be in touch" : status === "error" ? "Failed — try again" : "Send message",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
                ]
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col justify-between rounded-3xl border hairline p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ContactRow,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
              label: "Email",
              value: "hundetesfa6@gmail.com",
              href: "mailto:hundetesfa6@gmail.com"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ContactRow,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
              label: "GitHub",
              value: "github.com/hunde51",
              href: "https://github.com/hunde51"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ContactRow,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }),
              label: "LinkedIn",
              value: "linkedin.com/in/hunde51",
              href: "https://linkedin.com/in/hunde51"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-sm leading-relaxed text-muted-foreground", children: "Based remotely. Working with founders, design studios, and AI teams who care about craft." })
      ] }) })
    ] })
  ] }) });
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mb-5 block border-b hairline pb-4 last:mb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: label }),
    children
  ] });
}
function ContactRow({
  icon,
  label,
  value,
  href
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "group flex items-center justify-between gap-4 rounded-2xl px-1 py-2 transition-colors hover:bg-surface/60",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-foreground text-background", children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: value })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t hairline py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base text-foreground", children: "Hunde Tesfa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-muted-foreground/50", children: "—" }),
      "Fullstack Developer & Agentic AI Builder"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-[0.22em]", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen overflow-x-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Philosophy, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
