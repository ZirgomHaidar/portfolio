import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navbar from "./_components/Navbar/Navbar"

const SpaceGrotesk = Space_Grotesk({
  variable: "--font-Space-Grotesk",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Zirgom's Portfolio",
  description: "Collection of Zirgom's projects",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`mx-4 flex min-h-screen flex-col bg-[#0D0D0D] text-white antialiased xl:mx-10 min-[1700px]:mx-48 ${SpaceGrotesk.className}`}
      >
        <Navbar />
        <div className="mb-14 mt-14 flex-1 lg:mb-20 lg:mt-20 xl:mb-28 xl:mt-28">
          <main className="flex flex-col gap-28">{children}</main>
        </div>
      </body>
    </html>
  )
}
