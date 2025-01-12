import './Main.css'
import React, {useState} from 'react'

const Main = () => {
    const [tasks,setTasks] = useState(["Eat","Sleep","work"]);
    const [newTask,setNewTask] = useState("");

    const handleInputChange = (event)=>{ //textbox input handling
      setNewTask(event.target.value);
    }
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        addTask();
      }
    };
    const addTask = () =>{
      if(newTask.trim() !== ""){
      setTasks(t=>[...t,newTask]);
      setNewTask("");
    }
    }

    const deleteTask = (index) =>{
      const updatedTasks = tasks.filter((_,i)=> i !== index);
      setTasks(updatedTasks);
    }

    // const moveTaskUp = (index) =>{

    // }

    // const moveTaskDown = (index) =>{

    // }
  return ( 
    <main>
      <div className='input-area'>
        <input type="text" placeholder="Enter a task" value={newTask} onChange={(e)=>handleInputChange(e)}  onKeyDown={(e) => handleKeyPress(e)}/> 
        {/* e means event. Here click event is going to happen so we send the parameter to the respective function and we receive through the parameter event and we target the click event value using event.target.value */}
        <button className="add-btn" onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task,index)=>(
          <li key={index}>
            <input type="checkbox" id={index} />
            <label htmlFor={index}>{task}</label>
            <button className='delete-btn' onClick={()=>deleteTask(index)}>delete</button>
            {/* <button className='up-btn'>up</button>
            <button className='down-btn'>down</button> */}
          </li>
        ))}
      </ol>
    </main>
  )
}

export default Main