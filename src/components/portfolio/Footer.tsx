import { Github, Linkedin, Mail } from "lucide-react";

const nav = [
  { href: "#about",    label: "About"    },
  { href: "#skills",   label: "Skills"   },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact"  },
];

const social = [
  { href: "mailto:hundetesfa6@gmail.com", icon: Mail,     label: "Email"    },
  { href: "https://github.com/hunde51",   icon: Github,   label: "GitHub"   },
  { href: "https://linkedin.com/in/hunde51", icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t hairline py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <span className="font-display text-xl text-foreground">Hunde Tesfa</span>
            <p className="mt-1 text-sm text-muted-foreground">Fullstack Developer & Agentic AI Builder</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {social.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border hairline text-muted-foreground transition-colors hover:text-foreground hover:bg-surface"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t hairline pt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground/60">
          © {new Date().getFullYear()} Hunde Tesfa
        </div>
      </div>
    </footer>
  );
}
