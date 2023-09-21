import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })


export const metadata = {

  
   

  title: 'The Bhagavad Gita API',
  description: 'The Bhagavad Gita API is a REST API that serves the Bhagavad Gita verse by verse in JSON format.',
keywords: ['bhagavad', 'gita', 'gita api', 'bhagavad gita'],
 // colorScheme: 'dark',
 // publishedTime: blog.timestamp,
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black bg-white`}>
        {children}
      <Analytics />
      </body>
    </html>
  )
}
