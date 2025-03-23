import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext';

const MenuBar:React.FC = () => {
    const [showMenu,setMenu] = useState<boolean>(false);
    const {isLoggedIn} = useContext<any>(GlobalContext);
    const loc = window.location.pathname;
    useEffect(()=>{
        if(!isLoggedIn && window.location.pathname !== '/register'){
            // window.location.href = "/register"
        }
    })
  return (
    <>
    <div>
       <div className={` ${showMenu?" translate-x-0":" translate-x-[-200vw]"} z-[1000] flex fixed 
       transition-all left-0 top-0 bottom-0 w-full duration-500 `}>
            <div className=' w-[20vw] h-screen 
             pt-[80px] text-white text-2xl gap-12
            bg-[#202020] flex items-center flex-col
            '>
                <a href="/">
                    <p className={`${!(loc==='/')?" opacity-60":""}`}>
                        Home
                    </p>
                </a>
                <a href="/profile">
                <p className={`${!(loc==='/profile')?" opacity-60":""}`}>
                        Profile
                    </p>
                </a>
                <a href="/settings">
                <p className={`${!(loc==='/settings')?" opacity-60":""}`}>
                        Settings
                    </p>
                </a>
                <a href="/settings/customize">
                <p className={`${!(loc==='/settings/customize')?" opacity-60":""}`}>
                        Customize
                    </p>
                </a>
                <a href="/logout">
                <p className={`${!(loc==='/logout')?" opacity-60":""}`}>
                        Log Out
                    </p>
                </a>
            </div>
            <div onClick={()=>{
                setMenu(false);
            }} className=' w-[80vw]  bg-black/0'></div>
        </div>
        <div onClick={()=>{setMenu(true)}} className=' fixed top-5 left-3 px-2 p-1
         rounded-md bg-indigo-600 text-white'>
            menu
        </div>
    </div>
    </>
    )
}

export default MenuBar