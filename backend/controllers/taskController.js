// const { get } = require("mongoose");
const Task = require("../models/taskModel");
// create a task
const createTask= async(req,res)=>{
    try {
        const task=await Task.create(req.body)
        res.status(200).json(task);
    
    
     } catch (error) {
        res.status(500).json({msg:error.message}) 
     }
}
// get all task
const getTasks= async(req,res)=>{
    try {
        const tasks= await Task.find();
        res.status(200).json(tasks);    
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
const getTask= async(req,res)=>{
    try {
        const{id}=req.params;
        const task=await Task.findById(id);
        if(!task)
        {
            return res.status(404).json(`NO Task with id ${id}`);
        }
        res.status(200).json(task);
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
const deleteTask= async(req,res)=>{
    try {
        const{id}=req.params;
        const task=await Task.findByIdAndDelete(id);
        if(!task)
        {
            return res.status(404).json(`NO Task with id ${id}`);
        }
        res.status(200).json(task);
        
    } catch (error) {
        res.status(500).send("Task Deleted")
    }
}
// update task
const updateTask= async(req,res)=>{
    try {
        const{id}=req.params;
        const task=await Task.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true});
        if(!task)
        {
            return res.status(404).json(`NO Task with id ${id}`);
        }
        res.status(200).json(task);
        
    } catch (error) {
        res.status(500).send("Task Deleted")
    }
}


module.exports={
    createTask:createTask,
    getTasks:getTasks,
    getTask:getTask,
    deleteTask:deleteTask,
    updateTask:updateTask

}