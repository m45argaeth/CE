"use client"

import * as React from "react"
import { Shuffle, ArrowDownUp, Eraser } from "lucide-react"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface TextInputProps {
  value: string
  onChange: (value: string) => void
  onCompress: () => void
  onRandom: () => void
  onClear: () => void
  hasResult: boolean
}

export function TextInput({
  value,
  onChange,
  onCompress,
  onRandom,
  onClear,
  hasResult,
}: TextInputProps) {
  const { t } = useI18n()

  return (
    <Card>
      <CardContent className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col gap-3">
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                onCompress()
              }
            }}
            placeholder={t.textInput.placeholder}
            className="w-full text-base font-mono"
          />
          <div className="flex flex-wrap gap-2">
            <Button onClick={onCompress} className="min-w-0 flex-1 sm:flex-none">
              <ArrowDownUp className="h-4 w-4 shrink-0" />
              <span className="truncate">{t.textInput.compress}</span>
            </Button>
            <Button
              variant="outline"
              onClick={onRandom}
              className="min-w-0 flex-1 sm:flex-none"
            >
              <Shuffle className="h-4 w-4 shrink-0" />
              <span className="truncate">{t.textInput.randomExample}</span>
            </Button>
            {hasResult && (
              <Button
                variant="ghost"
                onClick={onClear}
                className="min-w-0 flex-1 sm:flex-none"
              >
                <Eraser className="h-4 w-4 shrink-0" />
                <span className="truncate">{t.textInput.clear}</span>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
