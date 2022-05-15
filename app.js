const express = require ('express');

const app = express();

// const mainRoutes = require ('./routes/mainRoutes');

app.use(express.static('public'));

 app.set('view engine','ejs');

// app.use('/', mainRoutes);

const port = 3000

const path = require ('path')

app.listen(port, ()=> {
    console.log("Servidor corriendo en el puerto 3000");
})



app.get ("/", (req, res) =>{
    res.render ('home')
})

app.get ("/productdetail", (req, res) =>{
    res.render ('./products/productDetail')
})

app.get ("/productcart", (req, res) =>{
    res.render ('./products/productCart')
})

app.get ("/register", (req, res) =>{
    res.render ('./users/register')
})
app.get ("/login", (req, res) =>{
    res.render('./users/login')
})

app.get ("*", (req, res) =>{
    res.status (404).send('Not Found 404')
})

