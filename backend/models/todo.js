import mongoose, { model } from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        task: {type: String, required: true},
        imageUrl:{type:String, required:true},
        isCompleted:{type:Boolean, default:false}

    },
    {timestamps: true}
)

const Todo = mongoose.model("Todo",todoSchema);
export default Todo;