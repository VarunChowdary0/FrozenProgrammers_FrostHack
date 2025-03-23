import React, { useRef, useState } from 'react'
import SearchIcon from '../icons/SearchIcon'
import ClockIcon from '../icons/ClockIcon'
import CloseIcon from '../icons/CloseIcon';

interface CurrentProps{
  RecentS:Array<string>;
  AddRecent:React.Dispatch<React.SetStateAction<Array<string>>>;

  SearchEng : String;
}

const ITEMS_PER_PAGE = 4;


const RecentSearches:React.FC<CurrentProps> = (props) => {
  const [displayedItems, setDisplayedItems] = useState<number>(ITEMS_PER_PAGE);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        if (displayedItems < props.RecentS.length) {
          setDisplayedItems(prev => Math.min(prev + ITEMS_PER_PAGE, props.RecentS.length));
        }
      }
    }
  };
  const SearchNow =(idx:number)=>{
        const lin = `${props.SearchEng}${encodeURIComponent(props.RecentS[idx])}`;
        window.open(lin,"_blank");
}
const removeThis = (id:number) =>{
  props.AddRecent([...props.RecentS.slice(0, id), ...props.RecentS.slice(id + 1)]);
}
  return (
    <div 
    ref={containerRef}
    onScroll={handleScroll}
    className=' h-[200px] w-[300px] rounded-md snap-y
     bg-white flex flex-col gap-[10px] overflow-y-auto pt-0'>
        <div className=' z-10 text-xl mb-2 pl-2 font-semibold text-[#302f2f]
         flex items-center gap-4 sticky 
         top-0 left-2 w-full bg-white pt-2'>
            <p>Recents</p>
            <div className=' scale-150'>
                <ClockIcon/>
            </div>
        </div>
       <div className=' flex px-3  flex-col gap-4'>
       {
          props.RecentS.toReversed().slice(0, displayedItems).map((recent, idx) =>
            <div key={"RecentSearch_"+idx}
             className=' __Skill__ bg-[#f5f5f5] z-0 rounded-lg w-full py-2 
             flex items-center justify-between px-3 snap-center relative'>
                <p 
                onClick={()=>{
                  SearchNow(props.RecentS.length - idx - 1);
                }}
                 className=' font-thin w-full truncate'>{recent}</p>
                <div className=' fill-black scale-125'>
                    <SearchIcon/>
            </div>
            <div 
            onClick={()=>{
              removeThis(props.RecentS.length - idx - 1)
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