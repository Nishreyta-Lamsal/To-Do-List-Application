import React, {useState} from 'react';
import './TodoList.css'; 

function ToDoList(){

    const[tasks, setTasks] = useState(["Wash dishes", "Clean room", "Meditate", "Clean the sheets"]);
    const[newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }

    function addTask(){
        //if after trimmming, the text area is not an empty string, move further
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("");
        } else{
            alert("Add a task!!")
        }

    }

    function removeTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){

        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);

        }

    }

    function moveTaskDown(index){

        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);

        }
        
    }

    return(

    <div className="to-do-list">
        <h1> To-Do-List</h1>
        <div className='add-container'>
        <input type="text" placeholder="Enter a task..."
         value={newTask}
         onChange={handleInputChange}/>

         <button className='add-button' onClick={addTask}> Add</button>
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}> 
                    <span className="text"> {task}</span> 
                        <button className='delete-button' 
                        onClick={() => removeTask(index)}>
                            Delete
                        </button>

                        <button className='up-button' 
                        onClick={() => moveTaskUp(index)}>
                            Up
                        </button>

                        <button className='down-button' 
                        onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                </li>

            )}

        </ol>

    </div>);
}
export default ToDoList