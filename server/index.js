const express = require('express');
require("./Db/config.js");
const cors = require('cors')
const User = require("./Db/user.js");
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

   
})

app.listen(5000 ,()=>{
    console.warn("server is running ")
})
