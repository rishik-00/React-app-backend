
const express = require('express');
const bodyParser = require('body-parser');


const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
         res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res, next)=>{
        res.end('Will send all the leaders to you!');
    })

    .post((req, res, next)=>{
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    
    .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
    })

    .delete((req, res, next)=>{
        res.end('Deleting all leaders');
    });

leaderRouter.route('/:leaderId')
    .get((req, res, next)=>{
        res.end('Will send details of the leader: ' + req.params.leaderId + ' to you!');
    })
    
    .post((req, res) => {
    res.statusCode = 403;
    res.end('Not supported');
    })

    .put((req, res, next)=>{
        res.write('Updating the leader: ' + req.params.leaderId + '\n');
        res.end('Will update the leader: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete((req, res, next)=>{
        res.end('Deleting leader: ' + req.params.leaderId);
    });

module.exports = leaderRouter; 