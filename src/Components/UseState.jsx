import React from "react";
import { useState, useEffect } from 'react'


const UseState = () => {
    const [message, setMessage] = useState("Waiting...")

       useEffect(()=>{
        const timer = setTimeout(()=>{
            setMessage("Hello after 3 seconds!")
        }, 3000);
    

    return () => {
        clearTimeout(timer)
    }
    }, []);

  return (
    <div>{message}</div>
  )
}

export default UseState



 