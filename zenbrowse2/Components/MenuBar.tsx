"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const MenuBar:React.FC = () => {
    const [showMenu,setMenu] = useState<boolean>(false);
    const loc = usePathname();
    
  return (
    <>
    <div>
       <div className={` ${showMenu?" translate-x-0":" translate-x-[-200vw]"} z-[1000] flex fixed 
       transition-all left-0 top-0 bottom-0 w-full duration-500 `}>
            <div className=' w-[20vw] h-screen 
             pt-[80px] text-white text-2xl gap-12
            bg-[#202020] flex items-center flex-col
            '>
                <Link href="/">
                    <p className={`${!(loc==='/')?" opacity-60":""}`}>
                        Home
                    </p>
                </Link>
                <Link href="/settings">
                <p className={`${!(loc==='/settings')?" opacity-60":""}`}>
                        Settings
                    </p>
                </Link>
                <Link href="/settings/customize">
                <p className={`${!(loc==='/settings/customize')?" opacity-60":""}`}>
                        Customize
                    </p>
                </Link>
            </div>
            <div onClick={()=>{
                setMenu(false);
            }} className=' w-[80vw]  bg-black/0'></div>
        </div>
        <div onClick={()=>{setMenu(true)}} className=' hover:cursor-pointer fixed 
         maxs-sm:top3
        top-5 left-3 px-2 p-1
         rounded-md bg-indigo-600 text-white'>
            menu
        </div>
    </div>
    </>
    )
}

export default MenuBar