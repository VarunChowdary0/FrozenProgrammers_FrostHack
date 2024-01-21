import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const AddSync:React.FC = () => {
    const {myApps,USER_UID,email,password,MyTasks,RecentS
    } = useContext<any>(GlobalContext);

    useEffect(()=>{
        const DATA = {
            USER_UID : USER_UID,
            email : email,
            password:password,
            todos:MyTasks,
            Recents:RecentS,
            Bookmarks : myApps
        }
        console.log(DATA);
        localStorage.setItem("MyPageData",JSON.stringify(DATA));
    },[MyTasks,RecentS,myApps])
     return(null)
}

export default AddSync