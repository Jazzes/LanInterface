import React, {useEffect, useState} from 'react';

const CurrentTime = () => {
    const [time, setTime] = useState('')

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            setTime(formattedTime)
        }
        const timerId = setInterval(updateTime, 1000)
        updateTime()
        return () => clearInterval(timerId)
    }, [])

    return (
        <>{time}</>
    )
};

export default CurrentTime;