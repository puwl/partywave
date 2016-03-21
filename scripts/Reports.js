import React from 'react';
const Report = require('./Report');
require("../styles/Reports.css");

const Reports = React.createClass({

	render(){

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
	      	<h1>{reportsData.name} reports:</h1>
	      	<div className="reports-container">
	      		{reportsInfo}
	      	</div>
	      </div>
	    )
	}
});

module.exports = Reports;