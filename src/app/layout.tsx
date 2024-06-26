import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import Script from 'next/script';
import type { Metadata, Viewport } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFBD33' },
    { media: '(prefers-color-scheme: dark)', color: '#713E11' },
  ],
}

export const metadata: Metadata = {


   

  title: 'The Bhagavad Gita API',
  description: 'The Bhagavad Gita API is a REST API that serves the Bhagavad Gita verse by verse in JSON format.',
keywords: ['bhagavad', 'gita', 'gita api', 'bhagavad gita'],
  metadataBase: new URL('https://gita.shubhankartrivedi.com'),
  openGraph: {
    title: 'The Bhagavad Gita API',
    description: 'The Bhagavad Gita API is a REST API that serves the Bhagavad Gita verse by verse in JSON format.',
    url: 'https://gita.shubhankartrivedi.com',
    siteName: 'Gita API',
    images: [
      {
        url: 'https://gita.shubhankartrivedi.com/images/meta.png',
        width: 800,
        height: 800,
      },
    ],
    // locale: 'en_US',
    type: 'website',
    // publishedTime: blog.timestamp,
  },
  twitter: {
    title: 'The Bhagavad Gita API',
    description: 'The Bhagavad Gita API is a REST API that serves the Bhagavad Gita verse by verse in JSON format.',
    card: 'summary_large_image',
    images: [
      {
        url: 'https://gita.shubhankartrivedi.com/images/meta.png',
        width: 800,
        height: 800,
      },
    ],
    
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/83dd3f2548.js"></Script>
      <body className={`${inter.className} dark:bg-black bg-white`}>
        {children}
      <Analytics />
      </body>
    </html>
  )
}
