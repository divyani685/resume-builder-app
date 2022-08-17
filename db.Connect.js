const mongoose=require("mongoose")
const URl="mongodb+srv://Divyanisingh685:divyani685@cluster0.yp9nl.mongodb.net/Resume"
// const config=require('./db.con')
// const dbcon=async()=>{
//     try{
//         await mongoose.connect(config.uri,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false},()=>{
//             console.log(`connected to database`)
//         })
//     }catch(err){
//         console.log(err)
//     }
// }
// module.exports=dbcon
mongoose.connect(URl,{useUnifiedTopology:true,useNewUrlParser:true})
const connection=mongoose.connection
connection.on("connected",()=>{
    console.log("Mongo Db connected successfully")
})
connection.on("error",(error)=>{
    console.log(error)
})