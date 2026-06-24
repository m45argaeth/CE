"use client"

import { useI18n } from "@/lib/i18n"
import { Card, CardContent } from "@/components/ui/card"
import type { CompressResult } from "@/lib/compression"

interface CompressionRatioMeterProps {
  result: CompressResult | null
}

export function CompressionRatioMeter({ result }: CompressionRatioMeterProps) {
  const { t } = useI18n()

  if (!result) {
    return (
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold">{t.ratioMeter.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{t.ratioMeter.subtitle}</p>
          <div className="mt-6 flex items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/20 py-12 text-sm text-muted-foreground">
            {t.ratioMeter.empty}
          </div>
        </CardContent>
      </Card>
    )
  }

  // SVG gauge
  const percentage = Math.min(result.savings * 100, 100)
  const circumference = 2 * Math.PI * 80
  const dashOffset = circumference - (percentage / 100) * circumference * 0.75 // 270 degree arc

  // Color based on savings
  const getColor = (savings: number) => {
    if (savings >= 0.5) return { stroke: "#22c55e", text: "text-emerald-600 dark:text-emerald-400" }
    if (savings >= 0.3) return { stroke: "#eab308", text: "text-yellow-600 dark:text-yellow-400" }
    if (savings > 0) return { stroke: "#f97316", text: "text-orange-600 dark:text-orange-400" }
    return { stroke: "#ef4444", text: "text-red-600 dark:text-red-400" }
  }

  const color = getColor(result.savings)

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">{t.ratioMeter.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{t.ratioMeter.subtitle}</p>

        <div className="mt-6 flex flex-col items-center">
          {/* SVG Gauge */}
          <div className="relative">
            <svg width="200" height="160" viewBox="0 0 200 160">
              {/* Background arc */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
                transform="rotate(135 100 100)"
              />
              {/* Animated arc */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke={color.stroke}
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                transform="rotate(135 100 100)"
                className="animate-ring-fill"
                style={{
                  "--ring-circumference": circumference,
                  "--ring-target": dashOffset,
                } as React.CSSProperties}
              />
            </svg>
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-4xl font-bold ${color.text}`}>
                {percentage.toFixed(1)}%
              </span>
              <span className="text-sm text-muted-foreground">{t.ratioMeter.savings}</span>
            </div>
          </div>

          {/* Stats below */}
          <div className="mt-4 grid w-full grid-cols-2 gap-4 text-center">
            <div className="rounded-xl border p-3">
              <p className="text-xs text-muted-foreground">{t.ratioMeter.ratio}</p>
              <p className="mt-1 font-mono text-lg font-bold">
                {result.ratio.toFixed(2)}:1
              </p>
            </div>
            <div className="rounded-xl border p-3">
              <p className="text-xs text-muted-foreground">{t.beforeVsAfter.reduction}</p>
              <p className="mt-1 font-mono text-lg font-bold">
                {result.originalBytes - result.compressedBytes} B
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
