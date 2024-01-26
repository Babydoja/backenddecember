const express=require('express')
const Task = require('../Model/Taskmodel')
// const { createTask } = require('../Controller/Controller')
const {createTask, getAllTask, deleteTaskById}=require('../Controller/Controller')
const router=express.Router()

//post method 
router.post('/api/tasks',createTask)
router.get('/api/tasks',getAllTask)
router.delete('/api/tasks/:id',deleteTaskById)


module.exports=router
