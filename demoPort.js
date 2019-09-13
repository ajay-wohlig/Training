var http = require('http');
var _ = require('lodash');
var moment = require('moment');

var arr =[1,2,3,4,5]
var index= _.indexOf(arr,4)
var moment1= moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(index)


http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hii');
  res.write('nodemon command running'); 
  res.write('Hello World!'); 
  res.write(""+index);
  res.write(""+moment1);

  res.end(); 
}).listen(8000); 