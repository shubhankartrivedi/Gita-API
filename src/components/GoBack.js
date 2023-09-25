import Link from "next/link";
import Status from "./utils/status";

export default function GoBack(){
    
    return (
        <div className="absolute top-0 left-0 px-5 py-5 flex gap-2">
           <Link href='/' className="md:block hidden dark:bg-white/10 dark:text-white/40 hover:dark:bg-white/20 hover:dark:text-white px-3 py-1 rounded duration-100">
           <i className="fa-solid fa-chevron-left mr-1"></i> Go Back
           </Link>
            <Status />
           <Link href='https://github.com/shubhankartrivedi/Gita-API' target='_blank' className="dark:bg-white/10 dark:text-white/40 hover:dark:bg-white/20 hover:dark:text-white px-3 py-1 rounded duration-100">
           <i className="fa-brands fa-github mr-1"></i> Github
           </Link>
        </div>
    )
}