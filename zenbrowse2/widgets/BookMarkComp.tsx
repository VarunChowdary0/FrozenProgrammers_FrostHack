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
     className='group h-fit w-fit flex flex-col gap-2 relative'>
        <a href={props.URL}  target='_blank'
        className=' group h-[70px] w-[70px] max-sm:h-[60px] max-sm:w-[60px] bg-white 
         rounded-xl flex items-center justify-center'>
           <img className=' w-[40px]' src={`${props.URL}favicon.ico`} alt="NF" /> 
        </a>
        <p className=' max-w-[70px] truncate text-center max-sm:text-xs'>{props.title}</p>
        <div onClick={()=>{removeItem(props.idx)}} 
        className=' opacity-0 group-hover:cursor-pointer fill-white
         h-4 w-4 hover:opacity-100 absolute top-[-px] right-[-3px] 
        rounded-full bg-[#1d1d1d] backdrop-blur-md flex items-center justify-center'>
          <CloseIcon/>
        </div>
    </div>
  )
}

export default BookMarkComp