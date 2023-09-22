'use client'
import React, { useRef, useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import isEmailValid from '@/utils/checkEmail';

const KEY = '6LdVHUUoAAAAAEDdmCdwq0HWyl4edCtkrj-JLFo2'

export default function Waitlist() {
    const recaptchaRef = useRef();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [error, setError] = useState({show: false, message: ''})
    const [success, setSuccess] = useState(false)

    const [captcha, setCaptcha] = useState(false)
    const [token, setToken] = useState('')

    const onCaptchaChange = (value) => {
        setToken(value)
    }
    const handleSubmit = async () => {
        setError({show: false, message: ''})
        if(!email || !name) {
            return setError({show: true, message: 'Missing name or email'})
        }
        if(!isEmailValid(email)) {
            return setError({show: true, message: 'Invalid email'})
        }
        if(!token) {
            return setError({show: true, message: 'Captcha error, refresh the page.'})
        }

        const res = await fetch('/api/utils/waitlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, token})
        })
        const data = await res.json()
        if(data.error) {
            setError({show: true, message: data.error})
        }
        if(data.success) {
            setSuccess(true)
        }

    };
    

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeEmail = (e) => {
        if(isEmailValid(e.target.value)) {
            recaptchaRef.current.execute();
        }
        setEmail(e.target.value)
    }

    useEffect(() => {
        if(email.length > 0 && name.length > 0) {
            setCaptcha(true)
        }
    }, [email, name])
    return (
        <div className='fixed bottom-0 py-5'>


            <div className={`${captcha?'block animate-fade-in-simple':'hidden'}`}>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={KEY}
                onChange={onCaptchaChange}
                size="invisible"
            />
            </div>


            <div className='flex justify-center w-full  animate-from-left'>
                <div className='dark:bg-black/30 bg-black/20 backdrop-blur border border-white/10 rounded-2xl px-3 py-3 w-full flex flex-col gap-2 shadow-xl'>
                   
                <div className=''>
                            <h3 className='text-white font-bold text-xl drop-shadow'>🚀 Join the Waitlist</h3>
                        </div>
                   
                    <div className='flex gap-1'>
                        
                    <div className='flex flex-col w-full'>
                        <input onChange={onChangeName} className='dark:bg-white/20 bg-white/50 dark:placeholder:text-white/50 placeholder:text-black/30 dark:text-white text-black/80 py-1 px-3 rounded-t-xl border-b border-black/20' type="text" placeholder="Name" />
                        <input onChange={onChangeEmail} className='dark:bg-white/20 bg-white/50 dark:placeholder:text-white/50 placeholder:text-black/30 dark:text-white text-black/80 py-1 px-3 rounded-b-xl' type="email" placeholder="Email" />
                    </div>
                    <button className='text-black bg-yellow-500/90 hover:bg-yellow-500 px-3 rounded-xl' onClick={handleSubmit}>Join Waitlist</button>
                </div>
                <div className=''>
                    <p className={`${error.show?'block':'hidden'} text-red-500 text-sm`}>{error.message}</p>
                    <p className={`${success?'block':'hidden'} text-green-500 text-sm`}>Thanks! You have been added to the waitlist.</p>
                </div>
                </div>
            </div>
        </div>
    );
}