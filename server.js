/**
 * Created by frederickmacgregor on 04/08/2017.
 */
"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    console.log(req.url);
    console.log(req.get('access_token'));
    next();
});

app.use(express.static('./'));

app.listen(8080, function(){
    console.log('listening at port 8080');
});