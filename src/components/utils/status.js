'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Status(){
    const [status, setStatus] = useState('Loading...');
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        fetch('/api/utils/status',{
            method: 'GET',
            next: { tags: ['status'] }
        }).then(res => res.json())
        .then(data => {
            let s = `${data.statusText} - ${data.ping}ms`
            setStatus(s)

        })
    }, [refresh])
    const onMouseEnter = () => {
        setRefresh(!refresh)
    }
    const onMouseLeave = () => {
    }
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="sm:block hidden dark:bg-white/10 dark:text-white/40 hover:dark:bg-white/20 hover:dark:text-white bg-gray-200 hover:bg-gray-300 text-gray-500 px-3 py-1 rounded duration-100">
       {status}
        </div>
    )
}