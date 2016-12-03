import React from 'react';
import ReactGA from 'react-ga';
const Spots = require('./Spots');
require("../styles/Header.css");
ReactGA.initialize('UA-83868683-1');

const Header = React.createClass({

  handleSpotClick(e){
    let spot = e.currentTarget.innerHTML;
    this.props.fetchSpotReports(spot);
    ReactGA.event({
      category: 'Navigation',
      action: 'clicked ' + spot + ' report',
    });
  },

  handleAboutClick(){
    ReactGA.event({
      category: 'Navigation',
      action: 'clicked about page',
    });
  },

  spotsList(){
    let spots = this.props.spots;
    let spotsList = [];
    if (spots != null) {
      for (var i = 0; i < spots.length; i++) {
        let spot = spots[i];
        spotsList.push(
          <li key={spot} onClick={this.handleSpotClick}>
            {spot}
          </li>
        );
      };
    }
    return spotsList;
  },

  spotsClasses(){
    let spotsClasses;
    if (this.props.route === "/spots") {
      spotsClasses="spots-navlink selected";
    }else {
      spotsClasses="spots-navlink";
    }
    return spotsClasses;
  },

  aboutClasses(){
    let aboutClasses;
    if (this.props.route === "/about") {
      aboutClasses="about-navlink selected";
    }else {
      aboutClasses="about-navlink";
    }
    return aboutClasses;
  },

  showSpotsList(){
    let showSpotsList;
    if (this.props.route === "/spots") {
      showSpotsList="spotslist show";
    }else {
      showSpotsList="spotslist hide";
    }
    return showSpotsList;
  },

  render(){

    let spotsList = this.spotsList();
    let spotsClasses = this.spotsClasses();
    let aboutClasses = this.aboutClasses();
    let showSpotsList = this.showSpotsList();

    return (
      <header>
      	<nav>
      		<div className="navlinksleft">
            <h1>
              <a href="#/spots" className={spotsClasses}>Spots</a>
  			      <a href="#/about" className={aboutClasses} onClick={this.handleAboutClick.bind(this)}>About</a>
            </h1>
          </div>
    		
        	<div className="navlinksright">
    				<a href="#/"><img src='../images/PW_logo.svg'></img></a>
    			</div>       
        </nav>
        
        <div className={showSpotsList}>
          <h2>
            <Spots spotsList={spotsList}/>
          </h2>
        </div>
      </header>
    )
  },
});

module.exports = Header;