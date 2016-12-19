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

	      	<p>PartyWave makes it easier to track Sydney surf conditions
          by putting multiple surf reports together in one handy website.</p>

	      	<p>Surf reports are updated every 30 minutes.</p> 

          <p>We currently gather reports from CoastalWatch, SwellNet and SeaBreeze.</p>

          <p>We’d love to hear your feedback or suggestions:</p>
          <p className="links"><a href="mailto:contact@partywave.co">contact@partywave.co</a></p>
          <p className="links"><a href="https://www.facebook.com/PartyWaveSurf/" target="_blank"> facebook</a></p>

      	</div>
      </div>
  )
  }
});

module.exports = About;
