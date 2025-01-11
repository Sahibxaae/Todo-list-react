import './Main.css'
import React, {useState} from 'react'

const Main = () => {
    const [tasks,setTasks] = useState([]);
    const [task,setTask] = useState("");

    const addTask = (e) =>{
        if(task.trim()){
            setTasks([...tasks,{text:task,completed:false}]);
            setTask('');
        }
        console.log(tasks);
    }
    const toggleComplete = (index) =>{
      const newTasks = tasks.map((t,i)=>
        i===index?{...t ,completed:!t.completed}:t);
      setTasks(newTasks);
    }
    const deleteTask = (index)=>{
      tasks.filter((_,i)=>{
        setTasks(tasks.filter((_,i) => i !== index));
      })
    }
  return ( 
    <main>
      <div className='input-area'>
        <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} placeholder="Enter a task"/>
        <button  className="add-btn" onClick={(e)=>addTask(e)}>Add</button>
      </div>
        <ul>
        {tasks.map((t, index) => (
          <li
            key={index}
          >
            <span
              onClick={() => toggleComplete(index)}
            >
              {t.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Main