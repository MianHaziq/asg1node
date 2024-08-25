// const http=require('http');
// const hostname='127.0.0.1';
// const port=3000;
// const server=http.createServer((req,res)=>{
//     if(req.method==='POST'&&req.url==='/books'){
//     res.end("mian g");

//     }else{
//         res.end("Note Found")
//     }
// })





// server.listen(3000);


const express=require('express');

const app=express();
let books=[

    {title:"Mian G",id:"1",author:"haziq",year:"1999"}
]


app.post('/books',function(req,res){
res.end("added successful");
})

app.put('/books',function(req,res){
    res.end("updated successful");
    })
app.delete('/books',function(req,res){
      res.end("deleted successful");
        })

app.get('/books',function(req,res){
    res.send(books);
})


app.listen(3000,()=>{
    console.log("server createeeeed. yohooooo")
});