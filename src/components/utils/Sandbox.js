'use client'
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';


export default function Sandbox() {
  
    return (
        <div className='fixed bottom-0 py-5'>




            <div className='flex justify-center w-full  animate-fade-in-simple'>
                <Link href='/test' className='duration-300 dark:bg-yellow-800/50 hover:dark:bg-yellow-800/90 hover:shadow-lg dark:hover:shadow-yellow-500 bg-yellow-800/50 backdrop-blur hover:shadow-yellow-500 border dark:border-yellow-600 border-yellow-500 rounded-2xl px-3 py-3 w-full flex flex-col gap-2 shadow-xl'>
                   
                <div className=''>
                            <h3 className='text-white font-bold text-xl drop-shadow'>🤖 Try v1 BETA</h3>
                            
                        </div>
                   
                  
            
                </Link>
            </div>
        </div>
    );
}