const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("Secure CI/CD Demo");
});

app.listen(3000);