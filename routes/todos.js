const express=require("express");
const router=express.Router();

const {createTodo}=require("../controllers/CreateTodo");
const {GetTodo}=require("../controllers/GetTodo");

router.post("/createTodo",createTodo);
router.get("/getTodo",GetTodo);

module.exports=router;