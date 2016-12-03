import React from 'react';
const PartyWave = require('./PartyWave');
require("../styles/About.css");

const About = React.createClass({
  render(){
    return (
      <div className="about">
      	<div className="about-content">

          <div className="about-content-title">
    	      	<h1>Sydney surf reports all in one place</h1>
              <div className="underline_waaves"></div>
          </div>

	      	<p>PartyWave makes it easier to check Sydney’s surf reports
	      		by putting them in one place for you. 
	      	</p>

	      	<p>Surf reports are updated every 30 minutes.
	      		We currently scrape CoastalWatch and SwellNet.
	      	</p>

          <p>We’d love to hear your feedback or suggestions</p>
          <p><a href="mailto:contact@partywave.co">contact@partywave.co</a></p>

      	</div>
      </div>
  )
  }
});

module.exports = About;