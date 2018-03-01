const express = require('express');
const app = express();
app.use(express.static('server/public/'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // needed for angular requests

// Mongoose setup ------------------------------------
const mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/employees';

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to: ', databaseUrl);
})

mongoose.connection.on('error', function(error) {
  console.log('mongoose connection error: ', error);
})

mongoose.connect(databaseUrl);
// End Mongoose Setup -------------------------------

//Router
const employeeRouter = require('./routers/employeeRouter');
app.use('/employees', employeeRouter);


//Start up the server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
