import React, { useEffect, useState } from 'react'

const TimeWidget:React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];
    const weekdays = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
      ];
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000); 
  
      return () => clearInterval(intervalId);
    }, []);
  return (
    <div className=' h-[200px] w-[250px] bg-white rounded-md
     flex items-center justify-center flex-col gap-1 pt-5'>
        <div>
            <p className=' text-[#4f4d4d] text-[42px] '>
                {`
                ${(currentTime.getHours()<10 && (currentTime.getHours()%12)!==0)?"0":""}${(currentTime.getHours()%12)===0?"12":currentTime.getHours()%12}:${(currentTime.getMinutes()<10)?"0":""}${currentTime.getMinutes()}:${(currentTime.getSeconds()<10)?"0":""}${currentTime.getSeconds()} ${!(currentTime.getHours()>12)?"AM":"PM"}`}
            </p>
        </div>
        <div>
            <p className=' text-2xl font-light'>
                {`${weekdays[currentTime.getDay()]}, ${months[currentTime.getMonth()].substring(0,3)} ${currentTime.getFullYear()} ${currentTime.getDate()}`}
                </p>
        </div>
    </div>
  )
}

export default TimeWidget