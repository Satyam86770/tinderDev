const mongoose = require('mongoose')

const dataBaseConnection = async()=>{
   await mongoose.connect('mongodb+srv://satyamece24:9RHtuGbD1rjzltsr@devtinder.nq2h8.mongodb.net/userData');
}

module.exports = {
   dataBaseConnection,
}