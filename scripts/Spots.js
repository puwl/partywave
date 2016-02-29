import React from 'react';
require("../styles/Spots.css");

const Spots = React.createClass({
  render(){
    return (
    	<div className="spots-selection-container">
	        <ul>
	          {this.props.spotsList}
	        </ul>
        </div>
    )
  }
});

module.exports = Spots;