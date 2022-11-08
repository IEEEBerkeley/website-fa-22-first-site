const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const router = express.Router();

const ItemSchema = new mongoose.Schema({
    item: String,
    price: Number 
})

const Item = mongoose.model('item', ItemSchema);
router.get("/foods", async(req, res)=>{
    const foods = await Item.find({});
    res.send(foods) 
}) 

router.post('/items', (req,res)=> {
    let food = new Item({
        item : req.body.item,
        price : req.body.price 
    }) 
    const newfooditem = food.save() 
    res.send('added item!')
})

app.use(express.json());
app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true 
}));

const db = 'mongodb+srv://hubi:123abc@cluster0.baba0.mongodb.net/website?retryWrites=true&w=majority'
mongoose.connect(db, () => console.log('success'))

app.use('/', router); 

app.listen(8080, ()=> {
    console.log('connected')
}) 

