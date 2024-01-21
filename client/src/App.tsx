import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Regiter from './Components/Regiter';
import DashBorard from './Components/DashBorard';
import MenuBar from './Components/MenuBar';
import { GlobalContextProvider } from './contexts/GlobalContext';
import LogOutPage from './Components/LogOutPage';
import ProfilePage from './Components/ProfilePage';

const router = createBrowserRouter([
  {
    path : '/',
    element : 
    <DashBorard/>
  },
  {
    path : '/profile',
    element : 
    <ProfilePage/>
  },
  {
    path:'/register',
    element : <Regiter/>
  },{
    path:"/logout",
    element:
    <>
      <LogOutPage/>
    </>
  }
  ,{
    path:"/profile",
    element:
    <>
      <ProfilePage/>
    </>
  }
])
const App:React.FC = () => {
  return (
    <GlobalContextProvider >
      <div className=' select-none max-sm:hidden'>
        <MenuBar/>
        <RouterProvider router={router}/>
      </div>
      <div className=' opacity-0 h-0 scale-0 max-sm:opacity-100
       max-sm:scale-100 max-sm:h-screen w-full flex items-center justify-center'>
          We are Sorry, this is not for Mobiles. 
      </div>
    </GlobalContextProvider>
  )
}

export default App