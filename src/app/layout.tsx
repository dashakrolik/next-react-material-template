import "./globals.css"
import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import Providers from "./providers"

const rubik = Rubik({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js boilerplate",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
