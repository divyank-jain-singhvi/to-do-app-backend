const express=require("express");
const router=express.Router();

const {createTodo}=require("../controllers/CreateTodo");
const {GetTodo,GetTodoID}=require("../controllers/GetTodo");

router.post("/createTodo",createTodo);
router.get("/getTodo",GetTodo);
router.get("/getTodoid/:id",GetTodoID);

module.exports=router;