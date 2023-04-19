import React from 'react'
import TaskList from './component/TasksList'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const URL= process.env.REACT_APP_SERVER_URL;

const App = () => {
  return (
    <div className='app'>
       <div className="task-container">
        <TaskList/>
       </div>
        <ToastContainer />
    </div>
  )
}

export default App
