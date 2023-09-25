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
        setStatus('Check API Status')
    }
    const onMouseLeave = () => {
        setRefresh(!refresh)
    }
    return (
        <Link onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} href='/status' target='_blank' className="sm:block hidden dark:bg-white/10 dark:text-white/40 hover:dark:bg-white/20 hover:dark:text-white px-3 py-1 rounded duration-100">
        { status == 'Check API Status' && <i className="fa-solid fa-up-right-from-square mr-1"></i>} {status}
        </Link>
    )
}