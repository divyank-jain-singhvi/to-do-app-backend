const express=require("express");
const router=express.Router();

const {createTodo}=require("../controllers/CreateTodo");
const {GetTodo,GetTodoID}=require("../controllers/GetTodo");
const {UpdateTodo}=require("../controllers/UpdateTodo");
const {DeleteTodo}=require("../controllers/DeleteTodo");

router.post("/createTodo",createTodo);
router.get("/getTodo",GetTodo);
router.get("/getTodoid/:id",GetTodoID);
router.put("/PutTodo/:id",UpdateTodo);
router.delete("/deleteTodo/:id",DeleteTodo);

module.exports=router;