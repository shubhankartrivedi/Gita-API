'use client';

import Link from "next/link";

export default function GoBack(){
    return (
        <div className="absolute top-0 left-0 px-5 py-5">
           <Link href='/' className="dark:bg-white px-3 py-1 rounded duration-100">
          Go Back
           </Link>
        </div>
    )
}