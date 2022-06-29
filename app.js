const express = require('express');
const session = require('express-session');


const app = express();

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');


const path = require('path')
const methodOverride =  require('method-override');

const port = 3000

const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');


app.use(session({
    secret: "secreto",
    resave: false,
    saveUninitialized: false,
}))

app.use(userLoggedMiddleware);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port);
});

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/', mainRoutes);