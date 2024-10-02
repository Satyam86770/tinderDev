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

app.use(express.json());

app.post('/signup',async(req,res)=>{

   const user = new User(req.body);

   try{
       await user.save();
       res.send('user Data Saved in DataBase');
   } catch(err){
       res.status(400).send('Error while saving data' + err.message);
   }

});

app.get('/user',async (req,res)=>{
    const userEmail = req.body.emailId;
    try{ 
      
      const user= await User.find({emailId: userEmail});
      if(user.length === 0)
      {
         res.send('No User Data Found');
      }
      else{
      res.send(user); 
      }
    }catch(err){
      res.status(400).send('Something went wrong');
    }
});

app.delete('/user',async (req,res)=>{
   const userId = req.body.Id;
   try{ 
     const user= await User.findByIdAndDelete({_id: userId});
     res.send("User Deleted"); 
   } catch(err){
     res.status(400).send("Something went wrong");
   }
});


app.use('/admin', adminAuthorization);


app.get("/admin/getAllData",(req,res)=>{
   res.send("Here is the userData");
})


