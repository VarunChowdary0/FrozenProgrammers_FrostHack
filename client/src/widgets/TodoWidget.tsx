import React, { useState } from 'react'
import TrashIcon from '../icons/TrashIcon'
import PenIcon from '../icons/PenIcon'
import AddTaskPopUp from '../PopUps/AddTaskPopUp'

const TodoWidget:React.FC = () => {
    const [MyTasks,AddTask] = useState<Array<string>>(
        ["Upload PWO lab sheets","Book Train ticket","Mail PPT","Learn SQL"]
        )
    const [showAddPopUp,setPopUp] = useState<boolean>(false);
  return (
    <div className=' max-sm:w-screen min-h-[200px] h-[80%] w-[350px]
              bg-white rounded-md p-2 flex relative flex-col gap-3 max-h-[150px]'>
                    <div className=' max-h-[150px] snap-y flex 
                    flex-col-reverse gap-3 w-full overflow-y-auto'>
                        {
                            MyTasks.map((task,idx)=>
                            <div key={"task-"+idx+1} className=' py-4 max-h-[40px] w-[95%] bg-[#2e2d2d] rounded-md 
                                flex items-center px-3 justify-between snap-center'>
                                <p className=' text-sm text-white'>{task}</p>
                                <div className=' flex w-[50px] justify-around'>
                                    <PenIcon/>
                                    <TrashIcon/>
                                </div>
                            </div>
                            )
                        }
                        
                    </div>
                    <div onClick={()=>setPopUp(true)} className=' absolute px-2 py-1 text-white
                     rounded-md bg-indigo-600 bottom-0 right-0 active:scale-90 transition-all'>
                        Add task
                    </div>
            {showAddPopUp && 
            <AddTaskPopUp 
            MyTasks={MyTasks}
            AddTask={AddTask}
            setPopUp={setPopUp}
        />}
    </div>
   
  )
}

export default TodoWidget