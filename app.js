const express = require ('express');
const app = express();

const path = require ('path')

const port = 3000

const mainRoutes = require ('./routes/mainRoutes');

app.use(express.static('public'));

app.listen(port, ()=> {
    console.log("Servidor corriendo en el puerto " + port);
});

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', mainRoutes);
