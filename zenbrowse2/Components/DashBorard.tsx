"use client"

import React, { useEffect, useRef, useState } from 'react'
import Weather from '../widgets/Wether'
import TodoWidget from '../widgets/TodoWidget'
import TimeWidget from '../widgets/TimeWidget'
import RecentSearches from '../widgets/RecentSearches'
import SearchIcon from '../icons/SearchIcon'
import BookMarkComp from '../widgets/BookMarkComp'
import ArrowIcon from '../icons/ArrowIcon'
import NewsFeed from './NewsFeed'
import AddNewBookMark from '../PopUps/AddNewBookMark'
import { Def } from '@/constants'
import { App, Task } from '@/types/type'
import Image from 'next/image'
import Loading from '@/widgets/Loading'
// import AddSync from '../Controllers/AddSync'

const DashBorard:React.FC = () => {

    const input = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        setTimeout(()=>{
            input.current?.focus();
        },700);
    },[]);

    const [isLoaded,setLoaded] = useState<boolean>(false);

    const [myApps,setMyApps] = useState<App[]>(Def);

    const [RecentS,setRecents] = useState<Array<string>>([]);
    const [MyTasks,AddTask] = useState<Array<Task>>([])
    const [showNewsFeed,setNewsFeed] = useState<boolean>(false);
    const [SearchKey,setSearchKey] = useState<string>("");

    const SearchEng = "https://www.google.com/search?q=";
    const SearchNow =()=>{
        if(SearchKey.trim()!==""){
            const lin = `${SearchEng}${encodeURIComponent(SearchKey)}`
            window.open(lin,"_blank");
            setRecents([...RecentS,SearchKey]);
            setSearchKey("");
        }
    }

    const [showNewAddwr,setShow] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("MyPageData");
            console.log(stored)
            if (stored) {
                try {
                    const parsedData = JSON.parse(stored);
                    console.log(parsedData.todos)
                    setMyApps(parsedData.Bookmarks || []);
                    setRecents(parsedData.Recents || []);
                    AddTask(parsedData.todos || []);
                } catch (error) {
                    console.error("Error parsing localStorage data:", error);
                }
            }
            setLoaded(true);
        }
    }, []);

    useEffect(()=>{
        const DATA = {
            todos:MyTasks,
            Recents:RecentS,
            Bookmarks : myApps
        }
        if(isLoaded){
            console.log("Ready to save",DATA);
            localStorage.setItem("MyPageData",JSON.stringify(DATA));
        }
        else{
            console.log("Not Ready to save",DATA);
        }
    },[MyTasks,RecentS,myApps,isLoaded])

    if(!isLoaded){
        return (
        <div className='w-full h-screen flex items-center justify-center'>
            <Loading/>
        </div>
        );
    }

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
                  <TodoWidget
                    MyTasks={MyTasks}
                    AddTask={AddTask}
                  />
            </div>
            <div className=' max-sm:w-screen w-fit  '>
                <TimeWidget/>
            </div>
            <div className=' w-fit h-fit'>
                <RecentSearches RecentS={RecentS} AddRecent={setRecents} SearchEng={SearchEng}/>
            </div>
        </div>
        <div className=' select-none w-full h-[200px] bg-black/0 flex items-center justify-around gap-5'>
            <div className='w-[500px] h-fit'>
                <Image
                width={1000}
                height={1000}
                 className=''
                 src="https://i.ibb.co/gWTpW9X/Untitled-design-removebg-preview.png" alt="" />
            </div>
            <div className=' h-[100px] flex-1 flex items-center  gap-5'>
                <input 
                ref={input}
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
                hover:w-[550px] duration-300 focus:w-[550px]
                 bg-white rounded-full px-5 outline-none shadow-xs'
                 />
                 <div onClick={SearchNow} className='scale-[2] fill-[#b2b2b2] hover:cursor-pointer'>
                    <SearchIcon/>
                 </div>
            </div>
        </div>
        <div className=' max-h-[30vh] w-full bg-fuchsia-400/0 py-3 flex justify-center'>
            <div className=' w-[82%] pr-1 h-full flex flex-wrap gap-8 overflow-y-scroll snap-y'>
                {myApps.map((app:{
                    URL : string,
                    title : string,
                    useCount : number
                },idx:number)=>
                    <div key={"App_"+idx} className=' snap-start'>
                        <BookMarkComp idx={idx} setMyApps={setMyApps} 
                        myApps={myApps} URL={app.URL} title={app.title}/>
                    </div>
                )}
                <div className=' h-fit w-fit flex flex-col gap-2'>
            <div  onClick={()=>{setShow(true)}}
            className=' h-[70px] w-[70px] bg-white 
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
         {/* <AddSync/> */}
    </div>
  )
}

export default DashBorard