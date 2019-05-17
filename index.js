const express = require('express')
const path = require('path')
const app = express()
const expressEdge = require('express-edge')


app.use(express.static('public'))
app.use(expressEdge)

app.set('views' , `${__dirname}/views`)



app.get('/' , (req, res) => {


    res.render('index')
    // console.log(path.resolve(__dirname , 'index.html'));
    


})

app.get('/about' , (req, res) => {


    res.render('about')
    // console.log(path.resolve(__dirname , 'index.html'));
    


})


app.get('/post' , (req, res) => {


    res.render('post')
    // console.log(path.resolve(__dirname , 'index.html'));
    


})

app.get('/contact' , (req, res) => {


    res.render('contact')
    // console.log(path.resolve(__dirname , 'index.html'));
    


})




app.listen(3000 , () =>{
    console.log("server running on port 3000");
    
})



























// const http = require('http')
// const fs = require('fs')

// const homePage = fs.readFileSync('index.html')
// const aboutPage = fs.readFileSync('about.html')
// const contactPage = fs.readFileSync('contact.html')


// const server = http.createServer((req,res) =>{

// if(req.url ===  '/about'){
//     return res.end(aboutPage)
// }else if(req.url ===  '/contact'){

//     return res.end(contactPage)
// }else if(req.url ===  '/home' || req.url ===  '/'){
//     return res.end(homePage)
// }else{
//     res.writeHead(404)
//     res.end("page not found!")
// }

// })

// server.listen(3000)




