const express=require("express")
const app=express()
const dbcon=require("./db.Connect")
// dbcon()
const port=process.env.PORT||5000
app.use(express.json())
const Userroute=require("./routes/userRoute")
const path=require('path')
app.use("/api/user/",Userroute)
if(process.env.NODE_ENV==="production")
{
    app.use('/',express.static('resume/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"resume/build/index.html"))
    })
}
app.get('/',(req,res)=>res.send("hello world..."))
app.listen(port,()=>{
    console.log(`app listening at port ${port}`)
})
