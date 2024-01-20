import React, { useState } from 'react'

interface CurrentProps{
    MyTasks:Array<string>;
    AddTask:React.Dispatch<React.SetStateAction<Array<string>>>;

    setPopUp : React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTaskPopUp:React.FC<CurrentProps> = (props) => {
    const [NewTask,setNewTask] = useState<string>("");
    const closePopup = () =>{
        props.setPopUp(false);
    }
    const handleSave = () => {
        props.AddTask([...props.MyTasks,NewTask]);
        setNewTask("")
        closePopup();
    }
  return (
    <>
        <div onClick={closePopup} className='fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm
         bg-black/30'>
        </div>
        <div className=' fixed left-0 right-0 
    oh-fit wp-fit flex items-center justify-center mt-[10vh]
         max-sm:w-[90%]' >
            <div className=' w-fit bg-white px-3 py-10 rounded-md'>
            <div className=' px-4 pb-6 text-sm text-[#6c6c6c]'>Add </div>
            <div className=' flex relative'>
                <input onKeyDown={(e)=>{
                    if(e.key=="Enter"){
                        handleSave();
                    }
                }} placeholder='My Task'
                onChange={(e)=>{setNewTask(e.target.value)}} 
                className='w-[400px] px-4 outline-none' type="text" value={NewTask}/>
                {
                    <abbr title="click to save">
                        <div onClick={handleSave} className={`${(NewTask.trim() !== "") ?
                            "bg-black" : "bg-[#69696938]"} p-2 rounded-full absolute right-0`}>
                            {/* <CheckIcon/> */}
                        </div>
                    </abbr>  
                }
            </div>
            </div>
        </div>
    </>
  )
}
 
export default AddTaskPopUp