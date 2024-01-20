import React from 'react'
import Weather from '../widgets/Wether'
import TodoWidget from '../widgets/TodoWidget'
import TimeWidget from '../widgets/TimeWidget'

const DashBorard:React.FC = () => {
  return (
    <div className=' h-screen w-full p-2 bg-[#f4f2f5] overflow-hidden'>
        <div className=' h-fit  bg-red-400/0 overflow-x-auto
        w-full max-sm:w-screen  flex items-center justify-around 
        max-sm:gap-5 '>
            <div className=' max-sm:w-screen h-[80] w-fit bg-white/0  '>
                <div className=' scale-[0.7] '>
                    <Weather/>
                </div>
            </div>
            <div className=' max-sm:w-screen min-h-[200px] h-[80%] w-[350px]
              bg-white rounded-md p-2 flex '>
                  <TodoWidget/>
            </div>
            <div className=' max-sm:w-screen h-[80%] w-fit  '>
                <TimeWidget/>
            </div>
        </div>
    </div>
  )
}

export default DashBorard