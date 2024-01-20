import React from 'react'
import Weather from '../widgets/Wether'
import PenIcon from '../icons/PenIcon'
import TrashIcon from '../icons/TrashIcon'

const DashBorard:React.FC = () => {
  return (
    <div className=' h-screen w-full p-2 bg-[#f4f2f5] overflow-hidden'>
        <div className=' overflow-x-auto h-[250px] min-w-[300px] bg-red-400
        w-full max-sm:w-fit  bg-black/0 flex items-center justify-around 
        max-sm:gap-5'>
            <div className=' h-[80%] w-[250px]  mb-[114px] '>
                <div className=' scale-[0.65] max-md:scale-[0.5] '>
                    <Weather/>
                </div>
            </div>
            <div className=' h-[80%] w-[350px] bg-white rounded-md p-2 flex '>
                <div className=' h-[40px] w-full bg-[#2e2d2d] rounded-md 
                flex items-center px-3 justify-between'>
                    <p className=' text-sm text-white'>Upload PWO lab sheets</p>
                    <div className=' flex w-[50px] justify-around'>
                        <PenIcon/>
                        <TrashIcon/>
                    </div>
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