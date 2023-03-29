var package = require('../package.json')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200);
        res.json({msg: "RaspberryAPI version " + package.version});
    });
}