import React from 'react'

interface CurrentProps{
    setNewsFeed:React.Dispatch<React.SetStateAction<boolean>>;
}
const NewsFeed:React.FC<CurrentProps> = (props) => {
  return (
    <div className=' h-screen z-[1000] w-full'>
        <div onClick={()=>props.setNewsFeed(false)} className='h-[40%] bg-white/0 w-full'></div>
        <div className=' h-[60%]  overscroll-y-auto bg-[#242424] rounded-xl backdrop-blur-sm'>
            <p className=' text-white text-2xl px-3 py-2 sticky top-0 '>
              Hot news
            </p>
            <div className=' h-fit w-full bg-blue-800'>
              {/* <div className=' relative bg-black'>
                <TradingViewWidget/>
              </div> */}
            </div>
        </div>
    </div>
  )
}

export default NewsFeed