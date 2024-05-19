const express=require("express");
const router=express.router();
const {createTodo}=require("../controllers/CreateTodo");
router.post("/createTodo",createTodo);
module.exports=router;