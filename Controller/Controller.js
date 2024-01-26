// const Task = require("../Model/Taskmodel");
const Task=require('../Model/Taskmodel')

//POST METHOD

const createTask =(async(req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
       res.status(500).json({msg:error.message}) 
    }
})

const getAllTask =(async(req,res)=>{
    try {
        const task = await Task.find()
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error.message}) 
    }
})
// const getAllTask =(async(req,res)=>{
//     try {
//         const task = await Task.find()
//         res.status(200).json(task)
//     } catch (error) {
//         res.error(500).json({msg:error.message})
//     }
// })
const deleteTaskById =(async(req,res) =>{
    try {  
    const {id} =req.params 
    const task = await Task.findByIdAndDelete(id) 
    if (!task) {
        return res.status(404).json(`no user with that id ${id}`)
    }  
    res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
})
module.exports={createTask,getAllTask,deleteTaskById}