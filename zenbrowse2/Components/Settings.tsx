"use client"

import React, { useEffect, useState } from 'react'

const Settings: React.FC = () => {
  const SEs = 
    ["https://www.bing.com/search?q=","https://www.google.com/search?q="
    ,"https://in.search.yahoo.com/search?p","https://www.info.com/serp?q=$"
    ,"https://duckduckgo.com/?q=$"]
      

    console.log(SEs)
  const [SearchEng,setEr] =  useState<number>();
  useEffect(()=>{
    const er = localStorage.getItem('SE');
    const index = er ? JSON.parse(er) : 1; // Default to Google (index 1) if no value
    setEr(index);
  },[])
  const ae = ["Bing","Google","Yahoo","Info Search","Duckduck.go"]
  return (
      <div className='flex flex-col mt-[5rem] ml-[10rem] border-1 w-fit px-[2rem] py-[3rem] shadow-lg rounded-lg'>  
        <div className='search-engine-container flex'>
          <label className='text-2xl mr-[1.5rem]' htmlFor="">Choose Your Search Engine:</label>
          <select className='text-2xl px-3 py-1 rounded-full mr-5'
          onChange={(e)=>
            {
              localStorage.setItem('SE',JSON.stringify(e.target.value));
              setEr(Number(e.target.value));
            }}
           name="search-engine" defaultValue={SearchEng}>
            <option value={0}>Bing</option>
            <option value={1}>Google</option>
            <option value={2}>Yahoo</option>
            <option value={3}>Info Search</option>
            <option value={4}>Duckduck.go</option>
          </select>
          <div className='flex'>
            <label className='text-2xl mr-[1.5rem]' htmlFor="">Current Search Engine </label>
            <p className='px-3 py-3 bg-teal-500 text-white rounded-full '>{SearchEng ? ae[SearchEng] : "Loading..."}</p>
          </div>
        </div> 
      </div>
  )
}

export default Settings