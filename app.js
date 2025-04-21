const  express =require("express")
const app = express()


app.get("/",(req,res)=>{
    res.send("bye world")
})
app.get("/about",(req,res)=>
    res.send("bye hi muji world")
)







app.listen(3000,function(){
    console.log("hello aamod project has started at port 300 after some change ");
    
})