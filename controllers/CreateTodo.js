const Todo=require("../models/ToDo");

exports.createtodo = async(req,res)=>{
    try{
        const {title,description}=req.body;
        const response=await Todo.create({title,description})
        res.state(200).json({
            success:true,
            data: response,
            message: "entry created successfully"
        })
    }
    catch(err){
        console.error(err);
        res.status(500),json({
            success:false,
            data:"initial server error",
            message:err.message,
        })
    }
}