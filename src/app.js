const express = require('express');

const {adminAuthorization} = require('./middleware/adminAuth.js');

const {dataBaseConnection} = require('./config/database.js');

const User = require('./models/user.js');

const app=express();

dataBaseConnection().then(()=>{
   console.log('Data Base Connected Successfully');
   app.listen(7777,()=>{
      console.log("Server is listening on port 7777");
   });
  
}).catch((err)=>{
   console.log('DataBase not Connected');
})

app.post('/signup',async(req,res)=>{

   const user = new User({
     firstName: "Satyam",
     lastName: "Kumar",
     emailId: "satyam@gmail.com",
     password: "12345"
   });

   try{
       await user.save();
       res.send('user Data Saved in DataBase');
   } catch(err){
       res.status(400).send('Error while saving data' + err.message);
   }

});


app.use('/admin', adminAuthorization);

app.get("/user",(req,res)=>{
   res.send("Hi You Landed to Get Test");
})

app.get("/admin/getAllData",(req,res)=>{
   res.send("Here is the userData");
})


