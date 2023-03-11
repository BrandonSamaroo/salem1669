import { useState, useEffect } from "react";

export const Timer = ({ countdown }: { countdown: number }) => {
    // * State to store the number in the timer
    const [time, setTimer] = useState(countdown);

    // * Run useEffect whenever the time changes
    useEffect(() => {
        // * Update the timer by subtracting 1 every 1000ms
        const interval = setInterval(() => {
            if (time === 0) {
                clearInterval(interval);
                return;
            }

            setTimer((prevState) => prevState - 1);
        }, 1000);

        // * Clear setInterval func when finished updating the timer
        return () => clearInterval(interval);
    }, [time]);

    return <span className='flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl text-onPrim'>{time}</span>;
};
