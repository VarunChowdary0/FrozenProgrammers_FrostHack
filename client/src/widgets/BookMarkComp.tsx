import React from 'react'

interface CurrentProps{
    URL : string;
    title : string;
}
const BookMarkComp:React.FC<CurrentProps> = (props) => {
  return (
    <div 
     className=' __Skill__ h-fit w-fit flex flex-col gap-2 relative'>
        <a href={props.URL}  target='_blank'
        className=' h-[70px] w-[70px] bg-white dark:bg-[#2d2b2b]
         rounded-xl flex items-center justify-center'>
           <img className=' w-[40px]' src={`${props.URL}favicon.ico`} alt="NF" /> 
        </a>
        <p className=' max-w-[70px] truncate'>{props.title}</p>
        <div className='__Remove__ hover:cursor-pointer
         h-3 w-3 absolute top-[-px] right-[-3px] 
        rounded-full bg-red-600'></div>
    </div>
  )
}

export default BookMarkComp