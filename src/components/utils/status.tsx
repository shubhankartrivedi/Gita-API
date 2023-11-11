
'use client';

import { useState, useEffect } from 'react';
import checkPing from './checkPing';

export default function Status() {
    const [status, setStatus] = useState('Loading...');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        checkPing().then((res) => {
            setStatus(res);
            setLoading(false);
        });
    }, []);

    return (
        <div className={`sm:block hidden dark:bg-white/10 dark:text-white/40 hover:dark:bg-white/20 hover:dark:text-white bg-gray-200 hover:bg-gray-300 text-gray-500 px-3 py-1 rounded duration-100`}>
           <span className={loading && 'animate-pulse'}>{status}</span>
        </div>
    );
}