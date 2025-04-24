const  express =require("express")
const app = express()


app.get("/",(req,res)=>{
    res.json({
        name:"aamod",
        age : "19"
        
       
    })
})
app.get("/about",function(req,res){
    res.send("bye hi  world")}
)





app.listen(3000,function(){
    console.log("hello aamod project has started at port 300 after some change ");
    
})