const request = require('request');
const config = require('../config.js');
const database = require('../database/index.js')

console.log("This is helpers/github.js 5")

let getReposByUsername = (name) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  console.log("This is helpers/github.js 6")

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  request({ 
    url: 'https://api.github.com/users/' + name + '/repos', 
    headers: { 
      'User-Agent': 'aikerim', 
      'Authorization': `token ${config.TOKEN} `
    }
    
  }, 
    function(error, response){ 
      if(error) { console.log("error occurred ")}
      console.log('response: ', response)
      console.log("Body: ", JSON.parse(response.body))
      var allrepos = JSON.parse(response.body)

      for(var i = 0; i < allrepos.length; i++) { 
          var info = {
          'id': allrepos[i]['id'],
          'name': allrepos[i]['name'], 
          'full_name': allrepos[i]['full_name'], 
          'html_url': allrepos[i]['html_url'], 
          'url': allrepos[i]['url'],
          'description': allrepos[i]['description'] 
        }
        database.save(info)
      }
    })
}

module.exports.getReposByUsername = getReposByUsername;