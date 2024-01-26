const mongoose= require('mongoose')

const taskSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'please add a task']
        }, 
    },
    {
        timestamps:true
    }
)

const Task = mongoose.model('Tasks',taskSchema)
module.exports=Task 