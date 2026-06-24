"use client"

import * as React from "react"
export type Locale = "id" | "en"
export const LOCALES: Locale[] = ["id", "en"]
export const DEFAULT_LOCALE: Locale = "id"
const STORAGE_KEY = "ce-locale"

/* ------------------------------------------------------------------ */
/*  English dictionary                                                 */
/* ------------------------------------------------------------------ */

const en = {
  header: { playground: "Playground", tryNow: "Try Now" },
  hero: {
    badge: "An educational playground for how data compression works",
    title: "Compression Explorer",
    subtitle:
      "Discover how repeated patterns in text can be shrunk into compact representations. See Run-Length Encoding in action, compare before vs after, and build intuition for data compression — all in your browser.",
    tryNow: "Try Now",
    randomExample: "Random Example",
    mono: "AAABBBCCC → A×3 B×3 C×3. Same data, fewer bytes.",
  },
  features: {
    heading: "Data has patterns. Compression finds them.",
    subtitle:
      "Every piece of data contains repetition. Compression algorithms detect and encode these patterns efficiently, saving space without losing information.",
    simulation: {
      title: "Compression Simulation",
      formula: "AAAA → A × 4",
      body: "Watch text transform in real-time as Run-Length Encoding collapses repeated characters into compact notation. See the algorithm work step by step.",
    },
    comparison: {
      title: "Before vs After",
      formula: "original_size → compressed_size",
      body: "Compare byte counts, character counts, and compression ratios side by side. See exactly how much space you save with each example.",
    },
    visualization: {
      title: "Visual Blocks",
      formula: "repetition → visual collapse",
      body: "See animated blocks represent each character group. Watch them compress and collapse as the algorithm processes your text.",
    },
  },
  how: {
    heading: "How it works",
    subtitle: "Three steps, entirely client-side.",
    steps: [
      {
        title: "1. Enter your text",
        body: "Type any text or pick a random example. Try patterns like AAAABBBBCC or repeated words to see maximum compression.",
      },
      {
        title: "2. Run-Length Encoding",
        body: "The algorithm scans left-to-right, counting consecutive identical characters. A run of 5 A's becomes 'A × 5'.",
      },
      {
        title: "3. Analyze the results",
        body: "View the compressed output, see the ratio, inspect repeated patterns, and learn why some data compresses better than others.",
      },
    ],
  },
  cta: {
    heading: "Ready to see how data gets smaller?",
    subtitle:
      "No sign-up, no server calls. Just you, your curiosity, and the elegant simplicity of Run-Length Encoding.",
    button: "Open the Playground",
  },
  playground: {
    title: "The Playground",
    subtitle:
      "Type text and watch it compress in real-time. Explore before vs after, see the compression ratio, and learn about data patterns. Everything runs locally in your browser.",
    intro: {
      title: "Welcome to the Compression Explorer",
      body: "This playground lets you explore how Run-Length Encoding (RLE) compresses data by detecting repeated patterns. Try typing text below, or click 'Random Example' to get started.",
    },
  },
  textInput: {
    placeholder: "Type text to compress (e.g. AAAAABBB, hello world)…",
    compress: "Compress",
    randomExample: "Random Example",
    clear: "Clear",
  },
  simulation: {
    title: "Compression Simulation",
    subtitle: "Watch Run-Length Encoding transform your text step by step.",
    original: "Original",
    compressed: "Compressed",
    empty: "Enter text above to see the compression simulation.",
  },
  beforeVsAfter: {
    title: "Before vs After",
    subtitle: "See the exact difference compression makes.",
    originalSize: "Original Size",
    compressedSize: "Compressed Size",
    reduction: "Reduction",
    charCount: "Characters",
    byteCount: "Bytes",
    empty: "Enter text to compare sizes.",
  },
  ratioMeter: {
    title: "Compression Ratio",
    subtitle: "How efficiently your data was compressed.",
    ratio: "Ratio",
    savings: "Space Saved",
    empty: "Enter text to see the compression ratio.",
  },
  visualBlocks: {
    title: "Visual Blocks",
    subtitle: "See repeated characters collapse into compact blocks.",
    empty: "Enter text to see animated blocks.",
  },
  insights: {
    heading: "Did you know?",
    items: {
      id: [
        "Run-Length Encoding (RLE) adalah salah satu teknik kompresi tertua dan paling sederhana, pertama kali digunakan pada tahun 1950-an.",
        "RLE sangat efektif untuk data dengan pola berulang — seperti gambar bitmap, data sensor, atau teks seperti 'AAAAAAAAAA'.",
        "File BMP dan TIFF sering menggunakan RLE sebagai salah satu metode kompresi bawaannya.",
        "Kompresi lossless (seperti RLE) tidak kehilangan satupun bit data asli — bisa dikembalikan persis seperti semula.",
        "JPEG dan MP3 menggunakan kompresi lossy yang mengorbankan sedikit kualitas untuk kompresi yang jauh lebih besar.",
        "Algoritma kompresi modern seperti DEFLATE (digunakan di ZIP dan PNG) menggabungkan RLE dengan Huffman coding.",
      ],
      en: [
        "Run-Length Encoding (RLE) is one of the oldest and simplest compression techniques, first used in the 1950s.",
        "RLE works extremely well on data with repeating patterns — like bitmap images, sensor data, or text like 'AAAAAAAAAA'.",
        "BMP and TIFF image files often use RLE as one of their built-in compression methods.",
        "Lossless compression (like RLE) loses not a single bit of original data — it can be restored exactly as it was.",
        "JPEG and MP3 use lossy compression that trades a little quality for much greater compression ratios.",
        "Modern compression algorithms like DEFLATE (used in ZIP and PNG) combine RLE with Huffman coding.",
      ],
    },
  },
  share: {
    copyResult: "Copy result",
    copied: "Copied!",
    shareLink: "Share link",
    linkCopied: "Link copied!",
  },
  footer: {
    tagline: "Compression Explorer — discover how data gets smaller.",
    home: "Home",
    playground: "Playground",
    madeWith: "Made with ❤️ by",
  },
}

/* ------------------------------------------------------------------ */
/*  Indonesian dictionary                                              */
/* ------------------------------------------------------------------ */

const id: typeof en = {
  header: { playground: "Playground", tryNow: "Coba Sekarang" },
  hero: {
    badge: "Playground edukasi tentang cara kompresi data bekerja",
    title: "Compression Explorer",
    subtitle:
      "Temukan bagaimana pola berulang dalam teks bisa dikemas menjadi representasi yang lebih ringkas. Lihat Run-Length Encoding beraksi, bandingkan sebelum vs sesudah, dan bangun intuisi untuk kompresi data — semuanya di browser-mu.",
    tryNow: "Coba Sekarang",
    randomExample: "Contoh Acak",
    mono: "AAABBBCCC → A×3 B×3 C×3. Data sama, byte lebih sedikit.",
  },
  features: {
    heading: "Data punya pola. Kompresi menemukannya.",
    subtitle:
      "Setiap data mengandung pengulangan. Algoritma kompresi mendeteksi dan mengkodekan pola-pola ini secara efisien, menghemat ruang tanpa kehilangan informasi.",
    simulation: {
      title: "Simulasi Kompresi",
      formula: "AAAA → A × 4",
      body: "Saksikan teks bertransformasi secara real-time saat Run-Length Encoding mengubah karakter berulang menjadi notasi yang ringkas. Lihat algoritma bekerja langkah demi langkah.",
    },
    comparison: {
      title: "Sebelum vs Sesudah",
      formula: "ukuran_asli → ukuran_terkompresi",
      body: "Bandingkan jumlah byte, jumlah karakter, dan rasio kompresi berdampingan. Lihat persisnya berapa banyak ruang yang kamu hemat dengan setiap contoh.",
    },
    visualization: {
      title: "Blok Visual",
      formula: "pengulangan → kolaps visual",
      body: "Lihat blok-blok animasi yang merepresentasikan setiap grup karakter. Saksikan mereka mengompres dan kolaps saat algoritma memproses teksmu.",
    },
  },
  how: {
    heading: "Cara kerjanya",
    subtitle: "Tiga langkah, sepenuhnya di sisi browser.",
    steps: [
      {
        title: "1. Masukkan teks",
        body: "Ketik teks apa saja atau pilih contoh acak. Coba pola seperti AAAABBBBCC atau kata yang diulang untuk melihat kompresi maksimum.",
      },
      {
        title: "2. Run-Length Encoding",
        body: "Algoritma memindai dari kiri ke kanan, menghitung karakter identik yang berurutan. Sebuah run 5 A menjadi 'A × 5'.",
      },
      {
        title: "3. Analisis hasil",
        body: "Lihat output terkompresi, lihat rasionya, inspeksi pola yang berulang, dan pelajari mengapa data tertentu lebih mudah dikompres.",
      },
    ],
  },
  cta: {
    heading: "Siap melihat bagaimana data menjadi lebih kecil?",
    subtitle:
      "Tanpa daftar, tanpa panggilan server. Hanya kamu, rasa ingin tahumu, dan kesederhanaan elegan dari Run-Length Encoding.",
    button: "Buka Playground",
  },
  playground: {
    title: "Playground",
    subtitle:
      "Ketik teks dan saksikan dikompres secara real-time. Jelajahi sebelum vs sesudah, lihat rasio kompresi, dan pelajari tentang pola data. Semuanya berjalan lokal di browser-mu.",
    intro: {
      title: "Selamat Datang di Compression Explorer",
      body: "Playground ini memungkinkanmu menjelajahi bagaimana Run-Length Encoding (RLE) mengompresi data dengan mendeteksi pola berulang. Coba ketik teks di bawah, atau klik 'Contoh Acak' untuk memulai.",
    },
  },
  textInput: {
    placeholder: "Ketik teks untuk dikompres (misalnya AAAAABBB, hello world)…",
    compress: "Kompres",
    randomExample: "Contoh Acak",
    clear: "Hapus",
  },
  simulation: {
    title: "Simulasi Kompresi",
    subtitle: "Saksikan Run-Length Encoding mengubah teksmu langkah demi langkah.",
    original: "Original",
    compressed: "Terkompresi",
    empty: "Masukkan teks di atas untuk melihat simulasi kompresi.",
  },
  beforeVsAfter: {
    title: "Sebelum vs Sesudah",
    subtitle: "Lihat perbedaan pasti yang dibuat oleh kompresi.",
    originalSize: "Ukuran Original",
    compressedSize: "Ukuran Terkompresi",
    reduction: "Pengurangan",
    charCount: "Karakter",
    byteCount: "Byte",
    empty: "Masukkan teks untuk membandingkan ukuran.",
  },
  ratioMeter: {
    title: "Rasio Kompresi",
    subtitle: "Seberapa efisien datamu dikompres.",
    ratio: "Rasio",
    savings: "Ruang Tersimpan",
    empty: "Masukkan teks untuk melihat rasio kompresi.",
  },
  visualBlocks: {
    title: "Blok Visual",
    subtitle: "Lihat karakter berulang menjadi blok yang kolaps.",
    empty: "Masukkan teks untuk melihat blok animasi.",
  },
  insights: {
    heading: "Tahukah kamu?",
    items: {
      id: [
        "Run-Length Encoding (RLE) adalah salah satu teknik kompresi tertua dan paling sederhana, pertama kali digunakan pada tahun 1950-an.",
        "RLE sangat efektif untuk data dengan pola berulang — seperti gambar bitmap, data sensor, atau teks seperti 'AAAAAAAAAA'.",
        "File BMP dan TIFF sering menggunakan RLE sebagai salah satu metode kompresi bawaannya.",
        "Kompresi lossless (seperti RLE) tidak kehilangan satupun bit data asli — bisa dikembalikan persis seperti semula.",
        "JPEG dan MP3 menggunakan kompresi lossy yang mengorbankan sedikit kualitas untuk kompresi yang jauh lebih besar.",
        "Algoritma kompresi modern seperti DEFLATE (digunakan di ZIP dan PNG) menggabungkan RLE dengan Huffman coding.",
      ],
      en: [
        "Run-Length Encoding (RLE) is one of the oldest and simplest compression techniques, first used in the 1950s.",
        "RLE works extremely well on data with repeating patterns — like bitmap images, sensor data, or text like 'AAAAAAAAAA'.",
        "BMP and TIFF image files often use RLE as one of their built-in compression methods.",
        "Lossless compression (like RLE) loses not a single bit of original data — it can be restored exactly as it was.",
        "JPEG and MP3 use lossy compression that trades a little quality for much greater compression ratios.",
        "Modern compression algorithms like DEFLATE (used in ZIP and PNG) combine RLE with Huffman coding.",
      ],
    },
  },
  share: {
    copyResult: "Salin hasil",
    copied: "Tersalin!",
    shareLink: "Bagikan tautan",
    linkCopied: "Tautan tersalin!",
  },
  footer: {
    tagline: "Compression Explorer — temukan bagaimana data menjadi lebih kecil.",
    home: "Beranda",
    playground: "Playground",
    madeWith: "Dibuat dengan ❤️ oleh",
  },
}

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

export type Dict = typeof en

const DICTS: Record<Locale, Dict> = { en, id }

interface I18nContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Dict
}

const I18nContext = React.createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(DEFAULT_LOCALE)

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === "id" || stored === "en") setLocaleState(stored)
    } catch {
      /* ignore */
    }
  }, [])

  React.useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = locale
  }, [locale])

  const setLocale = React.useCallback((l: Locale) => {
    setLocaleState(l)
    try {
      window.localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  const value = React.useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: DICTS[locale],
    }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = React.useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider")
  return ctx
}
