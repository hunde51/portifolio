export function Footer() {
  return (
    <footer className="border-t hairline py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <div>
          <span className="font-display text-base text-foreground">Hunde Tesfa</span>
          <span className="mx-2 text-muted-foreground/50">—</span>
          Fullstack Developer & Agentic AI Builder
        </div>
        <div className="text-xs uppercase tracking-[0.22em]">
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
