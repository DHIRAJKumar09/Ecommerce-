const express = require('express');
require("./Db/config.js");
const cors = require('cors')
const User = require("./Db/user.js");
const Product = require("./Db/product.js")
const app = express();
app.use(cors());
app.use(express.json());
app.post('/signup',async (req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    res.send(result);
})


//login 


app.post('/login', async(req,res)=>{
    console.log(req.body);

    if(req.body.password && req.body.email){

        let user = await User.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }
        else{
            res.send({result:"No user found"});
        }


    }
    else{
        res.send({result:"No user found"});
    }

   
});

app.post("/add-products",async (req,res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);


});

app.get("/products", async (req, resp) => {
    const products = await Product.find();
    if (products.length > 0) {
        resp.send(products)
    } else {
        resp.send({ result: "No Product found" })
    }
});

app.delete("/product/:id", async (req, resp) => {
    let result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result)
});

app.get("/product/:id", async (req, resp) => {
        let result = await Product.findOne({ _id: req.params.id })
        if (result) {
            resp.send(result)
        } else {
            resp.send({ "result": "No Record Found." })
        }
});

app.put("/product/:id", async (req, resp) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    resp.send(result)
});

app.put("/product/:id", async (req, resp) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    resp.send(result)
});
app.get("/search/:key", async (req, resp) => {
    let result = await Product.find({
        "$or": [
            {
                name: { $regex: req.params.key }  
            },
            {
                company: { $regex: req.params.key }
            },
            {
                category: { $regex: req.params.key }
            }
        ]
    });
    resp.send(result);
})



app.listen(5000 ,()=>{
    console.warn("server is running ");
})
