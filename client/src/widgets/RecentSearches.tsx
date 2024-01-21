import React from 'react'
import SearchIcon from '../icons/SearchIcon'
import ClockIcon from '../icons/ClockIcon'
import CloseIcon from '../icons/CloseIcon';

interface CurrentProps{
  RecentS:Array<string>;
  AddRecent:React.Dispatch<React.SetStateAction<Array<string>>>;

  SearchEng : String;
}
const RecentSearches:React.FC<CurrentProps> = (props) => {
  const SearchNow =(idx:number)=>{
        const lin = `${props.SearchEng}${encodeURIComponent(props.RecentS[idx])}`;
        window.open(lin,"_blank");
}
const removeThis = (id:number) =>{
  props.AddRecent([...props.RecentS.slice(0, id), ...props.RecentS.slice(id + 1)]);
}
console.log(props.RecentS);
  return (
    <div className=' h-[200px] w-[300px] rounded-md snap-y
     bg-white p-3 flex flex-col gap-[10px] overflow-y-auto pt-0'>
        <div className=' text-xl mb-2 pl-2 font-semibold text-[#302f2f]
         flex items-center gap-4 sticky 
          z-20
         top-0 left-2 w-full bg-white pt-2'>
            <p>Recents</p>
            <div className=' scale-150'>
                <ClockIcon/>
            </div>
        </div>
       <div className=' flex  flex-col-reverse gap-4'>
       {
            props.RecentS.map((recent,idx)=>
            <div key={"RecentSearch_"+idx}
             className=' __Skill__ bg-[#f5f5f5] rounded-lg w-full py-2 
             flex items-center justify-between px-3 snap-center relative'>
                <p 
                onClick={()=>{
                  SearchNow(idx);
                }}
                 className=' font-thin w-full'>{recent}</p>
                <div className=' fill-black scale-125'>
                    <SearchIcon/>
            </div>
            <div 
            onClick={()=>{
              removeThis(idx)
            }}
            className=' absolute top-[-3px] rounded-full fill-white
            __Remove__ right-0 h-3 w-3 bg-[#1b1b1b] flex items-center justify-center'>
              <CloseIcon/>
            </div>
        </div>  
        )
        }   
        </div> 
    </div>
  )
}

export default RecentSearches