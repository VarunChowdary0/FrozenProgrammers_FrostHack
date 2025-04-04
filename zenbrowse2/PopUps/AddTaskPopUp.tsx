import { Task, TaskStatus } from '@/types/type';
import { CheckIcon, TargetIcon } from 'lucide-react';
import React, { use, useEffect, useRef, useState } from 'react'

interface CurrentProps{
    MyTasks:Task[];
    AddTask:React.Dispatch<React.SetStateAction<Task[]>>;

    setPopUp : React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTaskPopUp:React.FC<CurrentProps> = (props) => {
    const [NewTask,setNewTask] = useState<Task>({
        task : "",
        date : new Date().toDateString(),
        reminder : "Pending",
        status  : TaskStatus.Pending
    });


    const input = useRef<HTMLTextAreaElement>(null);
    useEffect(()=>{
        input.current?.focus();
    },[])
    useEffect(() => {
        const handleEscapeKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closePopup();
            }
        };

        document.addEventListener("keydown", handleEscapeKey);
        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, []);

    const closePopup = () =>{
        props.setPopUp(false);
    }
    const handleSave = () => {
        props.AddTask([...props.MyTasks,NewTask]);
        setNewTask({
            task : "",
            date : new Date().toDateString(),
            reminder : "Pending",
            status  : TaskStatus.Pending
        })
        closePopup();
    }


    useEffect(()=>{
        if(NewTask.status === TaskStatus.Pending && NewTask.reminder !== ""){
            setNewTask({
                ...NewTask,
                reminder : ""
            })
        }
        console.log(NewTask);
    },[NewTask])
  return (
    <>
        <div onClick={closePopup} className='fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm
         bg-black/30 z-[1000]'>
        </div>
        <div className=' fixed left-0 right-0 
    oh-fit wp-fit flex items-center justify-center mt-[0vh]
         max-sm:w-[90%] z-[1001]' >
            <div className=' w-fit bg-white px-3 relative pb-15 py-10 rounded-md'>
            <div className=' flex gap-3 items-center  px-2 pb-6 text-lg text-[#6c6c6c]'>
                <TargetIcon/>    
                Add a new task
            </div>
            <div className=' flex relative flex-col gap-3 items-start'>
                <textarea ref={input} placeholder='My Task'
                    style={{
                        height : NewTask.task.length/2 + 50
                    }}
                    onChange={(e)=>
                        {
                            setNewTask(
                                {
                                    ...NewTask,
                                    task:e.target.value
                                }
                            )}
                        } 
                    className=' border rounded-md py-2 w-[400px] px-4 outline-none'
                    value={NewTask.task}
                />

                {/* <select value={NewTask.status} className=' border outline-none rounded-md 
                px-2 py-1 w-[200px]'>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="RemindLater">Remind Later</option>
                </select> */}
                <div className=' flex gap-4'>
                    <div className=' flex gap-1'>
                        <input type='radio' id='radio_sts'
                        defaultChecked 
                        name='ststs' value={TaskStatus.Pending}
                        onChange={(e)=>{
                            setNewTask(
                                {
                                    ...NewTask,
                                    status:TaskStatus.Pending
                                }
                            )}
                        }/>
                        <label htmlFor="radio_sts">Pending task</label>
                    </div>
                    <div className=' flex gap-1'>
                        <input type='radio' id='radio_rm' 
                        name='ststs' value={TaskStatus.RemindLater}
                        onChange={(e)=>{setNewTask({...NewTask,status:TaskStatus.RemindLater})}}/>
                        <label htmlFor="radio_rm">Reminder ?</label>
                    </div>
                </div>

                {NewTask.status === TaskStatus.RemindLater &&
                    <div className=' border rounded-md px-2 py-1 w-[230px]'>
                        <input type="datetime-local" onChange={(e)=>{
                            setNewTask(
                                {
                                    ...NewTask,
                                    reminder:e.target.value
                                }
                            )
                        }}/>
                    </div>
                }
              
            </div>
            <abbr title="click to save">
                <div onClick={handleSave} className={`${(NewTask.task.trim() !== "") ?
                    "bg-black text-white" : " text-gray-600 bg-[#69696938]"} p-1
                        rounded-full absolute right-2 bottom-2`}>
                    <CheckIcon size={20}/>
                </div>
            </abbr>  
            </div>
        </div>
    </>
  )
}
 
export default AddTaskPopUp