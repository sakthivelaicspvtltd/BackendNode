const express= require('express');
const bodyParser= require('body-parser');

const { Mongoose } = require('./db.js');
var leaveapplyController = require('./controllers/leaveformController.js');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server started at 3000'));

// app.use('/leaveapply', leaveapplyController);





