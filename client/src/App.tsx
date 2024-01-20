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
    <RouterProvider router={router}/>
  )
}

export default App