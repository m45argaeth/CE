/**
 * Share / copy helpers for the Compression Explorer.
 */

/** Encode text for use in a URL hash. */
export function encodeShareText(text: string): string {
  return encodeURIComponent(text.trim())
}

/** Decode text from a URL hash. */
export function decodeShareText(hash: string): string | null {
  try {
    const decoded = decodeURIComponent(hash.replace(/^#/, "").trim())
    return decoded || null
  } catch {
    return null
  }
}

/** Copy text to clipboard, returning success boolean. */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

/** Build a share URL for specific text. */
export function buildShareUrl(text: string): string {
  if (typeof window === "undefined") return ""
  return `${window.location.origin}/playground#${encodeShareText(text)}`
}
