import React from 'react';
require("../styles/Header.css");

const Header = React.createClass({
  render(){

    let spotsClasses;

    if (this.props.route === "/spots") {
      spotsClasses="spots-navlink selected";
    }else {
      spotsClasses="spots-navlink";
    }

    let aboutClasses;

    if (this.props.route === "/about") {
      aboutClasses="about-navlink selected";
    }else {
      aboutClasses="about-navlink";
    }

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
      </header>
    )
  },
});

module.exports = Header;