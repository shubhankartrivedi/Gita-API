'use client';

import React, { useState, useEffect } from 'react';
import Dropdown from '../utils/Dropdown';
import ReactLoading from 'react-loading';
import getOperatingSystem from '@/utils/getOS';


const options = [
    { label: 'Get all Chapters info', value: 0 },
    { label: 'Get specific chapter info', value: 1 },
    { label: 'Get all verses info of specific chapter', value: 2 },
    { label: 'Get specific verse info of specific chapter', value: 3}
  ];

export default function Input({setRes, theme}) {
    
    const [loading , setLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [url, setUrl] = useState('/api/v1/chapter');
    const [os, setOs] = useState('');

    const [chapter, setChapter] = useState();
    const [verse, setVerse] = useState();

    const onChapterChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) || e.target.value === '') {
          setChapter(e.target.value);
        }
      };
      
      const onVerseChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) || e.target.value === '') {
          setVerse(e.target.value);
        }
      };
    

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };

      useEffect(() => {
        const resOS = getOperatingSystem();
        setOs(resOS);
      }, []);

    useEffect(() => {

        const value = selectedOption.value;
        if(value){
            if(value == 0){
                setUrl(`/api/v1/chapter`)
            }
            if(value == 1){
                setUrl(`/api/v1/chapter/${chapter}`)
            }
            else if(value == 2){
                setUrl(`/api/v1/chapter/${chapter}/verse`)
            }
            else if(value == 3){
                setUrl(`/api/v1/chapter/${chapter}/verse/${verse}`)
            }
        }
    }, [selectedOption, chapter, verse]);
      
    const handleSend = async () => {
        setLoading(true);
        setRes();
        const res = await fetch(`${url}`);
        const data = await res.json();
        setRes(data);
        setLoading(false);
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
          // Check if Enter is pressed
          if (e.keyCode === 13) {
            // Check if CMD (on MacOS) or CTRL (on Windows/Linux) is pressed
            if (e.metaKey || e.ctrlKey) {
              handleSend();
            }
          }
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        // Cleanup the event listener when the component is unmounted
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, []);
    return (
        <div className='flex flex-col h-full justify-end gap-5 md:pr-5'>
            <div className='flex flex-col h-full gap-5'>
            <h1 className='dark:text-white text-black text-xl'><span className='dark:text-yellow-400 bg-yellow-500 text-yellow-800 dark:bg-yellow-900 shadow-lg shadow-yellow-500 dark:shadow-yellow-900  rounded-full px-1.5 py-1'>v1</span> BETA Testing</h1>
            <div className='flex'>
               
            <Dropdown options={options} onSelect={handleOptionSelect} Selected={selectedOption} />
            </div>
            <div className='flex flex-col gap-2'>
                {
                    selectedOption.value >= 1 && (
                        <input value={chapter} onChange={onChapterChange} type='number' className='w-full px-3 py-1 dark:bg-gray-800 dark:text-gray-400 focus:outline outline-yellow-500 dark:outline-yellow-800 bg-gray-200 text-gray-900 rounded-md text-md' placeholder='Chapter number' />
                    )
                }
                 {
                    selectedOption.value >= 3 && (
                        <input value={verse} onChange={onVerseChange} type='number' className='w-full px-3 py-1 dark:bg-gray-800 dark:text-gray-400 bg-gray-200 text-gray-900 focus:outline outline-yellow-500 dark:outline-yellow-800 rounded-md text-md' placeholder='Verse number' />
                    )
                }
                
             
               
            </div>
           
            </div>

            <div className='flex items-stretch'>
                <span className='px-3 py-1 dark:bg-gray-600 bg-gray-300 dark:text-gray-400 text-gray-500 rounded-l-lg border-r dark:border-gray-600 border-gray-400 flex items-center font-bold'>GET</span>
                <span className='px-3 py-1 dark:bg-gray-500 bg-gray-300 dark:text-gray-100 text-gray-600 rounded-r-lg text w-full'>{url}</span>
            </div>
                <div className='flex flex-col w-full'>
                    <button onClick={handleSend} className='flex animate-fade-in-simple justify-center px-3 py-1 dark:bg-yellow-900 dark:text-yellow-400 dark:hover:bg-yellow-800 bg-yellow-500 text-yellow-800 hover:bg-yellow-400 rounded-md text-md'>
                    {loading?<div className='animate-fade-in-simple '>

                      <ReactLoading type='spin' color={!theme?'#854d0e':'#facc15'} height={30} width={30} /></div>
                      
                      :
                    <div className='flex gap-2'>
                        
                        <div className='flex'>


                        { os == 'MacOS' &&
                        <div className='flex'>
                         <svg className='dark:stroke-yellow-400 stroke-yellow-800 mr-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H9ZM9 9V15M9 9H15M9 15V18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15H9ZM9 15H15M15 15H18C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18V15ZM15 15V9M15 9V6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9H15Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
<div className=''>+ Return</div>
</div>
}
{ os == 'Windows' && 'CTRL + Enter'}
{ os == 'iOS' || os == 'Android' || os == 'Unknown' && 'Send'}
                        </div>
                        
                        </div>}
                    </button>
                </div>
           
        </div>

    )
}