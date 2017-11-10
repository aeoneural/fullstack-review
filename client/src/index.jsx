import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Data from './components/data.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [], 
    }

  }

  
  changeState(data) { 
    this.setState({
      repos: data,
    })
  }
  componentDidMount() { 

        $.ajax({ 
          url: '/repos', 
          method: 'GET', 
          headers: { 
            'content-type' : 'application/json'
          },
          success: this.changeState.bind(this),
          error: function(err) { 
            console.log("uh oh, error.", err)
          }

        })

  }
  

  
  search (term) {
    console.log(`${term} was searched`);
    // this.setState({ 
    //   repos: []
    // })
    $.ajax({ 
      url: '/repos', 
      method: 'POST', 
      headers: { 
        'content-type' : 'application/json'
      }, 
      // because the body object is a key value, I think I should provide a descriptive key
      data: JSON.stringify({name: term}), 
      success: function(data) { 
        console.log('----->',data)
      }, 
      error: function(err) { 
        console.log("uh oh, error.", err)
      }

    })
  }

  render () {
    console.log("This is rendering App comp. ");
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Data data={this.state.repos.slice(0,25)} />
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));