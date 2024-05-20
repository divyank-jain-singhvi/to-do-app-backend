const express=require("express");
const app=express();
require("dotenv").config();
const PORT=process.env.PORT || 4000;

// middleware to pass json request body
app.use(express.json());

const todoRoutes=require("./routes/todos");

// mount todo api route
app.use("/api/v1",todoRoutes)

app.listen(PORT,()=>{
    console.log(`server started ${PORT}`)
})

// connect db
const dbconnect=require("./config/database");
dbconnect();

// default route
app.get("/",(req,res)=>{
    res.send(`<h1> this is home page body`);
})