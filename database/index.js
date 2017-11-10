const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

console.log("This is database/index.js 2")


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String, 
  full_name: String, 
  html_url: String, 
  url: String, 
  description: String 
});
console.log("This is database/index.js 3")

let Repo = mongoose.model('Repo', repoSchema);

console.log("This is database/index.js 4")

let save = (document) => {

  var oneRepo = new Repo({ id: document.id , name: document.name, full_name: document.full_name, html_url: document.html_url, url: document.url, description: document.description })
 // problem: duplicate data

    oneRepo.save(function(err, oneInstance) { 
    if(err) console.log("ERROR DB");
    // console.log('SUCCESS: ', document)
  })
}

let fetchdata = (callback) => { 
  console.log("We're fetching data ..."); 
  Repo.find(function (err, repos) {
  if (err) return console.error(err);
  callback(repos);
}).sort({'id':1}).limit(25);


} 

module.exports.save = save;
module.exports.fetchdata = fetchdata;
// how did it create repos collection ??? 

// how not to save duplicate data ? 