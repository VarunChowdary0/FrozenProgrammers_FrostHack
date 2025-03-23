import { Task, TaskStatus } from '@/types/type';
import { CheckIcon, TargetIcon, Trash2 } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

interface CurrentProps{
    MyTasks:Task[];
    UpdateTasks:React.Dispatch<React.SetStateAction<Task[]>>;
    idx : number;
    setPopUp : React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTaskPopUp:React.FC<CurrentProps> = (props) => {
    const [CurrentTask,setCurrentTask] = useState<Task>(props.MyTasks[props.idx]);
    const remove = (id:number) => {
        props.UpdateTasks([...props.MyTasks.slice(0, id), ...props.MyTasks.slice(id + 1)]);
    }

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
        props.UpdateTasks(
            [
                ...props.MyTasks.slice(0,props.idx),
                CurrentTask,
                ...props.MyTasks.slice(props.idx+1)
            ]
        );
        closePopup();
    }


    useEffect(()=>{
        if(CurrentTask.status === TaskStatus.Pending && CurrentTask.reminder !== ""){
            setCurrentTask({
                ...CurrentTask,
                reminder : ""
            })
        }
        console.log(CurrentTask);
    },[CurrentTask])
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
                    onChange={(e)=>
                        {
                            setCurrentTask(
                                {
                                    ...CurrentTask,
                                    task:e.target.value
                                }
                            )}
                        } 
                    style={{
                        height : CurrentTask.task.length/2 + 50
                    }}
                    className=' border rounded-md py-2 w-[400px] px-4 outline-none'
                    value={CurrentTask.task}
                />

                <select value={CurrentTask.status} className=' border outline-none rounded-md 
                px-2 py-1 w-[200px]' onChange={(e)=>{
                    setCurrentTask(
                        {
                            ...CurrentTask,
                            status:e.target.value as TaskStatus
                        }
                    )
                }}>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>


                <div className=' flex gap-4'>
                    <div className=' flex gap-1'>
                        <input type='radio' id='radio_sts'
                        defaultChecked 
                        name='ststs' value={TaskStatus.Pending}
                        onChange={(e)=>{
                            setCurrentTask(
                                {
                                    ...CurrentTask,
                                    status:TaskStatus.Pending
                                }
                            )}
                        }/>
                        <label htmlFor="radio_sts">Pending task</label>
                    </div>
                    <div className=' flex gap-1'>
                        <input type='radio' id='radio_rm' 
                        name='ststs' value={TaskStatus.RemindLater}
                        onChange={(e)=>{setCurrentTask({...CurrentTask,status:TaskStatus.RemindLater})}}/>
                        <label htmlFor="radio_rm">Reminder ?</label>
                    </div>
                </div>

                {CurrentTask.status === TaskStatus.RemindLater &&
                    <div className=' border rounded-md px-2 py-1 w-[230px]'>
                        <input type="datetime-local" onChange={(e)=>{
                            setCurrentTask(
                                {
                                    ...CurrentTask,
                                    reminder:e.target.value
                                }
                            )
                        }}/>
                    </div>
                }
              
            </div>
            <abbr title="click to save">
                <div onClick={handleSave} className={`${(CurrentTask.task.trim() !== "") ?
                    "bg-black text-white" : " text-gray-600 bg-[#69696938]"} p-1
                        rounded-full absolute right-2 bottom-2`}>
                    <CheckIcon size={20}/>
                </div>
            </abbr> 
            <div className=' absolute top-2 right-3 hover:bg-red-500
             transition-all hover:cursor-pointer bg-orange-400 py-0.5 px-2 rounded-full' onClick={()=>remove(props.idx)}>
                    <Trash2 className=' w-3.5 active:scale-110 text-white'/>
            </div>
            </div>
        </div>
    </>
  )
}
 
export default EditTaskPopUp;