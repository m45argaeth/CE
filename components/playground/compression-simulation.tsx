"use client"

import { useI18n } from "@/lib/i18n"
import { Card, CardContent } from "@/components/ui/card"
import type { CompressResult } from "@/lib/compression"

interface CompressionSimulationProps {
  result: CompressResult | null
}

export function CompressionSimulation({ result }: CompressionSimulationProps) {
  const { t } = useI18n()

  if (!result) {
    return (
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold">{t.simulation.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{t.simulation.subtitle}</p>
          <div className="mt-6 flex items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/20 py-12 text-sm text-muted-foreground">
            {t.simulation.empty}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">{t.simulation.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{t.simulation.subtitle}</p>

        <div className="mt-6 space-y-4">
          {/* Original */}
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
              {t.simulation.original}
            </p>
            <div className="rounded-xl border bg-muted/30 p-4 font-mono text-sm break-all">
              {result.original.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block animate-fade-in"
                  style={{ animationDelay: `${i * 20}ms` }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              ↓
            </div>
          </div>

          {/* Compressed */}
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
              {t.simulation.compressed}
            </p>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 font-mono text-sm dark:border-emerald-800 dark:bg-emerald-950/30">
              <span className="animate-fade-in text-emerald-700 dark:text-emerald-300">
                {result.compressed}
              </span>
            </div>
          </div>

          {/* Run breakdown */}
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
              Runs Detected ({result.runs.length})
            </p>
            <div className="flex flex-wrap gap-2">
              {result.runs.map((run, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1 rounded-lg border bg-card px-3 py-1.5 text-xs animate-fade-in"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span className="font-mono font-bold">
                    {run.char === " " ? "⎵" : run.char}
                  </span>
                  <span className="text-muted-foreground">×{run.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
