const express = require('express');
require("./Db/config.js");
const User = require("./Db/user.js");
const app = express();
app.use(express.json());


app.post ("/register",async (req,res)=>{
    const user =  new User(req.body);
    const result = await user.save();
    console.warn(result);

})

app.listen(5000 ,()=>{
    console.warn("server is running ")
})
