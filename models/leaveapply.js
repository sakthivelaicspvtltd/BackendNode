const mongoose = require('mongoose');

var leaveapply = mongoose.model('leaveapply', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number },
    // created_date: {type:Date()},
});

module.exports={ leaveapply };   