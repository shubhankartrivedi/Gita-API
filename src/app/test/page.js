import GoBack from "@/components/GoBack"

import Main from "@/components/ApiTest/Main"


export const metadata = {

  
   

    title: 'API Sandbox',
    description: 'The Bhagavad Gita API is a REST API that serves the Bhagavad Gita verse by verse in JSON format.',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#FFBD33' },
      { media: '(prefers-color-scheme: dark)', color: '#713E11' },
    ],
  keywords: ['bhagavad', 'gita', 'gita api', 'bhagavad gita'],
   // colorScheme: 'dark',
   // publishedTime: blog.timestamp,
    openGraph: {
      title: 'API Sandbox',
      description: 'The Bhagavad Gita API is a REST API that serves the Bhagavad Gita verse by verse in JSON format.',
      url: 'https://gita.shubhankartrivedi.com/test',
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
      title: 'API Sandbox',
      description: 'The Bhagavad Gita API is a REST API that serves the Bhagavad Gita verse by verse in JSON format.',
      url: 'https://gita.shubhankartrivedi.com/test',
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

export default function Test(){
    
    return (
        <div>
            <GoBack />
            <Main />
        </div>
    )
}