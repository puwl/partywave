import React from 'react';
require("../styles/Forecast.css");

const Forecast = React.createClass({

	ForecastImageUrl(){
		return 'https://s3-ap-southeast-2.amazonaws.com/partywave-images/seabreeze';
	},
	render(){
		let ForecastImageUrl = this.ForecastImageUrl();

	    return (
	      <div>
	      	<img src={ForecastImageUrl}></img>
	      </div>
	    )
	}
});

module.exports = Forecast;
