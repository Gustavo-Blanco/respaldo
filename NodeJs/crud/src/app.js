const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const userRoutes = require('./routes/User');

const app = express();

//settings
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middleware
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'gblanco',
    password:'123456',
    port:3306,
    database:'crudnodejs'
},'single'));
app.use(express.urlencoded({extended:false}))

//importing routes
app.use('/',userRoutes);


//static files
app.use(express.static(path.join(__dirname,'public')));

//starting server
app.listen(app.get('port'),() => console.log('listen on port 3000'));