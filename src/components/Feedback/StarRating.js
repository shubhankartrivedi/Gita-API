'use client'

import { useEffect, useState } from "react";
import ReactStars from 'react-rating-star-with-type'

export default function StarRating() {

    const [star, setStar] = useState(4);
    const [beforeStar, setBeforeStar] = useState(4);
    const [started, setStarted] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [already, setAlready] = useState(false);

    const addFeedback = async () => {

        if (!already) {
            let data = await fetch('/api/utils/feedback', {
                method: 'POST',
                body: JSON.stringify({ star })
            })
            const res = await data.json()
            if (res.success) {
                localStorage.setItem('rating', star);
                setSuccess(true)
                setStarted(false)
                setTimeout(() => {
                    setSuccess(false)
                }, 5000);
            }
        }
        else {
            setError(true)
            setStarted(false)
            setTimeout(() => {
                setError(false)
            }, 5000);
        }

    }

    useEffect(() => {
        const dataString = localStorage.getItem('rating');
        if (dataString) {
            setStar(parseInt(dataString))
            setBeforeStar(parseInt(dataString))
            setAlready(true)
        }
    }, [error])
    
    const onChange = (nextValue) => {

        setStar(nextValue);
        setStarted(true)


    };

    return (
        <div className="flex gap-3 items-center bg-yellow-100 dark:bg-yellow-800/50 pb-2 pt-1 rounded-lg px-3">
            <div className="flex flex-col gap-1 items-center justify-center">
                <span className="text-yellow-800 dark:text-yellow-500 text-sm">Your feedback:</span>
                <ReactStars
                    onChange={onChange}
                    value={star}
                    isEdit={true}
                    size={20}
                    activeColors={["red", "orange", "#FFCE00", "#FFCE00", "#FFCE00",]}
                />
            </div>
            {started && <button onClick={addFeedback} className="text-gray-400 dark:hover:text-gray-200 hover:text-gray-500 animate-fade-in-simple"><i className="fa-solid fa-paper-plane"></i></button>}
            {success &&
                <span className="dark:text-green-300 dark:bg-green-800 text-green-800 bg-green-300 text-sm animate-fade-in-simple  py-1 px-2 rounded-full">Thanks for your feedback</span>
            }
            {error &&
                <span className="dark:text-red-300 dark:bg-red-800 text-red-800 bg-red-300 text-sm py-1 px-2 rounded-full animate-fade-in-simple">You have already given {beforeStar} stars</span>
            }

        </div>
    )
}