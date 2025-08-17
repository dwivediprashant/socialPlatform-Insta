const express=require('express');
const app=express();
const port =3000;
const path=require("path");
const instaData=require("./data.json");

app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})

app.get("/",(req,res)=>{
    res.render("Home.ejs");
})
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const userData=instaData[username];
    if(userData){
        res.render("Instagram.ejs",{userData});
    }else{
        res.render("Error.ejs");
    }
    
})