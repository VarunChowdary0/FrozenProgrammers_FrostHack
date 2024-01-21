import React, { useState } from 'react'
interface CurrentProps{
    setShow : React.Dispatch<React.SetStateAction<boolean>>;
    AllApps : Array<{ URL:string,
        title : string,
        useCount : number}>;
    AddApps : React.Dispatch<React.SetStateAction<Array<{ 
        URL:string,
        title : string,
        useCount : number}
        >>>;
}
const AddNewBookMark:React.FC<CurrentProps> = (props) => {
    const [link,setLink] = useState<string>("");
    const [title,setTitle] = useState<string>("");
    const handleSubmmit = () =>{
        if(link.trim()!==""){
            if(title.trim()!==""){
                const obj = {
                    URL : link,
                    title : title,
                    useCount : 0
                } 
                props.AddApps(prevApps => [...prevApps, obj]);
                setLink("");
                setTitle("");            }
        }
    }
   
  return (
    <div>
        <div className=' fixed top-0 bottom-0 right-0 left-0
         bg-black/10 backdrop-blur-sm ' onClick={()=>props.setShow(false)}></div>
         <div className=' fixed left-0 right-0 top-[18vh]  flex  justify-center '>
            <div className=' h-[300px] w-[400px] bg-white flex items-center
             justify-center rounded-md shadow-lg px-[70px] flex-col '>
                <p className=' sticky top-0 py-2 text-2xl w-fit text-start'>
                    New Bookmark
                </p>
                <form className="space-y-6 w-full "  method="POST">
                <div>
                    <label  className="block text-sm font-medium
                     leading-6 text-gray-900">Page URL</label>
                    <div className="mt-2">
                    <input id="url" name="name" type="text"  value={link}
                    onChange={(e)=>{
                        setLink(e.target.value);
                    }}
                    required className="block w-full rounded-md border-0 py-1.5
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                        px-3
                        focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>
                    <div>
                        <label  className="block text-sm font-medium
                         leading-6 text-gray-900">Title</label>
                        <div className="mt-2">
                        <input id="email" name="email" type="email"  value={title}
                        onChange={(e)=>{
                            setTitle(e.target.value);
                        }}
                        required className="block w-full rounded-md border-0 py-1.5
                            text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                            px-3
                            focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>


                    <div>
                        <div  onClick={handleSubmmit} className="flex w-full justify-center rounded-md bg-indigo-600
                        py-1.5 text-sm font-semibold leading-6 text-white shadow-sm px-3
                        hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                        focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submmit</div>
                    </div>
                </form>
            </div>
         </div>
    </div>
  )
}

export default AddNewBookMark