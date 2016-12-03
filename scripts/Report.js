import React from 'react';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-83868683-1');
require("../styles/Report.css");

const Report = React.createClass({

	reportIcon(report){
		if(report.name == "SwellNet"){
			return '../images/swellnet_logo.svg';
		}
		if(report.name == "CoastalWatch"){ 
			return '../images/coastal_logo.svg';
		}
	},
	swellIcon(){
		return '../images/icon_swell.svg';
	},
	windIcon(){
		return '../images/icon_wind.svg';
	},
	tideIcon(){
		return '../images/icon_tide.svg';
	},
	sunIcon(){
		return '../images/icon_sun.svg';
	}, 

	reportClasses(report){
		if(report.name == "SwellNet"){
			return 'swellnet report';
		}
		if(report.name == "CoastalWatch"){
			return 'coastalwatch report'
		}
	},
	handleLeavingClick(site){
		ReactGA.event({
      		category: 'Leaving site',
      		action: 'left partywave to view origial ' + site + ' report',
      	});
	},
	render(){
		let report = this.props.report;
		let icon = this.reportIcon(report);
		let classes = this.reportClasses(report);
		let swellIcon = this.swellIcon();
		let windIcon = this.windIcon();
		let tideIcon = this.tideIcon();
		let sunIcon = this.sunIcon();
		let date = this.props.report.date.substring(0,16).replace(/[T]/g,' ');

	    return (
	      <div className={classes}>

	      	<div className="report-header">
	      		<div className="report-header-content">
	      			<div className="reportName">
	      				<h3>{report.name}</h3>
	      			</div>
	      			<div className="reportDate">
	      				<time>{date}</time>
	      			</div>
	      		</div>
	      		<div className="report-header-logo">
	      			<img src={icon}></img>
	      		</div>
	      	</div>

	      	<div className="report-conditions">
	      		<div className="condition swell">
	      			<div className="swell-icon"></div>
	      			<span>{report.swellHeight} {report.swellDirection}</span>
	      		</div>

	      		<div className="condition wind">
	      			<div className="wind-icon"></div>
	      			<span>{report.windSpeed.toUpperCase()} {report.windDirection}</span>
	      		</div>

	      		<div className="condition tide">
	      			<div className="tide-icon"></div>
	      			<span>{report.windSpeed.toUpperCase()} {report.windDirection}</span>
	      		</div>

	      		<div className="condition sun">
	      			<div className="sun-icon"></div>
	      			<span>{report.windSpeed.toUpperCase()} {report.windDirection}</span>
	      		</div>
	      	</div>

	      	<div className="report-description">
	      		<p className="description">
	      			<span className="description-title">DESCRIPTION: </span>
	      				{report.content}
	      		</p>
	      		<span className="fullReport">
	      				<a href={report.url} target="_blank" onClick={this.handleLeavingClick.bind(this, report.name)}>Full report</a>
	      		</span>
	      		<div className="underline_waaves"></div>
	      	</div>
	      </div>
	    )
	}
});

module.exports = Report;