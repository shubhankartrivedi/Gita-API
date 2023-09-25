'use client'
import React, { useState, useEffect} from 'react';
import Input from "@/components/ApiTest/Input"
import Response from "@/components/ApiTest/Response"
import Image from 'next/image';
import Link from 'next/link';

import favicon from '@/app/favicon.ico';

export default function Main(){
    const [res, setRes] = useState();
    const [darkMode, setDarkMode] = useState(false);
    const [darkModeKey, setDarkModeKey] = useState(0);  // added this state

    useEffect(() => {
        setRes();
    }, []);

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleDarkModeChange = (e) => {
            setDarkMode(e.matches);
            setDarkModeKey(prevKey => prevKey + 1); // increment the key every time darkMode changes
        };

        if(darkModeMediaQuery.matches) handleDarkModeChange({ matches: true });

        darkModeMediaQuery.addListener(handleDarkModeChange);

        return () => {
            darkModeMediaQuery.removeListener(handleDarkModeChange);
        };
    }, []);

    return (
        <div className="py-4 px-5 flex flex-col gap-5">
            <h1 className="text-3xl text-right dark:text-white text-black flex w-full justify-end">
               🤖 API Sandbox</h1>
             
            <div className="flex md:flex-row gap-5 flex-col w-full">
                <div className="md:w-1/3">
                    <Input setRes={setRes}/>
                </div>
                <div className="md:w-2/3 h-[88vh]">
                    {res && <Response key={darkModeKey} theme={darkMode} data={res}/>} 
                </div>
            </div>
        </div>
    )
}
