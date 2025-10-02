import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"


export const metadata: Metadata = {
  title: "Souza & Son's Tree Service | Professional Tree Care in Jacksonville",
  description:
    "Expert tree removal, trimming, and land clearing services in Jacksonville Beach, Fernandina Beach, and Mandarin. Family-owned, licensed, and insured.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
