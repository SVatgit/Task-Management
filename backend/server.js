const dotenv= require("dotenv").config()
const express= require("express");
const app = express();
const connectDB= require("./config/connectDB");
const PORT = process.env.PORT || 5000  
const mongoose= require('mongoose');
const cors=require("cors");
const taskRoutes= require("./routes/taskRoutes")


// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use("/api/tasks",taskRoutes);


// routes
app.get("/",(req,res)=>{
    res.send("HOME PAGE");
});




// connect dB then Start server
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is start on port ${PORT}`
        );
    })
})
.catch((err)=> console.log());

