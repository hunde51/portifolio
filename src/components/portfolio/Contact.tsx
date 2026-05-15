import { useState } from "react";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            05 — Contact
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display max-w-3xl text-balance text-[clamp(2.25rem,6vw,5rem)] leading-[1] tracking-tight">
            Let's build something{" "}
            <span className="italic text-muted-foreground">meaningful.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
            I'm always interested in ambitious ideas, AI systems, and impactful
            products. Tell me what you're building.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="glass rounded-3xl p-7 shadow-soft"
            >
              <Field label="Your name">
                <input
                  required
                  type="text"
                  className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground/60"
                  placeholder="Ada Lovelace"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground/60"
                  placeholder="you@studio.com"
                />
              </Field>
              <Field label="What are you building?">
                <textarea
                  required
                  rows={4}
                  className="w-full resize-none bg-transparent text-base outline-none placeholder:text-muted-foreground/60"
                  placeholder="A few sentences is plenty."
                />
              </Field>
              <button
                type="submit"
                className="group mt-2 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
              >
                {sent ? "Thank you — I'll be in touch" : "Send message"}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex h-full flex-col justify-between rounded-3xl border hairline p-7">
              <div className="space-y-5">
                <ContactRow
                  icon={<Mail className="h-4 w-4" />}
                  label="Email"
                  value="hunde@example.com"
                  href="mailto:hunde@example.com"
                />
                <ContactRow
                  icon={<Github className="h-4 w-4" />}
                  label="GitHub"
                  value="github.com/hundetesfa"
                  href="#"
                />
                <ContactRow
                  icon={<Linkedin className="h-4 w-4" />}
                  label="LinkedIn"
                  value="linkedin.com/in/hundetesfa"
                  href="#"
                />
              </div>
              <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
                Based remotely. Working with founders, design studios, and AI
                teams who care about craft.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="mb-5 block border-b hairline pb-4 last:mb-6">
      <span className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between gap-4 rounded-2xl px-1 py-2 transition-colors hover:bg-surface/60"
    >
      <div className="flex items-center gap-4">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background">
          {icon}
        </span>
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {label}
          </div>
          <div className="text-sm font-medium">{value}</div>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
}
