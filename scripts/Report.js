import React from 'react';
require("../styles/Report.css");

const Report = React.createClass({

	reportIcon(report){
		if(report.name == "SwellNet"){
			return '../images/swellnet_logo.svg';
		}
		if(report.name == "coastalWatch"){
			return '../images/coastal_logo.svg';
		}
	},
	swellIcon(){
		return '../images/icon_swell.svg';
	},
	windIcon(){
		return '../images/icon_wind.svg';
	},
	reportClasses(report){
		if(report.name == "SwellNet"){
			return 'swellnet report';
		}
		if(report.name == "CoastalWatch"){
			return 'coastalwatch report'
		}
	},
	render(){
		let report = this.props.report;
		let icon = this.reportIcon(report);
		let classes = this.reportClasses(report);
		let swellIcon = this.swellIcon();
		let windIcon = this.windIcon();
		let date = this.props.report.date.substring(0,16).replace(/[T]/g,' ');

	    return (
	      <div className={classes}>

	      	<div className="report-header">
	      		<div className="report-header-content">
	      			<div className="reportName">
	      				<h2>{report.name}</h2>
	      			</div>
	      			<div className="reportDate">
	      				<time>{date}</time>
	      			</div>
	      		</div>
	      	</div>

	      	<div className="report-conditions">
	      		<div className="condition swell">
	      			<img src={swellIcon}></img>
	      			<span>{report.swellHeight} {report.swellDirection}</span>
	      		</div>

	      		<div className="condition wind">
	      			<img src={windIcon}></img>
	      			<span>{report.windSpeed.toUpperCase()} {report.windDirection}</span>
	      		</div>
	      	</div>

	      	<div className="report-description">
	      		<p className="description">
	      			<span className="description-title">DESCRIPTION:</span>
	      			{report.content}
	      		</p>
	      		<span> Full report on <a href={"https://www." + report.name + ".com"}>{report.name}</a></span>
	      	</div>

	      </div>
	    )
	}

});

module.exports = Report;