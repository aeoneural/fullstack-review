import React from 'react';

const Data = (props) => {
  return (
  	<div>
      <h4>All data ----> : {props.data.length}</h4>
      {props.data.map(repo => 
        <ol>Name: {repo.full_name} <Each repo = {repo} /> </ol>
        // key = {repo.id}
      	
      	)}
    </div>
    )
}

const Each = (props) => { 
	return (
		<ul> 
		  url: <a href = {props.repo.url}> {props.repo.name}  </a>
		</ul>
		)


}

Each.propTypes = {
  repo: React.PropTypes.object.isRequired
};


export default Data;

