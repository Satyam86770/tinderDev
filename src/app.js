const express=require('express');

const app=express();

app.listen(7777,()=>{
    console.log("Server is listening on port 7777");
 });

app.get("/user",(req,res)=>{
   console.log(req.query);
   res.send("Hi You Landed to Get Test");
})


app.post("/test",(req,res)=>{
   res.send("Hi You Landed to Post Test");
})

