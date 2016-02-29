import React from 'react';
const Spots = require('./Spots');
require("../styles/Header.css");

const Header = React.createClass({

  spotsList(){
    let spots = this.props.spots;
    let spotsList = [];
    if (spots != null) {
      for (var i = 0; i < spots.length; i++) {
        spotsList.push(<li key={i}>{spots[i]}</li>);
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
            <a href="#/spots" className={spotsClasses}>Spots</a>
			      <a href="#/about" className={aboutClasses}>About</a>
          </div>
    			<div className="navlinksright">
    				<a href="#/"><img src='../images/PW_logo.svg'></img></a>
    			</div>
		    </nav>
        <div className={showSpotsList}>
          <Spots spotsList={spotsList}/>
        </div>
      </header>
    )
  },
});

module.exports = Header;