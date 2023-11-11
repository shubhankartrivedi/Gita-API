import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'The Bhagavad Gita API',
  description: 'The Bhagavad Gita API is a REST API that serves the Bhagavad Gita verse by verse in JSON format.',
  keywords: ['bhagavad', 'gita', 'gita api', 'bhagavad gita'],

  themeColor: {
    light: '#FFBD33',
    dark: '#713E11',
  },

  // Note: The 'colorScheme' property is no longer needed as 'themeColor' can handle this.
  // Note: 'publishedTime' should be dynamically generated if needed.

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
        alt: 'The Bhagavad Gita API', // Include 'alt' text for images
      },
    ],
    type: 'website',
    // 'locale' and 'publishedTime' can be added if relevant
  },

  twitter: {
    title: 'The Bhagavad Gita API',
    description: 'The Bhagavad Gita API is a REST API that serves the Bhagavad Gita verse by verse in JSON format.',
    url: 'https://gita.shubhankartrivedi.com',
    siteName: 'Gita API',
    images: [
      {
        url: 'https://gita.shubhankartrivedi.com/images/meta.png',
        width: 800,
        height: 800,
        alt: 'The Bhagavad Gita API', // Include 'alt' text for images
      },
    ],
    type: 'website',
    // 'locale' and 'publishedTime' can be added if relevant
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
