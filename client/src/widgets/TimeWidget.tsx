import React, { useEffect, useState } from 'react'

const TimeWidget:React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const mnaths  = []
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000); 
  
      return () => clearInterval(intervalId);
    }, []);
  return (
    <div className=' h-[200px] w-[300px] bg-white
     flex items-center justify-center flex-col gap-6'>
        <div>
            <p className=' text-dark_bg_primary text-5xl'>{currentTime.getDay()}</p>
        </div>
        <div>
            <p className=' text-2xl'>Saturday, Jan {currentTime.getFullYear()} {currentTime.getDate()}</p>
        </div>
    </div>
  )
}

export default TimeWidget