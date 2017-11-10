var helper = require('../helpers/github.js')
var helperdb = require('../database/index.js')
const express = require('express');
let app = express();
console.log("This is server/index.js 8")

var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/../client/dist'));
console.log("This is server/index.js 9")

app.use(bodyParser.json());
console.log("This is server/index.js 10")

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
console.log("This is server/index.js 11")

app.post('/', function(req,res){ 
	res.end("hello from get /")
})	
app.post('/repos', function (req, res) {
	res.send("Hello from Post Repos.");
	console.log("This is server/index.js 12")

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('Request ----> ', req.body);
  helper.getReposByUsername(req.body.name)

});

app.get('/repos', function (req, res) {
	helperdb.fetchdata(function(data){ 
    res.send(data);
  })

	console.log("This is server/index.js 14")

  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;
console.log("This is server/index.js 13")

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

