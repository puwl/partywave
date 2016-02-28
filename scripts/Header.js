import React from 'react';
require("../styles/Header.css");

const Header = React.createClass({
  render(){
    return (
      <header>
      	<nav>
      		<div className="navlinksleft">
				<a href="#/spots" className="spots-navlink">Spots</a>
				<a href="#/about" className="about-navlink">About</a>
			</div>
			<div className="navlinksright">
				<a href="#/"><img src='../images/PW_logo.svg'></img></a>
			</div>
		</nav>
      </header>
    )
  },
});

module.exports = Header;