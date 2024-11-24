import {useState, useEffect} from 'react';

interface CountdownProps {
    endDate: Date;
}

function Countdown({ endDate }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft(endDate));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [endDate]);

    return (
        <div>
            {timeLeft.days > 0 && (
                <>
                    {timeLeft.days}d {timeLeft.hours}h
                </>
            )}
            {timeLeft.days <= 0 && timeLeft.hours > 0 && (
                <>
                    {timeLeft.hours}h {timeLeft.minutes}m
                </>
            )}
            {timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes > 0 && (
                <>
                    {timeLeft.minutes}m {timeLeft.seconds}s
                </>
            )}
            {timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds > 0 && (
                <>
                    {timeLeft.seconds}s
                </>
            )}
            {timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0 && (
                <span>Auction ended</span>
            )}
            
        </div>
    );
}

function calculateTimeLeft(endDate: Date) {
    const difference = new Date(endDate).getTime() - new Date().getTime();
    if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };
}

export default Countdown;
