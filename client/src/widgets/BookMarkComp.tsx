import React from 'react'
import CloseIcon from '../icons/CloseIcon';

interface CurrentProps{
    URL : string;
    title : string;
    idx : number;
    
    myApps : Array<{ URL:string,
      title : string,
      useCount : number}>;
    setMyApps:React.Dispatch<React.SetStateAction<Array<{ URL:string,
      title : string,
      useCount : number}>>>;
}
const BookMarkComp:React.FC<CurrentProps> = (props) => {

  const removeItem = (id:number) => {
    props.setMyApps([...props.myApps.slice(0, id), ...props.myApps.slice(id + 1)]);

}

  return (
    <div 
     className=' __Skill__ h-fit w-fit flex flex-col gap-2 relative'>
        <a href={props.URL}  target='_blank'
        className=' h-[70px] w-[70px] bg-white dark:bg-[#2d2b2b]
         rounded-xl flex items-center justify-center'>
           <img className=' w-[40px]' src={`${props.URL}favicon.ico`} alt="NF" /> 
        </a>
        <p className=' max-w-[70px] truncate text-center'>{props.title}</p>
        <div onClick={()=>{removeItem(props.idx)}} className=' opacity-0 hover:cursor-pointer fill-white
         h-4 w-4 hover:opacity-100 absolute top-[-px] right-[-3px] 
        rounded-full bg-[#1d1d1d] backdrop-blur-md flex items-center justify-center'>
          <CloseIcon/>
        </div>
    </div>
  )
}

export default BookMarkComp