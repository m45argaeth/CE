"use client"

import { useI18n } from "@/lib/i18n"
import { Card, CardContent } from "@/components/ui/card"
import { formatPercent } from "@/lib/format"
import type { CompressResult } from "@/lib/compression"

interface BeforeVsAfterProps {
  result: CompressResult | null
}

export function BeforeVsAfter({ result }: BeforeVsAfterProps) {
  const { t } = useI18n()

  if (!result) {
    return (
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold">{t.beforeVsAfter.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{t.beforeVsAfter.subtitle}</p>
          <div className="mt-6 flex items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/20 py-12 text-sm text-muted-foreground">
            {t.beforeVsAfter.empty}
          </div>
        </CardContent>
      </Card>
    )
  }

  const stats = [
    {
      label: t.beforeVsAfter.charCount,
      before: result.originalLength,
      after: result.compressedLength,
    },
    {
      label: t.beforeVsAfter.byteCount,
      before: result.originalBytes,
      after: result.compressedBytes,
    },
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">{t.beforeVsAfter.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{t.beforeVsAfter.subtitle}</p>

        <div className="mt-6 space-y-4">
          {/* Size comparison bars */}
          <div className="space-y-3">
            {stats.map((stat) => {
              const maxVal = Math.max(stat.before, stat.after)
              const beforeWidth = maxVal > 0 ? (stat.before / maxVal) * 100 : 0
              const afterWidth = maxVal > 0 ? (stat.after / maxVal) * 100 : 0

              return (
                <div key={stat.label} className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="w-16 text-xs text-muted-foreground">{t.beforeVsAfter.originalSize}</span>
                      <div className="flex-1 overflow-hidden rounded-full bg-muted/40 h-5">
                        <div
                          className="h-full rounded-full bg-muted-foreground/30 animate-bar-grow"
                          style={{ "--bar-width": `${beforeWidth}%` } as React.CSSProperties}
                        />
                      </div>
                      <span className="w-12 text-right font-mono text-xs">{stat.before}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-16 text-xs text-muted-foreground">{t.beforeVsAfter.compressedSize}</span>
                      <div className="flex-1 overflow-hidden rounded-full bg-muted/40 h-5">
                        <div
                          className="h-full rounded-full bg-emerald-500 animate-bar-grow"
                          style={{ "--bar-width": `${afterWidth}%` } as React.CSSProperties}
                        />
                      </div>
                      <span className="w-12 text-right font-mono text-xs">{stat.after}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Reduction badge */}
          <div className="flex items-center justify-center rounded-xl bg-emerald-50 py-4 dark:bg-emerald-950/30">
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                {formatPercent(result.savings)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{t.beforeVsAfter.reduction}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
