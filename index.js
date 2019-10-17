const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const pug = require('pug');
const path = require('path');





require('dotenv').config();


//iniaites the application on the specifically assigned port number 

const app = express();
const port = process.env.PORT || 3002;


//enable pug template system

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

//enable the rendering of index.pug in the view file system 
//sends title called articles to the h1 tag on index.pug

app.get('/', function(req,res) {
  res.render('index', {
    title:'articles'
  });
});


app.post('/', function (req, res){
  console.log('submitted succesfully');
  

});





//add a route

app.get('/backend/routes', function(req, res) {
  res.render('add')

});

//enables cors and json parsing


app.use(cors());
app.use(express.json());

//grab url for the data base

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

//start connection and server with mongoose and express
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//users routers


const usersRouter = require('./backend/routes/users');

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


