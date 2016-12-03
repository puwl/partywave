import React from 'react';
const Report = require('./Report');
const Forecast = require('./Forecast');
require("../styles/Reports.css");

const Reports = React.createClass({

	waveUnderlineImage(){
		return '../images/underline_waaves.svg';
	},

	getReports(){
		if(!this.props.reports){
			let spot = window.location.hash.split('/')[2];
			this.props.fetchSpotReports(spot)
		}else {
			return this.props.reports
		}
	},

	render(){
		let reports = this.getReports()
		let waveUnderlineImage = this.waveUnderlineImage();
		let waveUnderlineStyles = { backgroundImage: 'url(' + waveUnderlineImage + ')'};
		let reportsInfo = [];

		if(reports != undefined){
			for (var i = 0; i < reports.reports.length; i++) {
				var report = reports.reports[i];
			  	reportsInfo.push(
			  		<Report
			  			key={i}
			  			report={report}/>
			  	)
			 }
		}

	    return (
	    	<div className="reports">
	      		<div className="reportsTitle">
	      			<h1>{reports ? reports.name.replace('-',' ') + " Reports" : 'Fetching reports...' }</h1>
	      			<div className="underline_waaves"></div>
	      		</div>
	      		<div className="reports-container">
	      			{reportsInfo}
	      		</div>
	      		<div className="ForecastContainer">	
		      			<h3 className = "Forecast">Seabreeze</h3>
		      			<Forecast/>
	     		</div>
	      	</div>

	    )
	}
});

module.exports = Reports;