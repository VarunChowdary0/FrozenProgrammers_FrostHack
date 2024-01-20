import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Regiter from './Components/Regiter';
import DashBorard from './Components/DashBorard';

const router = createBrowserRouter([
  {
    path : '/',
    element : 
    <DashBorard/>
  },
  {
    path:'/register',
    element : <Regiter/>
  }
])
const App:React.FC = () => {
  return (
    <>
      <div className=' select-none max-sm:hidden'>
        <RouterProvider router={router}/>
      </div>
      <div className=' opacity-0 h-0 scale-0 max-sm:opacity-100
       max-sm:scale-100 max-sm:h-screen w-full flex items-center justify-center'>
          We are Sorry, this is not for Mobiles. 
      </div>
    </>
  )
}

export default App