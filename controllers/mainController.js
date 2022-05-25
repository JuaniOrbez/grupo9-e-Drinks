const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {

    home: (req, res) => {
        res.render ('home')
    },
   error: (req, res) => {
        res.status (404).send('Not Found 404')
    }
}

module.exports = mainController