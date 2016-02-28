import React from 'react';
require("../styles/Header.css");

const Header = React.createClass({
  render(){
    return (
      <header>
      	<nav>
			<ul>
				<li><a href="#/spots">Spots</a></li>
				<li><a href="#/about">About</a></li>
				<li><a href="#/">PartyWave</a></li>
			</ul>
		</nav>
      </header>
    )
  },
});

module.exports = Header;