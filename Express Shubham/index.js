require("dotenv").config()  //
const express=require("express");  // It loads the express package and assigns it to the express variable
const port =process.env.PORT || 9091
const cors=require("cors");
const path=require("path");
const data=[]


const app=express();
//app.use(express.urlencoded({extended:true})) 
//used when user submit the form in html
 app.use(express.json());
app.use(cors());//middleware

app.get('/',(req,res,next)=>{ // Route handler
res.send(data);
// res.send("Hello this is post route.")
})

//The post route
// app.post('/savedata',(req,res)=>{
//     res.json({
//         name:'Neha Munde'
//     })
// })

// app.get is for getting the request
// app.post('/user',(req,res)=>{
//     console.log(req.query)
//     res.send(data);
// })

//post route (for getting data)
app.post('/post',(req,res)=>{
    data.push(req.body);
    res.send(req.body)
    res.send('Post route Hit.');
})

// to send a fine in express
app.get('/html',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','dashboard.html'))
})

//to download pdf file
app.get('/download',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','net-http.pdf'));
})

app.listen(port,()=>{
    console.log(`Server running at ${port}`);
})