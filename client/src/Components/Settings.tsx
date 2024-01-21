import React from 'react'

const Settings: React.FC = () => {
  return (
    <body>
      <div className='flex flex-col mt-[5rem] ml-[10rem] border border-1 w-fit px-[2rem] py-[3rem] shadow-lg rounded-lg'>
        
        <div className='search-engine-container flex'>
          <label className='text-2xl mr-[1.5rem]' htmlFor="">Choose Your Search Engine:</label>
          <select className='text-2xl px-3 py-1 rounded-full mr-5' name="search-engine" id="">
            <option value="1">Duckduck.go</option>
            <option value="2">Google</option>
            <option value="3">Bing</option>
            <option value="4">Yahoo</option>
          </select>
          <div className='flex'>
            <label className='text-2xl mr-[1.5rem]' htmlFor="">Current Search Engine </label>
            <p className='px-4 text-2xl mr-[1.5rem] transition-all cursor-pointer duration-200 bg-gray-300 opacity-70 rounded-full justify-center '>Duckduck.go</p>
          </div>
        </div>
        <div className='icon-style'></div>
        <div className='custom-home mt-[1.5rem]'>
          <label htmlFor="" className='text-2xl mr-5'>Set this as Custom Home</label>
          <a className='text-2xl hover:text-blue-500 transition-all duration-200' href="#">See How?</a>
        </div>
      </div>
    </body>

  )
}

export default Settings