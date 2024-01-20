import React from 'react'
import Weather from '../widgets/Wether'

const DashBorard:React.FC = () => {
  return (
    <div className=' h-screen w-full p-2 bg-[#f4f2f5]'>
        <div className=' h-[250px] w-full bg-black/0 flex items-center justify-around'>
            <div className=' scale-[0.65] h-[80%] w-[250px]  mb-[75px] '>
                <Weather/>
            </div>
            <div className=' h-[80%] w-[350px] bg-white rounded-md p-2 flex '>
                <div className=' h-[40px] w-full bg-[#2e2d2d] rounded-md 
                flex items-center pl-3'>
                    <p className=' text-sm text-white'>Upload PWO lab sheets</p>
                </div>    
            </div>
            <div className=' h-[80%] w-[250px] bg-red-500/10 '>
                Time Widget
            </div>
        </div>
    </div>
  )
}

export default DashBorard