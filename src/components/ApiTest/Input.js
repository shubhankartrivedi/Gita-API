'use client';

import React, { useState, useEffect } from 'react';
import Dropdown from '../utils/Dropdown';

const options = [
    { label: 'Get all Chapters info', value: 0 },
    { label: 'Get specific chapter info', value: 1 },
    { label: 'Get all verses info of specific chapter', value: 2 },
    { label: 'Get specific verse info of specific chapter', value: 3}
  ];

export default function Input({setRes}) {
    
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [url, setUrl] = useState('/api/v1/chapter');

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
        setRes();
        const res = await fetch(`${url}`);
        const data = await res.json();
        setRes(data);
    }
    return (
        <div className='flex flex-col h-full justify-end gap-5 md:pr-5'>
            <div className='flex flex-col h-full gap-5'>
            <h1 className='dark:text-white text-black text-xl'>v1 BETA Testing</h1>
            <div className='flex'>
               
            <Dropdown options={options} onSelect={handleOptionSelect} Selected={selectedOption} />
            </div>
            <div className='flex flex-col gap-2'>
                {
                    selectedOption.value >= 1 && (
                        <input value={chapter} onChange={onChapterChange} type='number' className='w-full px-3 py-1 dark:bg-gray-800 dark:text-gray-400 bg-gray-300 text-gray-900 rounded-md text-md' placeholder='Chapter number' />
                    )
                }
                 {
                    selectedOption.value >= 3 && (
                        <input value={verse} onChange={onVerseChange} type='number' className='w-full px-3 py-1 dark:bg-gray-800 dark:text-gray-400 bg-gray-300 text-gray-900 rounded-md text-md' placeholder='Verse number' />
                    )
                }
                
             
               
            </div>
           
            </div>

            <div className='flex items-stretch'>
                <span className='px-3 py-1 dark:bg-gray-600 bg-gray-300 dark:text-gray-400 text-gray-500 rounded-l-lg border-r dark:border-gray-600 border-gray-400 flex items-center font-bold'>GET</span>
                <span className='px-3 py-1 dark:bg-gray-500 bg-gray-300 dark:text-gray-100 text-gray-600 rounded-r-lg text w-full'>{url}</span>
            </div>
                <div className='flex flex-col w-full'>
                    <button onClick={handleSend} className='px-3 py-1 dark:bg-yellow-900 dark:text-yellow-400 dark:hover:bg-yellow-800 bg-yellow-500 text-yellow-800 hover:bg-yellow-400 rounded-md text-md'>Send</button>
                </div>
           
        </div>

    )
}