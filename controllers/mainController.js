const mainController = {

    home: (req, res) => {
        res.render ('home')
    },
   error: (req, res) => {
        res.status (404).send('Not Found 404')
    }
}

module.exports = mainController