import { count } from "console";
import { useState,useEffect } from "react";
import {createRoot} from 'react-dom/client';

const UseEffect = () => {

    const [message, setMessage] = useState("Waiting...")

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setMessage("Hello after 3 seconds!")
        }, 3000)
    })

    return () => {
        clearTimeout(timer)
    };

  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}

export default UseEffect

