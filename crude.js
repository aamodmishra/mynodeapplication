const  express =require("express")
const app = express()
require("./database/connection")


app.get("/books",(req,res)=>{
     //logic

    res.json({
        message:"books featch successfully "
        
       
    })
})
app.post("/books",function(req,res){


    res.json({
         message:"books added successfully "

    })}
)
app.delete("/books/:id",function(req,res){

    res.json({
         message:"books deleted  successfully "

    })}
)
app.patch("/books/:id",function(req,res){

    res.json({
         message:"books updated  successfully "

    })}
)





postgresql://postgres.cukcpklkicxgjoeqpnje:[YOUR-PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"


app.listen(3000,function(){
    console.log("hello aamod project has started at port 300 after some change ");
    
})