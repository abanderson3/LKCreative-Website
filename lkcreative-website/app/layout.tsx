import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lora, Josefin_Sans } from 'next/font/google'
import Navbar from './lib/components/Navbar'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
})

const josefine = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefine',
})

export const metadata: Metadata = {
  title: 'LKCreative',
  description: 'Social media marketing and web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${josefine.variable} font-lora`}>
        < Navbar />
        {children}
      </body>
    </html>
  )
}
