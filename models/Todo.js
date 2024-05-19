const mongoose=require("mongoose");
const todoschema=new mongoose.Schema({
    Title:{
        type:String,
        require:true,
        maxLength:50
    },
    description:{
        type:String,
        require:true,
        maxLength:50
    },
    createdat:{
        type:Date,
        require:true,
        default:Date.now()
    },
    updatedat:{
        type:Date,
        require:true,
        default:Date.now()
    }
})

module.exports=mongoose.model("Todo",todoschema);