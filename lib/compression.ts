/**
 * Compression library for the Compression Explorer.
 * Implements Run-Length Encoding (RLE) and provides analysis tools.
 */

export interface CompressResult {
  original: string
  compressed: string
  originalLength: number
  compressedLength: number
  originalBytes: number
  compressedBytes: number
  ratio: number
  savings: number
  runs: Array<{ char: string; count: number }>
}

export interface PatternInfo {
  char: string
  count: number
  percentage: number
}

/** Curated examples with RLE-friendly patterns. */
export const COMPRESS_EXAMPLES: string[] = [
  "AAAAAAAAAA",
  "AAABBBCCC",
  "AABBCCAABB",
  "AAAAAAAAAABBBBBBBBBB",
  "hello world",
  "aaaaaabbbbbbccccc",
  "Hellooooo Wooooorld",
  "111110000011111",
  "RRRRRRRRREEEEEEEEEEDDDDDDDDD",
  "aaaaaaaaaaaaaaaa",
  "ABCABCABCABC",
  "WWWWWWWWWWWWWWWW",
  "test test test test",
  "122333444455555",
  "OOOOOOOOOOOO",
  "xxxxxxxxxxxxxxx",
  "mississippi",
  "aabbccdd",
  "Hello Hello Hello",
  "XXXXXXXXXXYYYYYYYYYY",
]

/** Perform Run-Length Encoding compression. */
export function compressText(text: string): CompressResult {
  if (!text) {
    return {
      original: "",
      compressed: "",
      originalLength: 0,
      compressedLength: 0,
      originalBytes: 0,
      compressedBytes: 0,
      ratio: 1,
      savings: 0,
      runs: [],
    }
  }

  const runs: Array<{ char: string; count: number }> = []
  let compressed = ""

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    let count = 1

    while (i + count < text.length && text[i + count] === char) {
      count++
    }

    runs.push({ char, count })

    if (count === 1) {
      compressed += char
    } else {
      compressed += `${char}×${count}`
    }

    i += count - 1
  }

  const originalBytes = new TextEncoder().encode(text).length
  const compressedBytes = new TextEncoder().encode(compressed).length
  const ratio = compressedBytes / originalBytes
  const savings = 1 - ratio

  return {
    original: text,
    compressed,
    originalLength: text.length,
    compressedLength: compressed.length,
    originalBytes,
    compressedBytes,
    ratio,
    savings,
    runs,
  }
}

/** Analyze repeated patterns in text. */
export function analyzeCompression(text: string): PatternInfo[] {
  if (!text) return []

  const charCounts = new Map<string, number>()
  for (const char of text) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1)
  }

  const patterns: PatternInfo[] = []
  for (const [char, count] of charCounts) {
    patterns.push({
      char,
      count,
      percentage: count / text.length,
    })
  }

  // Sort by count descending
  patterns.sort((a, b) => b.count - a.count)

  return patterns
}

/** Get a random example from the curated set. */
export function randomExample(): string {
  return COMPRESS_EXAMPLES[
    Math.floor(Math.random() * COMPRESS_EXAMPLES.length)
  ]
}

/** Get a random example that differs from the current one. */
export function randomExampleExcept(current: string): string {
  const pool = COMPRESS_EXAMPLES.filter((e) => e !== current)
  if (pool.length === 0) return randomExample()
  return pool[Math.floor(Math.random() * pool.length)]
}
