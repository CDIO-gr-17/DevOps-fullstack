import {useState, useEffect} from 'react';

interface CountdownProps {
    endDate: Date;
    countType: string;
}

function Countdown({ endDate, countType }: CountdownProps) {
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
            <span>{timeLeft.days}d {timeLeft.hours}h</span>
            )}
            {timeLeft.days <= 0 && timeLeft.hours > 0 && (
            <span>{timeLeft.hours}h {timeLeft.minutes}m</span>
            )}
            {timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes > 0 && (
            <span>{timeLeft.minutes}m {timeLeft.seconds}s</span>
            )}
            {timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds > 0 && (
            <span>{timeLeft.seconds}s</span>
            )}
            {timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0 && (
            <span>{countType === "stop" ? "Auction ended" : "Auction live!"}</span>
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
