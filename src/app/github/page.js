import Link from "next/link";
export async function generateMetadata() {
    let data = await fetch('https://jsonlink.io/api/extract?url='+'https://github.com/shubhankartrivedi/Gita-API')
    data = await data.json()
    const title = data.title
    const description = data.description
    const image = data.images[0]
    const url = data.url
    return {
        title: 'Gita API - Github',
            description: description,
            url: url,
            themeColor: '#000',
            siteName: 'Gita API - Github',
        openGraph: {
            title: 'Gita API - Github',
            description: description,
            url: url,
            siteName: 'Gita API - Github',
          images: [
            {
                url: image,
                width: 1200,
                height: 600,
              },
          ],
        },
        twitter: {
            title: 'Gita API - Github',
          description: description,
          url: url,
          siteName: 'Gita API - Github',
          images: [
            {
              url: image,
              width: 1200,
              height: 600,
            },
          ],
        },
      }
}

export default async function Github() {
    
    return (
        <Link className="text-9xl flex dark:text-white text-black" href='https://github.com/shubhankartrivedi/Gita-API'>
            <h1 className="bg-gray-500 py-2 px-5 rounded-lg">Open Github</h1>
        </Link>
    )
}