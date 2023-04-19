import React from 'react'

const TasksForm = ({updateTask,isEditing, createTask,name,handleInputChange }) => {
  return (
    <form className='task-form' onSubmit={isEditing? updateTask:createTask}> 
        <input type='text' placeholder='Add a task' name ="name" value={name} onChange={handleInputChange}/>
     <button type='submit'>{isEditing?"Edit":"Add"}</button>
    </form>
  )
}

export default TasksForm
