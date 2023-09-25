'use client'
import React, { useState, useEffect} from 'react';
import Input from "@/components/ApiTest/Input"
import Response from "@/components/ApiTest/Response"

export default function Main(){
    const [res, setRes] = useState();
    
    return (
        <div className="py-4 px-5 flex flex-col gap-5">
                <h1 className="text-3xl text-right dark:text-white text-black">Test the API</h1>
                <div className="flex md:flex-row gap-5 flex-col w-full">
                    <div className="md:w-1/3">
                        <Input setRes={setRes}/>
                    </div>
                    <div className="md:w-2/3">
                      <Response data={res}/>
                    </div>
                </div>
            </div>
    )
}