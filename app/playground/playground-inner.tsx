"use client"

import * as React from "react"
import { useI18n } from "@/lib/i18n"
import { compressText, randomExampleExcept } from "@/lib/compression"
import { PlaygroundIntro } from "@/components/playground/playground-intro"
import { TextInput } from "@/components/playground/text-input"
import { CompressionSimulation } from "@/components/playground/compression-simulation"
import { BeforeVsAfter } from "@/components/playground/before-vs-after"
import { CompressionRatioMeter } from "@/components/playground/compression-ratio-meter"
import { VisualBlocks } from "@/components/playground/visual-blocks"
import { EducationalInsights } from "@/components/playground/educational-insights"
import { ShareFeatures } from "@/components/playground/share-features"

export function PlaygroundInner() {
  const { t } = useI18n()

  const [input, setInput] = React.useState("")
  const [result, setResult] = React.useState<ReturnType<typeof compressText> | null>(null)

  const handleCompress = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    const res = compressText(trimmed)
    setResult(res)
  }

  const handleRandom = () => {
    const newExample = result ? randomExampleExcept(result.original) : randomExampleExcept("")
    setInput(newExample)
    const res = compressText(newExample)
    setResult(res)
  }

  const handleClear = () => {
    setInput("")
    setResult(null)
  }

  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.playground.title}
        </h1>
        <p className="mt-4 text-muted-foreground">{t.playground.subtitle}</p>
      </div>

      <div className="mx-auto mt-8 max-w-4xl space-y-8">
        <PlaygroundIntro />

        <TextInput
          value={input}
          onChange={setInput}
          onCompress={handleCompress}
          onRandom={handleRandom}
          onClear={handleClear}
          hasResult={result !== null}
        />

        {result && (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-sm font-medium text-muted-foreground">
              {t.playground.title}
            </h2>
            <ShareFeatures result={result} />
          </div>
        )}

        {result ? (
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <CompressionSimulation result={result} />
              <BeforeVsAfter result={result} />
            </div>
            <div className="space-y-6">
              <CompressionRatioMeter result={result} />
              <VisualBlocks result={result} />
            </div>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <CompressionSimulation result={null} />
              <BeforeVsAfter result={null} />
            </div>
            <div className="space-y-6">
              <CompressionRatioMeter result={null} />
              <VisualBlocks result={null} />
            </div>
          </div>
        )}

        <EducationalInsights />
      </div>
    </>
  )
}
