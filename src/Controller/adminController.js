const userModel = require("../Model/userModel")



const loginAdmin=(req,res)=>{
try{
    let data=req.body
    let {phone,password}=data
    
    const loggedInAdmin=userModel.findOne({phone,password})
    if(loggedInAdmin) return res.status(200).send({status:true,message:"Success"})

    return res.status(400).send({stutus:false,message:"Invalid creadentials"})
}catch(err){
    return res.status(500).send({status:false,message:err.message})
}
}

module.exports={loginAdmin}