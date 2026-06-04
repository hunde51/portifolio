import { useRef } from "react";
import { motion, useInView, useAnimationFrame } from "framer-motion";
import { Reveal } from "./Reveal";

// ── Layout constants ──────────────────────────────────────────────
const W = 1100;          // svg width
const H = 400;           // svg height
const PAD = 40;          // left/right padding

const TRACK1_Y = 130;    // main timeline
const TRACK2_Y = 230;    // restored branch

const TICK_COUNT = 80;   // dense ruler ticks

// Main branch nodes
const mainNodes = [
  { t: 0.08,  time: "2023", label: "first-commit", active: false, error: false },
  { t: 0.35,  time: "2024", label: "frontend",     active: true,  error: false },
  { t: 0.62,  time: "2025", label: "backend",      active: false, error: false },
  { t: 0.88,  time: "2026", label: "agentic-ai",   active: false, error: false },
];

// Restored branch nodes (below, teal track)
const restoredNodes = [
  { t: 0.08,  time: "2023", label: "learning-phase"   },
  { t: 0.35,  time: "2024", label: "shipped-products" },
  { t: 0.88,  time: "2026", label: "ai-systems"       },
];

const ARC_FROM_T = 0.35;  // frontend
const ARC_TO_T   = 0.88;  // agentic-ai

// Bottom arc: 2023 → 2026 on track 2
const ARC2_FROM_T = 0.08; // 2023
const ARC2_TO_T   = 0.88; // 2026

function tx(t: number) { return PAD + t * (W - PAD * 2); }

const x1 = tx(ARC_FROM_T);
const x2 = tx(ARC_TO_T);
const arcTop = TRACK1_Y - 80;
const arcPath = `M ${x1} ${TRACK1_Y} L ${x1} ${arcTop + 16} Q ${x1} ${arcTop} ${x1 + 16} ${arcTop} L ${x2 - 16} ${arcTop} Q ${x2} ${arcTop} ${x2} ${arcTop + 16} L ${x2} ${TRACK1_Y}`;
const pillX = (x1 + x2) / 2;
const pillY = arcTop - 2;

// Bottom arc geometry
const bx1 = tx(ARC2_FROM_T);
const bx2 = tx(ARC2_TO_T);
const arcBot = TRACK2_Y + 60;
const arcPath2 = `M ${bx1} ${TRACK2_Y} L ${bx1} ${arcBot - 16} Q ${bx1} ${arcBot} ${bx1 + 16} ${arcBot} L ${bx2 - 16} ${arcBot} Q ${bx2} ${arcBot} ${bx2} ${arcBot - 16} L ${bx2} ${TRACK2_Y}`;
const pill2X = (bx1 + bx2) / 2;
const pill2Y = arcBot + 2;

// ── Particle canvas ───────────────────────────────────────────────
type P = { x: number; y: number; vx: number; vy: number; life: number; r: number };

function Embers({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progress  = useRef(0);
  const ps        = useRef<P[]>([]);

  // Sample a point along the rounded-rect arc path (approx via bezier segments)
  function sample(t: number): { x: number; y: number } {
    // Arc path is essentially a rectangle arc. We approximate with 4 segments:
    // 0–0.08: vertical down from x1,TRACK1_Y to x1,arcTop+16
    // 0.08–0.12: quarter circle at top-left
    // 0.12–0.88: horizontal from x1 to x2
    // 0.88–0.92: quarter circle at top-right
    // 0.92–1: vertical down from x2,arcTop+16 to x2,TRACK1_Y
    const vLen = TRACK1_Y - (arcTop + 16);
    const hLen = x2 - x1;
    const cLen = 16 * (Math.PI / 2);
    const total = vLen + cLen + hLen + cLen + vLen;
    const v1 = vLen / total;
    const c1 = cLen / total;
    const h  = hLen / total;
    const c2 = cLen / total;

    if (t < v1) {
      const s = t / v1;
      return { x: x1, y: TRACK1_Y - s * vLen };
    } else if (t < v1 + c1) {
      const s = (t - v1) / c1;
      const angle = Math.PI + s * (Math.PI / 2);
      return { x: x1 + 16 + 16 * Math.cos(angle), y: arcTop + 16 + 16 * Math.sin(angle) };
    } else if (t < v1 + c1 + h) {
      const s = (t - v1 - c1) / h;
      return { x: x1 + s * hLen, y: arcTop };
    } else if (t < v1 + c1 + h + c2) {
      const s = (t - v1 - c1 - h) / c2;
      const angle = -Math.PI / 2 + s * (Math.PI / 2);
      return { x: x2 - 16 + 16 * Math.cos(angle), y: arcTop + 16 + 16 * Math.sin(angle) };
    } else {
      const s = (t - v1 - c1 - h - c2) / v1;
      return { x: x2, y: arcTop + 16 + s * vLen };
    }
  }

  useAnimationFrame((_, delta) => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    progress.current = Math.min(progress.current + 0.00055 * delta, 1);
    const { x, y } = sample(progress.current);

    if (progress.current < 1) {
      for (let i = 0; i < 4; i++) {
        ps.current.push({
          x: x + (Math.random() - 0.5) * 5,
          y: y + (Math.random() - 0.5) * 5,
          vx: (Math.random() - 0.5) * 0.7,
          vy: -Math.random() * 1.4 - 0.3,
          life: 1,
          r: Math.random() * 2.5 + 0.8,
        });
      }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ps.current = ps.current.filter((p) => p.life > 0.02);

    for (const p of ps.current) {
      p.x += p.vx; p.y += p.vy; p.life -= 0.025;
      const a = p.life;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.shadowBlur  = 8;
      ctx.shadowColor = `rgba(220,110,30,0.8)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * a + 0.3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${Math.round(200 + 55 * a)},${Math.round(100 + 40 * a)},20,1)`;
      ctx.fill();
      ctx.restore();
    }

    if (progress.current < 1) {
      ctx.save();
      const g = ctx.createRadialGradient(x, y, 0, x, y, 14);
      g.addColorStop(0, "rgba(255,210,100,1)");
      g.addColorStop(0.5, "rgba(220,110,30,0.7)");
      g.addColorStop(1,   "rgba(220,110,30,0)");
      ctx.shadowBlur  = 20;
      ctx.shadowColor = "rgba(220,110,30,1)";
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.restore();
    }
  });

  return (
    <canvas
      ref={canvasRef}
      width={W} height={H}
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 20 }}
    />
  );
}

// Bottom arc ember — particles go downward
function Embers2({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progress  = useRef(0);
  const ps        = useRef<P[]>([]);

  function sample(t: number): { x: number; y: number } {
    const vLen = arcBot - 16 - TRACK2_Y;
    const hLen = bx2 - bx1;
    const cLen = 16 * (Math.PI / 2);
    const total = vLen + cLen + hLen + cLen + vLen;
    const v1 = vLen / total;
    const c1 = cLen / total;
    const h  = hLen / total;
    const c2 = cLen / total;

    if (t < v1) {
      return { x: bx1, y: TRACK2_Y + (t / v1) * vLen };
    } else if (t < v1 + c1) {
      const s = (t - v1) / c1;
      const angle = -Math.PI / 2 + s * (Math.PI / 2);  // bottom-left corner
      return { x: bx1 + 16 + 16 * Math.cos(Math.PI + (Math.PI / 2) * s), y: arcBot - 16 + 16 * Math.sin(Math.PI + (Math.PI / 2) * s) };
    } else if (t < v1 + c1 + h) {
      const s = (t - v1 - c1) / h;
      return { x: bx1 + s * hLen, y: arcBot };
    } else if (t < v1 + c1 + h + c2) {
      const s = (t - v1 - c1 - h) / c2;
      return { x: bx2 - 16 + 16 * Math.cos(-Math.PI / 2 + (Math.PI / 2) * s), y: arcBot - 16 + 16 * Math.sin(-Math.PI / 2 + (Math.PI / 2) * s) };
    } else {
      const s = (t - v1 - c1 - h - c2) / v1;
      return { x: bx2, y: arcBot - (s * vLen) };
    }
  }

  useAnimationFrame((_, delta) => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    progress.current = Math.min(progress.current + 0.00045 * delta, 1);
    const { x, y } = sample(progress.current);

    if (progress.current < 1) {
      for (let i = 0; i < 4; i++) {
        ps.current.push({
          x: x + (Math.random() - 0.5) * 5,
          y: y + (Math.random() - 0.5) * 5,
          vx: (Math.random() - 0.5) * 0.7,
          vy: Math.random() * 1.4 + 0.3, // downward
          life: 1,
          r: Math.random() * 2.5 + 0.8,
        });
      }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ps.current = ps.current.filter((p) => p.life > 0.02);

    for (const p of ps.current) {
      p.x += p.vx; p.y += p.vy; p.life -= 0.025;
      const a = p.life;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.shadowBlur  = 8;
      ctx.shadowColor = "rgba(30,160,120,0.8)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * a + 0.3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(20,${Math.round(160 + 40 * a)},${Math.round(100 + 55 * a)},1)`;
      ctx.fill();
      ctx.restore();
    }

    if (progress.current < 1) {
      ctx.save();
      const g = ctx.createRadialGradient(x, y, 0, x, y, 14);
      g.addColorStop(0, "rgba(100,240,200,1)");
      g.addColorStop(0.5, "rgba(30,160,120,0.7)");
      g.addColorStop(1, "rgba(30,160,120,0)");
      ctx.shadowBlur  = 20;
      ctx.shadowColor = "rgba(30,160,120,1)";
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.restore();
    }
  });

  return (
    <canvas
      ref={canvasRef}
      width={W} height={H}
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 21 }}
    />
  );
}

// ── Main component ────────────────────────────────────────────────
export function Philosophy() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            04 — Building philosophy
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-roboto font-semibold max-w-3xl text-balance text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight">
            <span className="italic text-muted-foreground">a timeline of principles.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={ref}
            className="mt-16 relative overflow-x-auto rounded-none md:rounded-3xl border-y md:border hairline shadow-soft -mx-6 md:mx-0"
            style={{ background: "oklch(0.985 0.005 85)" }}
          >
            {/* Fine grid */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                backgroundImage:
                  "linear-gradient(oklch(0.18 0 0/0.05) 1px,transparent 1px)," +
                  "linear-gradient(90deg,oklch(0.18 0 0/0.05) 1px,transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div style={{ position: "relative", width: W, minWidth: W, height: H }}>
              <Embers active={inView} />
              <Embers2 active={inView} />

              <svg width={W} height={H} style={{ display: "block", position: "relative", zIndex: 10 }}>

                {/* Dense tick ruler — track 1 */}
                {Array.from({ length: TICK_COUNT }).map((_, i) => {
                  const x = PAD + (i / (TICK_COUNT - 1)) * (W - PAD * 2);
                  const tall = i % 10 === 0;
                  return (
                    <line key={i}
                      x1={x} y1={TRACK1_Y - (tall ? 8 : 4)}
                      x2={x} y2={TRACK1_Y + (tall ? 8 : 4)}
                      stroke="oklch(0.18 0 0/0.15)"
                      strokeWidth={tall ? 1 : 0.7}
                    />
                  );
                })}

                {/* Track 1 line */}
                <line x1={PAD} y1={TRACK1_Y} x2={W - PAD} y2={TRACK1_Y}
                  stroke="oklch(0.18 0 0/0.15)" strokeWidth={1} />

                {/* Track 2 line — teal tint */}
                <line x1={PAD} y1={TRACK2_Y} x2={W - PAD} y2={TRACK2_Y}
                  stroke="oklch(0.55 0.08 180/0.35)" strokeWidth={1} />

                {/* Dense tick ruler — track 2 */}
                {Array.from({ length: TICK_COUNT }).map((_, i) => {
                  const x = PAD + (i / (TICK_COUNT - 1)) * (W - PAD * 2);
                  const tall = i % 10 === 0;
                  return (
                    <line key={`t2-${i}`}
                      x1={x} y1={TRACK2_Y - (tall ? 6 : 3)}
                      x2={x} y2={TRACK2_Y + (tall ? 6 : 3)}
                      stroke="oklch(0.55 0.08 180/0.2)"
                      strokeWidth={0.7}
                    />
                  );
                })}

                {/* Vertical drop line from checkpoint down to track 2 */}
                <motion.line
                  x1={x1} y1={TRACK1_Y}
                  x2={x1} y2={TRACK2_Y}
                  stroke="oklch(0.18 0 0/0.2)"
                  strokeWidth={1}
                  strokeDasharray="3 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />

                {/* Arc — glow layer */}
                {inView && (
                  <motion.path
                    d={arcPath}
                    fill="none"
                    stroke="rgba(220,120,30,0.4)"
                    strokeWidth={8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: "blur(6px)" }}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}

                {/* Arc — crisp line */}
                {inView && (
                  <motion.path
                    d={arcPath}
                    fill="none"
                    stroke="rgba(210,115,25,0.95)"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}

                {/* Arrowhead at arc start (checkpoint, pointing down) */}
                {inView && (
                  <motion.polygon
                    points={`${x1 - 4},${TRACK1_Y - 8} ${x1 + 4},${TRACK1_Y - 8} ${x1},${TRACK1_Y - 1}`}
                    fill="rgba(210,115,25,0.95)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0, duration: 0.3 }}
                  />
                )}

                {/* Pill label */}
                {inView && (
                  <motion.g
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Glow behind pill */}
                    <rect
                      x={pillX - 88} y={pillY - 13}
                      width={176} height={24} rx={12}
                      fill="none"
                      stroke="rgba(220,130,30,1)"
                      strokeWidth={6}
                      style={{ filter: "blur(6px)", opacity: 0.55 } as React.CSSProperties}
                    />
                    {/* Pill body */}
                    <rect
                      x={pillX - 88} y={pillY - 13}
                      width={176} height={24} rx={12}
                      fill="oklch(0.985 0.005 85)"
                      stroke="rgba(210,115,25,0.85)"
                      strokeWidth={1.2}
                    />
                    <text
                      x={pillX} y={pillY + 4}
                      textAnchor="middle"
                      fontSize={11}
                      fontFamily="monospace"
                      fill="rgba(160,85,15,1)"
                      letterSpacing="0.12em"
                    >
                      full-stack → agentic-ai
                    </text>
                  </motion.g>
                )}

                {/* Main track nodes */}
                {mainNodes.map((n, i) => {
                  const x = tx(n.t);
                  const labelColor = n.error
                    ? "rgba(200,60,40,1)"
                    : n.active
                    ? "oklch(0.18 0 0)"
                    : "oklch(0.45 0 0)";
                  return (
                    <motion.g key={n.label}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                    >
                      {/* Tall tick for active node */}
                      {n.active && (
                        <line x1={x} y1={TRACK1_Y} x2={x} y2={TRACK2_Y}
                          stroke="oklch(0.18 0 0/0.12)" strokeWidth={1} />
                      )}
                      {/* Timestamp */}
                      <text x={x} y={TRACK1_Y - 18}
                        textAnchor="middle" fontSize={10}
                        fontFamily="monospace" fill="oklch(0.5 0 0)"
                        letterSpacing="0.05em"
                      >{n.time}</text>
                      {/* Label */}
                      <text x={x} y={TRACK1_Y + 20}
                        textAnchor="middle" fontSize={11}
                        fontFamily="monospace"
                        fontWeight={n.active ? "700" : "400"}
                        fill={labelColor}
                        letterSpacing="0.04em"
                      >{n.label}</text>
                    </motion.g>
                  );
                })}

                {/* Restored track nodes */}
                {restoredNodes.map((n, i) => {
                  const x = tx(n.t);
                  return (
                    <motion.g key={n.label}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                    >
                      <text x={x} y={TRACK2_Y + 18}
                        textAnchor="middle" fontSize={10}
                        fontFamily="monospace" fill="oklch(0.5 0 0)"
                        letterSpacing="0.05em"
                      >{n.time}</text>
                      <text x={x} y={TRACK2_Y + 32}
                        textAnchor="middle" fontSize={11}
                        fontFamily="monospace" fill="oklch(0.35 0 0)"
                        letterSpacing="0.04em"
                      >{n.label}</text>
                    </motion.g>
                  );
                })}

                {/* Bottom arc — glow */}
                {inView && (
                  <motion.path
                    d={arcPath2}
                    fill="none"
                    stroke="rgba(30,180,130,0.4)"
                    strokeWidth={8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: "blur(6px)" }}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}

                {/* Bottom arc — crisp */}
                {inView && (
                  <motion.path
                    d={arcPath2}
                    fill="none"
                    stroke="rgba(25,160,115,0.9)"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}

                {/* Bottom pill label */}
                {inView && (
                  <motion.g
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <rect
                      x={pill2X - 78} y={pill2Y - 2}
                      width={156} height={24} rx={12}
                      fill="none"
                      stroke="rgba(30,180,130,1)"
                      strokeWidth={6}
                      style={{ filter: "blur(6px)", opacity: 0.5 } as React.CSSProperties}
                    />
                    <rect
                      x={pill2X - 78} y={pill2Y - 2}
                      width={156} height={24} rx={12}
                      fill="oklch(0.985 0.005 85)"
                      stroke="rgba(25,160,115,0.85)"
                      strokeWidth={1.2}
                    />
                    <text
                      x={pill2X} y={pill2Y + 14}
                      textAnchor="middle" fontSize={11}
                      fontFamily="monospace"
                      fill="rgba(15,110,80,1)"
                      letterSpacing="0.1em"
                    >
                      full journey
                    </text>
                  </motion.g>
                )}

              </svg>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
