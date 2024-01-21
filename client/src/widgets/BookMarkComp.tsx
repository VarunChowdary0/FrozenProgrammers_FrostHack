import React from 'react'

interface CurrentProps{
    URL : string;
    title : string;
}
const BookMarkComp:React.FC<CurrentProps> = (props) => {
  return (
    <div className=' h-fit w-fit flex flex-col gap-2'>
        <a href={props.URL}  target='_blank'
        className=' h-[70px] w-[70px] bg-white dark:bg-[#2d2b2b]
         rounded-xl flex items-center justify-center'>
           <img className=' w-[40px]' src={`${props.URL}favicon.ico`} alt="NF" /> 
        </a>
        <p>{props.title}</p>
    </div>
  )
}

export default BookMarkComp