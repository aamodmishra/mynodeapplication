
//data base connection ko code 
const {Sequelize,DataTypes} = require("sequelize")
// const BookModel=require("./models/book.model")





const sequelize =new Sequelize("postgresql://postgres.cukcpklkicxgjoeqpnje:haha@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres")


sequelize.authenticate()
.then(()=>{
    console.log("connect vayo ,authentaction vayo haii");
    
})
.catch((err)=>{
    console.log("error aayo "+err);
    
})
const db  = {}
db.Sequelize = Sequelize 
db.sequelize = sequelize

db.books =  require("./models/book.model")(sequelize,DataTypes)
db.users = require("./models/user.model")(sequelize,DataTypes)
db.products = require("./models/product.model")(sequelize,DataTypes)

// migrate code ho yo chai hai 
sequelize.sync({alter : false}).then(()=>{
    console.log("Migrate vayo hai tw 🚀")
})

module.exports = db
