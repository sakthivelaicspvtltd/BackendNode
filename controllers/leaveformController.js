const express = require('express');
var router= express.Router();

var { leaveapply } =require('../models/leaveapply');

// loalhost:3000/leaveapply
router.get('/list', (req, res) =>{
    leaveapply.find((err, docs) => {
        if (!err) { res.send(docs); } 
        else { console.log('Error in retriving leaveapply :' + JSON.stringify(err, undefined, 2));  }
    });
});

// localhost:3000/leaveapply
// router.post('/list', (req, res) => {
//     var emp = new leaveform({
//         leavetypes: req.body.leavetypes,
//         starting_date: req.body.starting_date,
//         end_date: req.body.end_date,
//         message: req.body.message,
//     });
//     emp.save((err,docs)=> { 
//         if(!err) {res.send(docs); }
//         else { console.log('Error in retriving leave :' + JSON.stringify(err, undefined, 2));  }
//     } );
// });

module.exports = router;