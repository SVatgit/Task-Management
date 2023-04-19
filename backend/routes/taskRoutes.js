const express= require("express");
const router=express.Router()
const Task = require("../models/taskModel");
const { createTask, getTask, getTasks, deleteTask, updateTask } = require("../controllers/taskController");


router.get("/", getTasks)         //get all task
router.post("/",createTask)      //create task
router.get("/:id", getTask)         //get a single task
router.delete("/:id", deleteTask)         //delete  task
router.put("/:id", updateTask)         //update  task
    

module.exports=router;