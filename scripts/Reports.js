import React from 'react';
const Report = require('./Report');
require("../styles/Reports.css");

const Reports = React.createClass({

	waveUnderlineImage(){
		return '../images/underline_waaves.svg';
	},

	render(){

		let waveUnderlineImage = this.waveUnderlineImage();

		let waveUnderlineStyles = {
  		backgroundImage: 'url(' + waveUnderlineImage + ')'
		};

		let reportsData = this.props.reports;
		let reportsInfo = [];

		for (var i = 0; i < reportsData.reports.length; i++) {
			var report = reportsData.reports[i];
		  	reportsInfo.push(
		  		<Report
		  			key={i}
		  			report={report}/>
		  	)
		}

	    return (
	      <div className="reports">
	      	<div className="reportsTitle">
	      		<h1>{reportsData.name}</h1>
	      	</div>
	      	<div className="reports-container">
	      		{reportsInfo}
	      	</div>
	      </div>
	    )
	}
});

module.exports = Reports;