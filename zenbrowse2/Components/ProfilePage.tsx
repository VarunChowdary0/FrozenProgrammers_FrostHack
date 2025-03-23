import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const ProfilePage:React.FC = () => {
  const {email,name,USER_UID} = useContext<any>(GlobalContext);
  return (
    <div className=' h-screen w-full flex items-center justify-center'>
      <div className=' flex space-x-56'>
        <div className=' w-fit flex relative px-5 border border-1 shadow-lg rounded-lg pb-10 '>
          <img className='rounded-full mt-14 ml-5 w-[5rem] h-[5rem] border-2
           border-black' src="
data:image/png;base64,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
" alt="" />
          <div className='flex flex-col'>
            <div className='Name flex w-[20rem] flex-row absolute '>
              <p className='mt-12 ml-[2rem] text-xl font-semibold text-blue-700'>Name:</p>
              <p className='mt-12 ml-[1rem] text-xl'>{name}</p>
            </div>
            <div className='Email flex absolute top-10'>
              <p className='mt-12 ml-[2rem] text-xl font-semibold text-blue-700'>Email:</p>
              <p className='mt-12 ml-[1rem] text-xl'>{email}</p>
            </div>
            <div className='flex mt-[5rem]'>
              <p className='mt-12 ml-[2rem] text-xl font-semibold text-blue-700'>User-ID:</p>
              <p className='mt-12 ml-[1rem] text-xl'>{USER_UID}</p>
            </div>
          </div>
        </div>
      
      </div>

      {/* <div className='grid grid-cols-12 mt-10 pl-[5rem]'>
        <div className='ml-[5rem] col-span-6 rounded-lg shadow-lg w-[20rem] h-[20rem]'>
          <h1 className='text-xl mt-5 ml-[6rem] opacity-60'>Bookmarks</h1>
          <div className='flex pl-10 py-2 mt-5 space-x-10 border-2 border-dark_bg_primary'>
            <div>App</div>
            <div>App Name</div>
            <div>count</div>
          </div>
          <ul>
            <li></li>
          </ul>
        </div>

        <div className='col-span-3'>

          
        </div>

        <div className='col-span-3'>

        </div>
      </div> */}
    </div>

  )
}

export default ProfilePage