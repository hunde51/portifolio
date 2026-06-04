import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-9 w-9 place-items-center rounded-full border hairline transition-colors hover:bg-surface"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        {dark ? (
          // Crescent moon — dark mode indicator
          <path
            d="M13 8.5A5.5 5.5 0 0 1 7.5 3a5.5 5.5 0 1 0 5.5 5.5z"
            fill="currentColor"
            className="text-foreground"
          />
        ) : (
          // Half-filled circle — light mode indicator
          <>
            <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.2" className="text-foreground" />
            <path d="M8 3 A5 5 0 0 1 8 13 Z" fill="currentColor" className="text-foreground" />
          </>
        )}
      </svg>
    </button>
  );
}
