import "../CSS/TaskManager.css";
import { useState } from "react";
import React from "react";
function TaskManager() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "dummy title",
            description: "dummy description",
            completed: false,
        },
        {
            id: 2,
            title: "dummy title 2",
            description: "dummy description 2",
            completed: true,
        }
    ])
    
    return(
        <div className="taskManager">
            <header>Task Manager</header>

            <div className="taskManager_container">
                
                <button>Add tasks +</button>

                <div className="taskManager_tasks">
                    {tasks.map((task)=>(
                        <div>
                            <p>{task.id}</p>
                            <p>{task.title}</p>
                            <p>{task.description}</p>
                            <p>{String(task.completed)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default TaskManager;