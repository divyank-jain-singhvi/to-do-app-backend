const { response } = require("express");
const Todo = require("../models/Todo");

exports.DeleteTodo = async (req, res) => {
    try {
        const id =req.params.id;
        await Todo.findByIdAndDelete({_id:id});
            res.json({
                success:true,
                message:"Todo Deleted successfully"
            })
        }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success:false,
            data:"server error",
            message:err.message
        })
    }
};