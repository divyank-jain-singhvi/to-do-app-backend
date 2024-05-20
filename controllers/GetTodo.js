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
