import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ThailandBlacklistLawyer - Specialist in Blacklist Removal & Visa Appeals',
  description: 'Expert legal services for blacklist removal and visa appeals in Thailand. 20+ years experience. Bilingual service (Thai-English-Chinese).',
  keywords: 'blacklist removal, visa appeal, Thailand lawyer, immigration lawyer, visa lawyer, blacklist lawyer',
  authors: [{ name: 'Dr. Sutus Kumvilai' }],
  openGraph: {
    title: 'ThailandBlacklistLawyer - Specialist in Blacklist Removal & Visa Appeals',
    description: 'Expert legal services for blacklist removal and visa appeals in Thailand. 20+ years experience.',
    type: 'website',
    locale: 'th_TH',
    alternateLocale: ['en_US', 'zh_CN'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}