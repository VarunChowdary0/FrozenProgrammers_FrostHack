import React from 'react'
import SearchIcon from '../icons/SearchIcon'
import ClockIcon from '../icons/ClockIcon'

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
            <div onClick={()=>{
              SearchNow(idx);
            }} key={"RecentSearch_"+idx} className=' bg-[#f5f5f5] rounded-lg w-full py-2 
             flex items-center justify-between px-3 snap-center'>
                <p className=' font-thin'>{recent}</p>
                <div className=' fill-black scale-125'>
                    <SearchIcon/>
            </div>
        </div>  
        )
        }   
        </div> 
    </div>
  )
}

export default RecentSearches