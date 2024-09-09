import { useState,useEffect } from "react";

const useCurrentTime = (interval, currentTime) =>{

    const [time, setTime] = useState(currentTime);

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setTime(currentTime)
        },interval);
        return ()=>{
            clearInterval(intervalID)
        }
    },[])

    
    return time;
}


export {useCurrentTime}