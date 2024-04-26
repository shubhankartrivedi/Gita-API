'use client'
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';


export default function Sandbox() {
  
    return (
        <div className='flex flex-col gap-3 fixed bottom-0 py-5'>

<div className='flex justify-center w-full  animate-fade-in-simple'>
                <Link href='https://github.com/shubhankartrivedi/GitaMac' className='duration-300 dark:bg-yellow-800/50 hover:dark:bg-yellow-800/90 hover:shadow-lg dark:hover:shadow-yellow-500 bg-yellow-800/50 backdrop-blur hover:shadow-yellow-500 border dark:border-yellow-600 border-yellow-500 rounded-2xl px-3 py-3 w-full flex flex-col gap-2 shadow-xl'>
                   
                <div className='flex items-center gap-2'>
                            <h3 className='text-white font-bold text-xl drop-shadow'><i className="fa-brands fa-apple"></i> macOS App
                            </h3>
                            <span className='px-3 py-1 bg-yellow-400/80 dark:bg-yellow-700/80 border border-yellow-400 dark:border-yellow-600 rounded-full text-xs text-yellow-800 dark:text-yellow-400'>
                                pre-release
                            </span>
                        </div>
                   
                  
            
                </Link>
            </div>


            <div className='flex justify-center w-full  animate-fade-in-simple'>
                <Link href='/test' className='duration-300 dark:bg-yellow-800/50 hover:dark:bg-yellow-800/90 hover:shadow-lg dark:hover:shadow-yellow-500 bg-yellow-800/50 backdrop-blur hover:shadow-yellow-500 border dark:border-yellow-600 border-yellow-500 rounded-2xl px-3 py-3 w-full flex flex-col gap-2 shadow-xl'>
                   
                <div className=''>
                            <h3 className='text-white font-bold text-xl drop-shadow'>🤖 Web API Sandbox</h3>
                            
                        </div>
                   
                  
            
                </Link>
            </div>
        </div>
    );
}