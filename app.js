const express = require ('express');

const app = express();

const port = 3000

const path = require ('path')

app.listen(port, ()=>console.log("Servidor corriendo en el puerto 3000"))

app.use(express.static('public'))

app.get ("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get ("/productdetail", (req, res) =>{
    res.sendFile(path.join(__dirname,"/views/productDetail.html"))
})

app.get ("/productcart", (req, res) =>{
    res.sendFile(path.join(__dirname,"/views/productCart.html"))
})

app.get ("/register", (req, res) =>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
})
app.get ("/login", (req, res) =>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
})

app.get ("*", (req, res) =>{
    res.status (404).send('Not Found 404')
})
