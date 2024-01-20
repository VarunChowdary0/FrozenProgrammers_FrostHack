import React from 'react'
import TrashIcon from '../icons/TrashIcon'
import PenIcon from '../icons/PenIcon'

const TodoWidget:React.FC = () => {
  return (
    <div className=' h-[40px] w-full bg-[#2e2d2d] rounded-md 
    flex items-center px-3 justify-between'>
        <p className=' text-sm text-white'>Upload PWO lab sheets</p>
        <div className=' flex w-[50px] justify-around'>
            <PenIcon/>
            <TrashIcon/>
        </div>
    </div>
  )
}

export default TodoWidget