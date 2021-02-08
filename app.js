const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('page1'));
app.use(express.static('.'));

app.get('/', function(req,res){
  res.sendFile(__dirname + '/page1/1PAGE.html');
});

app.listen(port, () => console.log('YOLO obseoye app listening on port ' + port));
