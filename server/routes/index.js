/**
 * Created by abrooksnagel on 1/12/16.
 */
var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../../public/views/index.html'))
});

router.post('/addAss', function(request, response){
    var assign = new Assignment({name: request.body.name,
                                number: request.body.number,
                                score: request.body.score,
                                date: request.body.date,
                                pass: request.body.pass});
    assign.save;
});

module.exports = router;