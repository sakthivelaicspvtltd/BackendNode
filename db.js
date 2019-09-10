const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/aicsDB',(err) => {
    if(!err)
        console.log('MongoDB connection Successed..');
    else
        console.log('MongoDB connection Not Successed', JSON.stringify(err, undefined, 2));
});
module.exports = mongoose;