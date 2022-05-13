const HomeController = {
    index: (req, res) => {
        const respose = {
            message: 'Kiriki API'
        };
        return res.json(respose);
    }
}

module.exports = HomeController;
