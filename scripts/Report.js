import React from 'react';
require("../styles/Report.css");

const Report = React.createClass({

	reportIcon(report){
		if(report.name == "SwellNet"){
			return '../images/PW_logo.svg';
		}
		if(report.name == "coastalWatch"){
			return '../images/swellnet_logo.svg'
		}
	},

	reportClasses(report){
		if(report.name == "SwellNet"){
			return 'swellnet report';
		}
		if(report.name == "coastalWatch"){
			return 'coastalwatch report'
		}
	},

	render(){
		let report = this.props.report;
		let icon = this.reportIcon(report);
		let classes = this.reportClasses(report);

	    return (
	      <div className={classes}>

	      	<div className="report-header">
	      		<h2>{report.name}</h2>
	      		<img src={icon}></img>
	      	</div>

	      	<div className="report-conditions">
	      		<div className="swell">
	      			
	      		</div>
	      		<div className="wind">

	      		</div>
	      		<div className="tide">

	      		</div>
	      		<div className="sun">

	      		</div>
	      	</div>

	      	<div className="report-description">
	      		<p className="description">Description: {this.props.report.content}</p>
	      	</div>

	      </div>
	    )
	}

});

module.exports = Report;