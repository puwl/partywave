import React from 'react';
require("../styles/Report.css");

const Report = React.createClass({

	reportIcon(report){
		if(report.name == "SwellNet"){
			return '../images/swellnet_logo.svg';
		}
		if(report.name == "coastalWatch"){
			return '../images/coastal_logo.svg'
		}
	},
	swellIcon(){
		return '../images/swellnet_logo.svg';
	},
	windIcon(){
		return '../images/swellnet_logo.svg';
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
		let swellIcon = this.swellIcon();
		let windIcon = this.windIcon();

	    return (
	      <div className={classes}>

	      	<div className="report-header">
	      		<div className="report-header-content">
	      			<div className="reportName">
	      				<h2>{report.name}</h2>
	      			</div>
	      			<div className="reportDate">
	      				<time datetime="2001-05-15T19:00">22/12/2015 06:00</time>
	      			</div>
	      		</div>
	      		<div className="report-header-content">
	      			<img src={icon}></img>
	      		</div>
	      	</div>

	      	<div className="report-conditions">
	      		<div className="swell">
	      			<img src={swellIcon}></img>
	      			<span>{report.swellHeight}</span>
	      		</div>

	      		<div className="wind">
	      			<img src={windIcon}></img>
	      			<span>{report.windSpeed}</span>
	      		</div>
	      	</div>

	      	<div className="report-description">
	      		<p className="description">Description: {report.content}</p>
	      	</div>

	      </div>
	    )
	}

});

module.exports = Report;