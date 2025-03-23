import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import axios from 'axios';

const server = "http://localhost:1800/";

const AddSync:React.FC = () => {
    const {myApps,USER_UID,email,password,MyTasks,RecentS,name
    } = useContext<any>(GlobalContext);

    useEffect(()=>{
        const DATA = {
            USER_UID : USER_UID,
            email : email,
            name ,
            password:password,
            todos:MyTasks,
            Recents:RecentS,
            Bookmarks : myApps
        }
        console.log(DATA);
        localStorage.setItem("MyPageData",JSON.stringify(DATA));
        axios.post(server+"update",{
            USER_UID,
            DATA
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[MyTasks,RecentS,myApps])
     return(null)
}

export default AddSync