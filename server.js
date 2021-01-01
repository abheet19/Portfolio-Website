const express = require('express');

const app = express();

var port= process.env.PORT || 80;

app.use('/',express.static( './' + '/public'));

app.listen(port,()=>{
    console.log(`listening on ${port}`);
});