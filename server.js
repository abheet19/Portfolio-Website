const express = require('express');

const app =express();

PORT= 3000;

app.use('/',express.static(__dirname + '/public'));

app.listen(PORT,"0.0.0.0");