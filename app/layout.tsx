import type { Metadata } from "next"
import { Barlow, Barlow_Condensed, Share_Tech_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

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
  metadataBase: new URL("https://arclight-eng.com"),
  title: "Arclight Engineering Inc. | Electrical Power & Lighting Design",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Arclight Engineering Inc.",
    description:
      "Electrical power and lighting design for Southern California commercial and institutional projects.",
    url: "/",
    siteName: "Arclight Engineering",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arclight Engineering logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arclight Engineering Inc.",
    description:
      "Electrical power and lighting design for Southern California commercial and institutional projects.",
    images: ["/og-image.png"],
  },
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
      <body>
        <ThemeProvider>
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
