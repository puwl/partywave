import React from 'react';
require("../styles/Forecast.css");

const Forecast = React.createClass({

	ForecastImageUrl(){
		return 'https://s3-ap-southeast-2.amazonaws.com/partywave-images/seabreeze';
	},
	render(){
		let ForecastImageUrl = this.ForecastImageUrl();

	    return (

	    	<div className="report-description">
	      		<div className="ForecastImage">
	      			<img src={ForecastImageUrl}></img>
	      		</div>
	      		
	      		<span className="fullReport">
	      			<a href="http://www.reddit.com" target="_blank">Full forecast</a>
	      		</span>

		      	<div className="underline_waaves"></div>
	      	</div>

	    )
	},
	handleLeavingClick(site){
		ReactGA.event({
      		category: 'Leaving site',
      		action: 'left partywave to view origial ' + site + ' report',
      	});
	}
});

module.exports = Forecast;
