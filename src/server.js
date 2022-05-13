const expore = require('express');
const morgan = require('morgan');
require('dotenv').config({path: __dirname + '/.env'});
const app = expore();

//Settings
app.set('appName', process.env.APP_NAME);
app.set('port', process.env.NODE_PORT);
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev'));
app.use(expore.json());
app.use(expore.urlencoded({extended: false}));

//Routes
app.use(require('./routes/index'));

//Start Server
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});