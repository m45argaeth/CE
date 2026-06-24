"use client"

import { useI18n } from "@/lib/i18n"
import { Card, CardContent } from "@/components/ui/card"
import type { CompressResult } from "@/lib/compression"

interface VisualBlocksProps {
  result: CompressResult | null
}

const BLOCK_COLORS = [
  "bg-blue-400",
  "bg-emerald-400",
  "bg-amber-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-cyan-400",
  "bg-rose-400",
  "bg-lime-400",
]

export function VisualBlocks({ result }: VisualBlocksProps) {
  const { t } = useI18n()

  if (!result) {
    return (
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold">{t.visualBlocks.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{t.visualBlocks.subtitle}</p>
          <div className="mt-6 flex items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/20 py-12 text-sm text-muted-foreground">
            {t.visualBlocks.empty}
          </div>
        </CardContent>
      </Card>
    )
  }

  const maxCount = Math.max(...result.runs.map((r) => r.count))

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">{t.visualBlocks.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{t.visualBlocks.subtitle}</p>

        <div className="mt-6 space-y-3">
          {/* Original blocks */}
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
              Original
            </p>
            <div className="flex flex-wrap gap-1">
              {result.original.split("").map((char, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-xs font-mono font-bold animate-scale-in"
                  style={{ animationDelay: `${i * 15}ms` }}
                >
                  {char === " " ? "⎵" : char}
                </div>
              ))}
            </div>
          </div>

          {/* Compressed blocks */}
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
              Compressed
            </p>
            <div className="flex flex-wrap gap-2">
              {result.runs.map((run, i) => {
                const colorClass = BLOCK_COLORS[i % BLOCK_COLORS.length]
                // Scale: 1 block per character up to maxCount
                const scaledWidth = Math.max(1, Math.round((run.count / maxCount) * 6))

                return (
                  <div
                    key={i}
                    className="flex items-center gap-1 animate-scale-in"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div
                      className={`flex items-center justify-center rounded-lg ${colorClass} text-xs font-mono font-bold text-white`}
                      style={{
                        width: `${scaledWidth * 2}rem`,
                        height: "2rem",
                      }}
                    >
                      {run.char === " " ? "⎵" : run.char}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      ×{run.count}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-2 pt-2">
            {result.runs.map((run, i) => {
              const colorClass = BLOCK_COLORS[i % BLOCK_COLORS.length]
              return (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <span className={`h-3 w-3 rounded-sm ${colorClass}`} />
                  <span className="font-mono">
                    {run.char === " " ? "⎵" : run.char}
                  </span>
                  <span>= {run.count}</span>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
