const express=require("express");
const router=express.Router();

const {createTodo}=require("../controllers/CreateTodo");
const {GetTodo,GetTodoID}=require("../controllers/GetTodo");
const {UpdateTodo}=require("../controllers/UpdateTodo");

router.post("/createTodo",createTodo);
router.get("/getTodo",GetTodo);
router.get("/getTodoid/:id",GetTodoID);
router.put("/PutTodo/:id",UpdateTodo);

module.exports=router;