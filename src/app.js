const express=require('express');

const app=express();

app.listen(7777,()=>{
    console.log("Server is listening on port 7777");
 });

app.use("/test",(req,res)=>{
   res.send("Hi I finally make my new Server");
})
