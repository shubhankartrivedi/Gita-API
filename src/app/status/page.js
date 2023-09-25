import getStatus from "@/components/getStatus";
import StarRating from "@/components/Feedback/StarRating";
 
export async function generateMetadata() {
    let data = await getStatus();
    const statusText = data.statusText;
    const ping = data.ping;
    const image = 'https://gita.shubhankartrivedi.com/images/meta.png'
    return {
            title: statusText,
            description: `API Ping: ${ping}ms`,
            url: 'https://gita.shubhankartrivedi.com/status',
            siteName: 'Bhagavad Gita API',
            themeColor: [
              { media: '(prefers-color-scheme: light)', color: ping == 0? '#C80000' : '#008000' },
              { media: '(prefers-color-scheme: dark)', color: ping == 0? '#C80000' : '#008000' },
            ],
        openGraph: {
            title: statusText,
            description: `API Ping: ${ping}ms`,
            url: 'https://gita.shubhankartrivedi.com/status',
            siteName: 'Bhagavad Gita API',
            themeColor: [
              { media: '(prefers-color-scheme: light)', color: ping == 0? '#C80000' : '#008000' },
              { media: '(prefers-color-scheme: dark)', color: ping == 0? '#C80000' : '#008000' },
            ],
          images: [
            {
                url: image,
                width: 200,
                height: 200,
              },
          ],
        },
        twitter: {
            title: statusText,
            description: `API Ping: ${ping}ms`,
            url: 'https://gita.shubhankartrivedi.com/status',
            siteName: 'Bhagavad Gita API',
            themeColor: [
              { media: '(prefers-color-scheme: light)', color: ping == 0? '#C80000' : '#008000' },
              { media: '(prefers-color-scheme: dark)', color: ping == 0? '#C80000' : '#008000' },
            ],
          images: [
            {
              url: image,
              width: 200,
              height: 200,
            },
          ],
        },
      }
}

export default async function Status(){
  let data = await getStatus();
    const statusText = data.statusText;
    const ping = data.ping;
    return(
        <div className="flex flex-col items-center justify-center py-24 px-5 gap-10">
            <h1 className="text-9xl dark:text-white text-black">Gita API Status</h1>
            <div className="text-3xl dark:text-white text-black">{statusText}</div>
            <div className="text-3xl dark:text-white text-black">API Ping: {ping}ms</div>
            {/* <StarRating /> */}
        </div>
    )

}