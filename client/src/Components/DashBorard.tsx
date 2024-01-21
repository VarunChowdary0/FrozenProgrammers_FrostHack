import React, {  useContext, useState } from 'react'
import Weather from '../widgets/Wether'
import TodoWidget from '../widgets/TodoWidget'
import TimeWidget from '../widgets/TimeWidget'
import RecentSearches from '../widgets/RecentSearches'
import SearchIcon from '../icons/SearchIcon'
import BookMarkComp from '../widgets/BookMarkComp'
import ArrowIcon from '../icons/ArrowIcon'
import NewsFeed from './NewsFeed'
import { GlobalContext } from '../contexts/GlobalContext'
import AddNewBookMark from '../PopUps/AddNewBookMark'
import AddSync from '../Controllers/AddSync'

const DashBorard:React.FC = () => {
    const {myApps,setMyApps,RecentS,setRecents} = useContext<any>(GlobalContext) 
    console.log(RecentS)
    const [showNewsFeed,setNewsFeed] = useState<boolean>(false);
    const [SearchKey,setSearchKey] = useState<string>("");

    const {SearchEng} = useContext<any>(GlobalContext);
    const SearchNow =()=>{
        if(SearchKey.trim()!==""){
            const lin = `${SearchEng}${encodeURIComponent(SearchKey)}`
            window.open(lin,"_blank");
            setRecents([...RecentS,SearchKey]);
            setSearchKey("");
        }
    }

    const [showNewAddwr,setShow] = useState<boolean>(false);

  return (
    <div className=' h-screen w-full p-2 bg-[#f4f2f5] 
    overflow-hidden flex flex-col'>
        <div className='   bg-red-400/0 overflow-x-auto overflow-y-hidden 
        w-full max-sm:w-screen  flex items-center justify-around  h-[220px]
        max-sm:gap-5 '>
            <div className=' max-sm:w-screen w-fit bg-white/0 mb-7'>
                <div className=' scale-[0.7] '>
                    <Weather/>
                </div>
            </div>
            <div className=' max-sm:w-screen min-h-[200px] h-[80%] w-[350px]
               rounded-md p-2 flex '>
                  <TodoWidget/>
            </div>
            <div className=' max-sm:w-screen w-fit  '>
                <TimeWidget/>
            </div>
            <div className=' w-fit h-fit'>
                <RecentSearches RecentS={RecentS} AddRecent={setRecents} SearchEng={SearchEng}/>
            </div>
        </div>
        <div className=' w-full h-[200px] bg-black/0 flex items-center justify-around gap-5'>
            <div className='w-[500px] h-fit'>
                <img className=''
                 src="https://i.ibb.co/gWTpW9X/Untitled-design-removebg-preview.png" alt="" />
            </div>
            <div className=' h-[100px] flex-1 flex items-center  gap-5'>
                <input 
                onKeyDown={(e)=>{
                    if(e.key === "Enter"){
                        SearchNow();
                    }
                }}
                type="text" placeholder="What's on your mind ?" value={SearchKey}
                onChange={(e)=>{
                    setSearchKey(e.target.value);
                }} 
                className=' py-3 w-[400px] transition-all
                hover:w-[550px] duration-300 focus:w-[550px] rounded-full px-5 outline-none shadow-sm'
                 />
                 <div onClick={SearchNow} className='scale-[2] fill-[#b2b2b2] hover:cursor-pointer'>
                    <SearchIcon/>
                 </div>
            </div>
        </div>
        <div className=' max-h-[30vh] w-full bg-fuchsia-400/0 py-3 flex justify-center'>
            <div className=' w-[80%] h-full flex flex-wrap gap-8 overflow-y-scroll snap-y'>
                {myApps.map((app:any,idx:number)=>
                    <div key={"App_"+idx} className=' snap-start'>
                        <BookMarkComp idx={idx} setMyApps={setMyApps} 
                        myApps={myApps} URL={app.URL} title={app.title}/>
                    </div>
                )}
                <div className=' h-fit w-fit flex flex-col gap-2'>
            <div  onClick={()=>{setShow(true)}}
            className=' h-[70px] w-[70px] bg-white dark:bg-[#2d2b2b]
            rounded-xl flex items-center justify-center text-2xl'>
                +
                    </div>
            </div>
            </div>
        </div>
        
        <div className={`
        ${showNewsFeed?" translate-y-[100vh]":" translate-y-0"} 
        fixed bottom-0 right-0 left-0 transition-all duration-300 
         flex items-center justify-center `}>
            <div onClick={()=>setNewsFeed(true)}
             className=' MyNewser bg-[#292929] w-[60%] rounded-sm
             h-[25px] flex items-center justify-center'>
                <div className=' fill-white '>
                    <ArrowIcon color='white' size={1} angle='90deg'/>
                </div>
            </div>
         </div>
         <div className={`${!showNewsFeed?" translate-y-[100vh]":" translate-y-0"} 
         fixed bottom-0 right-0 left-0 transition-all duration-300`}>
            <NewsFeed setNewsFeed={setNewsFeed}/>
         </div>
         
         {showNewAddwr&&<AddNewBookMark AddApps={setMyApps} AllApps={myApps} setShow={setShow}/>}
         <AddSync/>
    </div>
  )
}

export default DashBorard