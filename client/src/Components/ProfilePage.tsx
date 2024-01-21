import React from 'react'

const ProfilePage:React.FC = () => {
  return (
    <div className=''>
      <div className=' flex space-x-56'>
        <div className=' w-[29rem] flex relative border-1 shadow-lg mt-[3rem] rounded-lg pb-10 ml-[10rem]'>
          <img className='rounded-full mt-14 ml-5 w-[5rem] h-[5rem] border-2 border-black' src="https://randomuser.me/api/portraits/men/91.jpg" alt="" />
          <div className='flex flex-col'>
            <div className='Name flex w-[20rem] flex-row absolute '>
              <p className='mt-12 ml-[2rem] text-xl font-semibold text-blue-700'>Name:</p>
              <p className='mt-12 ml-[1rem] text-xl'>John albert</p>
            </div>
            <div className='Email flex absolute top-10'>
              <p className='mt-12 ml-[2rem] text-xl font-semibold text-blue-700'>Email:</p>
              <p className='mt-12 ml-[1rem] text-xl'>johnalbert88@gmail.com</p>
            </div>
            <div className='flex mt-[5rem]'>
              <p className='mt-12 ml-[2rem] text-xl font-semibold text-blue-700'>User-ID:</p>
              <p className='mt-12 ml-[1rem] text-xl'>8106034959</p>
            </div>
          </div>
        </div>
      
      </div>

      <div className='grid grid-cols-12 mt-10 pl-[5rem]'>
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
      </div>
    </div>

  )
}

export default ProfilePage