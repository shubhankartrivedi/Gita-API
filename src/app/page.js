import Image from "next/image"
import { Yellowtail } from "next/font/google"


import Krishna from './images/gita.png'

const yellowtail = Yellowtail({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
})

export default function Home() {
  return (
    <div className="flex flex-col sm:px-10 px-5 pt-5 gap-10 w-full">


      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="mt-10 lg:text-9xl sm:text-8xl text-7xl dark:text-white text-white drop-shadow-xl">Bhagavad Gita API</h1>
        <p className="dark:text-gray-300 text-gray-100 drop-shadow-xl">The Bhagavad Gita API is a REST API that serves the Bhagavad Gita verse by verse in JSON format.</p>
      </div>

      <div className="flex justify-center relative">
         
        <div className="max-w-md relative">
        <Image
          className="absolute scale-[200%]  blur-3xl animate-fade-in -z-10"
          src={Krishna}
          alt="Shri Krishna and Arjuna Background Blur"
        />
        <Image
          className="rounded-3xl shadow-2xl border border-white/10"
          src={Krishna}
          alt="Shri Krishna and Arjuna"
        />
         <p className={`${yellowtail.className} absolute dark:text-white text-white sm:text-6xl text-5xl sm:bottom-0 sm:top-[90%] top-0 right-0 translate-x-5 -translate-y-2 sm:translate-x-10 sm:-rotate-[16deg] rotate-[16deg] drop-shadow animate-pop-in`}>coming soon!</p>
        </div>
       
      </div>


    </div>
  )
}
