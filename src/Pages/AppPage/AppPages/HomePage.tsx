import { useEffect, useState } from "react"
import { ObjectType } from "typescript"
interface TaskType {
    key: number,
    progress?: number,
    tasks?:{
        task1?: string
        task2?: string
        task3?: string
        task4?: string
        task5?: string
    },
    title?: string,
    deadLine?: string,
    finished?: boolean,
}
const HomePage = () => {
    
    const profileImageUrl = require('../../../Assets/Images/icons8-test-account-50.png')
    const [tasks, setTasks] = useState<Array<TaskType>>([{key:1,progress: 0, title:"cleaning", tasks:{task1: "clean windows"}, deadLine: '21/7/2023', finished: false}])
    const [newTask, setNewTask] = useState<TaskType>({key:2,progress:1, title:"workflow"})
    useEffect(()=>{
        setTasks([...tasks, newTask])
    },[])
    
    console.log(tasks)
    return(
        <>
            <div className="appContent">
                <h1>Hi, guest!</h1>
                <img src={profileImageUrl} alt=''/>
                <h5>Have a good day!</h5>
                <h3>My tasks</h3>
                <div className="tasksContainer">
                    {tasks? tasks.map(({key, title})=> <div className="activeTasks" key={key}>{title}</div>) : null}
                    <div className="activeTasks newTask"><p>new</p><div className="circle"><button>+</button></div></div>
                </div>
            </div>

        </>
    )
}

export default HomePage