
//data base connection ko code 
const {Sequelize,DataTypes} = require("sequelize")





const sequelize =new Sequelize("postgresql://postgres.cukcpklkicxgjoeqpnje:haha@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres")


sequelize.authenticate()
.then(()=>{
    console.log("connect vayo ,authentaction vayo haii");
    
})
.catch((err)=>{
    console.log("error aayo "+err);
    
})
const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize
module.exports =db
