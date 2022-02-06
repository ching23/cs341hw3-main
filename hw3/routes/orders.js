// @author Caitlin Ching 
// CS341-B Dr. Cenek 
// Last modified: 02/04/2022
// External Source used for JSON object: https://www.w3schools.com/js/js_json_intro.asp

// from users.js
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next){
    
    // array of JSON objects for cheesecake toppings and quantity
    var data = [{
        topping: "cherry",
        quantity: "2"
    }, {
        topping: "plain",
        quantity: "6"
    }, {
        topping: "chocolate",
        quantity: "3"
    }];

    // convert data array to a string
    var stringData = JSON.stringify(data);
    // set headers for the responses
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    // send the responses
    res.send(stringData);
})

module.exports = router;
