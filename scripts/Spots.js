import React from 'react';
require("../styles/Spots.css");

const Spots = React.createClass({
  render(){
    return (
    	<div className="spots-selection-container">
	    	<div className="underline_waaves"></div>
	        <ul>
	          {this.props.spotsList}
	        </ul>
      </div>
    )
  }
});

module.exports = Spots;