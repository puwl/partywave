import React from 'react';
const PartyWave = require('./PartyWave');
require("../styles/About.css");

const About = React.createClass({
  render(){
    return (
      <div className="about">
      	<h1>About PartyWave</h1>
      </div>
    )
  }
});

module.exports = About;