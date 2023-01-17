// // console.log('4');
// var fs = require('fs')
// var http = require("http");
// var server = http.createServer((req, res) => {
// //   console.log(req.url);
// if(req.url== '/'){
//     fs.readFile('index.html', (err,html) =>{
//         res.write(html)
//   res.end();

//     });

// }else if (req.url == '/products'){
//     fs.readFile('product.html', (err,html) =>{
//         res.write(html)
//   res.end();

//     });

// }else{

//     fs.readFile('404.html', (err,html) =>{
//         res.write(html)
//   res.end();

//     });
// }
// //   res.end();
// });

// server.listen(3000, () => {
//   console.log("node.js server at port 3000");
// });


const express = require('express');
const app = express();
 
app.use('/products/:id', function(req,res){
    res.send(req.params);
    res.send('product details');
    
})
app.use('/products', function(req,res){
    res.send('product page');
    
})
app.use('/', function(req,res){
    res.send('home page');

})
app.listen(3000, () =>{
    console.log('listen on port 3000');
})