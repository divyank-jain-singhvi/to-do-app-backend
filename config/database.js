const mongoose = require('mongoose');
require("dotenv").config();
const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => { console.log('Connection successful') })
    .catch((error) => { console.log('received an error') });
}
model.exports=dbconnect;