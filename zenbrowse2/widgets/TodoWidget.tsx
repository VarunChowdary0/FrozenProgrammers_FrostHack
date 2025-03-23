import React, { useContext, useState } from 'react'
import TrashIcon from '../icons/TrashIcon'
import AddTaskPopUp from '../PopUps/AddTaskPopUp'
import { Pencil, PenIcon, Target, TicketCheckIcon, TimerIcon, Trash2 } from 'lucide-react';
import { Task, TaskStatus } from '@/types/type';
import EditTaskPopUp from '@/PopUps/EditTaskPopUp';
interface TodoWidgetProps {
    MyTasks : Task[];
    AddTask : React.Dispatch<React.SetStateAction<Task[]>>;
}
const TodoWidget:React.FC<TodoWidgetProps> = (props) => {
    const {MyTasks,AddTask} = props;
    const [showAddPopUp,setPopUp] = useState<boolean>(false);
    const [showEditPopUp,setEditPopUp] = useState<boolean>(false);
    const [currIdx,setcurrIdx] = useState<number>(0);
    
  return (
    <div className=' bg-white w-[350px] h-[200px] relative p-3 pb-1 rounded-md overflow-hidden'>
                    <div className=' overflow-auto h-full py-3 pr-3 pb-12 w-full'>
                        <div className='  snap-y flex 
                        flex-col-reverse gap-3 w-full overflow-y-auto'>
                            {
                                MyTasks
                                    // .filter((x)=>x.status!==TaskStatus.Completed)
                                    .map((ele:Task,idx:number) =>

                                (
                                    ele.status !== TaskStatus.Completed &&
                                <div key={"task-"+idx+1} className=' group snap-center
                                bg-[#2e2d2d] relative p-2 rounded-md max-h-[143px]'>
                                    <pre className=' flex items-start gap-1 overflow-hidden text-wrap
                                     font- text-sm text-white'>
                                        <span>
                                            {ele.status === TaskStatus.RemindLater ?
                                            <TimerIcon className=' text-white w-4'/>
                                            :
                                            (
                                                ele.status === TaskStatus.Pending ?
                                                <Target className=' text-white w-4'/>
                                                :
                                                <TicketCheckIcon className=' text-green-600 w-4'/>
                                            )
                                            // <Target className=' text-white w-4'/>
                                        }
                                        </span>
                                        {
                                            ele.task.length > 165 ?
                                            ele.task.slice(0,165)+" ..." :
                                            ele.task
                                        }
                                    </pre>
                                    <div className='  hover:bg-teal-500 absolute bg-[#2e2d2d] border border-gray-500 
                                    top-1.5 right-2
                                    transition-all group-hover:opacity-100 flex px-2
                                     gap-2 rounded-full justify-around opacity-0 hover:cursor-pointer'>
                                        <div onClick={()=>{
                                            setcurrIdx(idx);
                                            setEditPopUp(true)
                                        }}>
                                            <Pencil className=' w-3.5 active:scale-110 text-white'/>
                                        </div>
                                       
                                    </div>
                                </div>)
                                )
                            }
                            {
                                (MyTasks.length === 0) &&
                                <div className=' h-[80px] w-full flex items-end justify-center'>No Tasks</div>
                            }
                            
                        </div>
                    </div>
                    <div className="w-full b absolute bottom-0 bg-white h-10">
                    </div>
                    <div onClick={()=>setPopUp(true)} className=' hover:cursor-pointer absolute px-2 py-1 text-white
                     rounded-md bg-indigo-600 bottom-1 right-1 w-fit scale-90  active:scale-90 transition-all'>
                        Add task
                    </div>
            {
                showAddPopUp && 
                    <AddTaskPopUp 
                        MyTasks={MyTasks}
                        AddTask={AddTask}
                        setPopUp={setPopUp}
                    />
            }

            {
                showEditPopUp && 
                    <EditTaskPopUp 
                        idx={currIdx}
                        MyTasks={MyTasks}
                        UpdateTasks={AddTask}
                        setPopUp={setEditPopUp}
                    />
            }
    </div>
   
  )
}

export default TodoWidget