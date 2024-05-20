const { response } = require("express");
const Todo = require("../models/Todo");

exports.GetTodo = async (req, res) => {
    try {
        const Todos=await Todo.find({});
        res.status(200).json({
            success:true,
            data:Todos,
            message:"all data fetched"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success:false,
            data:"server error",
            message:err.message
        })
    }
};

exports.GetTodoID = async (req, res) => {
    try {
        const id=req.params.id;  
        const todo=await Todo.find({_id:id});
        if (!todo){
            return res.status(404).json({
                success:false,
                message:"data not found"
            });
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`data ${id} successfully fetched`
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success:false,
            data:"server error",
            message:err.message
        })
    }
};

