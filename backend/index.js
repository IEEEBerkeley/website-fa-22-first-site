const express = require('express'); 
const mongoose = require('mongoose');
const app = express();
const router = express.Router(); 
app.use(router); 
router.get("/foods", (req, res)=>{
    const foods = UserSchema.find();
    res.send(foods) 
}) 

mongoose.connect('mongodb://localhost:27017/website', ()=> {
    console.log('success')
}) 

app.listen(8080, ()=> {
    console.log('connected')
}) 

router.post('/items', (req,res)=> {
    let: food = new Schema({
        item : req.body.item,
        price : req.body.price 
    }) 
    const newfooditem = food.save() 
    res.send(newfooditem); 
})

const UserSchema = mongoose.Schema({
    item: String,
    price: Number 
})




