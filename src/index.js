const express=require('express')
const route=require("./route/route")
const mongoose=require('mongoose')
const app=express()

app.use(express.json())
mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://Shashi_Shekhar_Singh:Shashi0708@myproject.mb3u3za.mongodb.net/Shashi_Shekhar_Singh-Vaccine?authSource=admin&replicaSet=atlas-lhj98j-shard-0&readPreference=primary&ssl=true",{useNewUrlParser:true})
.then(()=>console.log("MongoDb is Connected"))
.catch(err=>console.log(err))

app.use("/",route)

app.listen(process.env.PORT || 3000,function(){
    console.log("Express is running on port "+ (process.env.PORT || 3000))
})