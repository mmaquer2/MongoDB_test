const express = require('express');
const app = express();

app.listen(3001,function() {
    console.log('Connection on Port 3001')

});

app.get('/',function(req,res){

    res.send('hello world');
});