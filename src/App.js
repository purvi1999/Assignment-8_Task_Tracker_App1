
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import { useState, useEffect } from "react"
import Header from './component/Header.js'
import Tasks from './component/Tasks.js'
import Add_task from './component/Add_task.js'
import Footer from './component/Footer.js'
import About from './component/About.js'
function App() {
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const getTask = async () => {
      const TaskFromServer = await fetchTask()
      setTasks(TaskFromServer)
    }
    getTask()
  }, [])

  //Fetch Data
  const fetchTask = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }


  const fetchTasks = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }
  //Add task -
  const add_task = async (task) => {
    console.log(task)
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
    // const id=MAth.floor(Math.random()*10000)+1
    // const newTask={id,...task}
    // setTasks([...tasks,newTask])
    // console.log(task);
  }

  //delete task -
  const delete_task = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    await setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder 
  const toggle = async (id) => {
    const taskToToggle = await fetchTasks(id)
    const updateTask = {
      ...taskToToggle, reminder: !taskToToggle.reminder
    }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task));

  }


  return (
    //<div className="container" style={{color:'red'}}>
    <Router>
      <div className="container">

        <Header
          onAdd={() => setShowTask(!showTask)}
          showAddTask={showTask} />


       
        <Routes>
          <Route path="/" element={

            <>
              {showTask && <Add_task add_task={add_task} />}

              {tasks.length > 0 ? <Tasks
                tasks={tasks}
                onDelete={delete_task}
                onToggle={toggle} /> : <p>No Task Avaiable</p>}
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  )
}

export default App;
