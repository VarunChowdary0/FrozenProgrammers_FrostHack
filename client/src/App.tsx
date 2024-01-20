import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Regiter from './Components/Regiter';

const router = createBrowserRouter([
  {
    path : '/',
    element : 
    <div className=' h-screen w-full flex 
    items-center justify-center'>Home</div>
  },
  {
    path:'/register',
    element : <Regiter/>
  }
])
const App:React.FC = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App