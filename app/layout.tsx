import type { Metadata } from "next"
import { Barlow, Barlow_Condensed, Share_Tech_Mono } from "next/font/google"

import "./globals.css"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-heading",
})

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Arclight Engineering Inc. — Electrical Power & Lighting Design",
  description:
    "Irvine-based electrical engineering consulting firm specializing in power systems and lighting design for commercial, educational, and private owners across Southern California.",
  keywords: [
    "electrical engineering",
    "lighting design",
    "power systems",
    "Southern California",
    "Irvine",
    "PE",
    "arc flash",
    "EV infrastructure",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${shareTechMono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  )
}
