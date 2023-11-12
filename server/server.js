const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const cors = require("cors");
const jsonData = require("../server/jsonData")

app.use(cors());

mongoose.connect("mongodb+srv://13phzi:GCRZp05q4UgQEA48@cluster0.m8wabkl.mongodb.net/?retryWrites=true&w=majority/DashboardDB").then(()=>{
     console.log("Connection")
})

const collectionData = new mongoose.Schema({
    end_year:{
        type:String,
        
    },
    intensity:{
        type:Number,
        
    },
    sector:{
        type:String,
        
    },
    topic:{
        type:String,
        
    },
    insight:{
        type:String,
        
    },
    url:{
        type:String,
        
    },
    region:{
        type:String,
        
    },
    start_year:{
        type:String,
        
    },
    impact:{
        type:String,
        
    },
    added:{
        type:String,
        
    },
    published:{
        type:String,
        
    },
    country:{
        type:String,
        
    },
    relevance:{
        type:String,
        
    } ,
    pestle:{
        type:String,
        
    },
    source:{
        type:String,
        
    },
    title:{
        type:String,
        
    },
    likelihood:{
        type:String,
        
    }
})

const DashboardData = mongoose.model("DashboardData",collectionData,"DashboardData") 


app.get("/",async (req,res)=>{
    await DashboardData();
    res.send("created")

})
app.get("/insert",async (req,res)=>{
    await DashboardData.insertMany(jsonData)

        res.send("inserted")
    })

    
app.get("/fetch",async (req,res)=>{
    const fetchedData = await DashboardData.find();
    res.send(fetchedData);

})

app.get("/fetchLimitedData",async (req,res)=>{
    const fetchedData = await DashboardData.find().limit(5);
    res.send(fetchedData);
})

app.get("/fetchLimitedChartData",async (req,res)=>{
    const fetchedData = await DashboardData.find().limit(15);
    res.send(fetchedData);
})


app.get("/fetchPestleData",async (req,res)=>{
    const fetchedData = await DashboardData.find().limit(15);
    res.send(fetchedData);
})

app.listen(port,()=>{
    console.log(`${port} is running`);
})
