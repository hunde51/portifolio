import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Philosophy } from "@/components/portfolio/Philosophy";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hunde Tesfa — Intelligent Systems & Agentic AI" },
      {
        name: "description",
        content:
          "Hunde Tesfa — full-stack engineer building intelligent software systems that solve real business problems with reliability, clarity, and attention to detail.",
      },
      { property: "og:title", content: "Hunde Tesfa — Intelligent Systems & Agentic AI" },
      {
        property: "og:description",
        content:
          "Building technically robust and practical AI workflows, scalable APIs, and data-intensive platforms.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://hundefest.vercel.app/og-image.svg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://hundefest.vercel.app/og-image.svg" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Philosophy />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}


// hunde-portrait