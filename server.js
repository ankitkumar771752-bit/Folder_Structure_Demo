
require("dotenv").config();
const app = require("./src/app");
const PORT = process.env.PORT;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});







// const express=require('express');
// require('dotenv').config();
// const db=require('./src/config/db');
// const app=express();
// app.use(express.json());

// app.listen(process.env.PORT,()=>{
//     console.log(`Server is Running ${process.env.PORT}`);
// })