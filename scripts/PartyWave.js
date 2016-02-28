const React = require('react');
const Header = require('./Header');
const HeroImage = require('./HeroImage');
const About = require('./About');
require("../styles/PartyWave.css");

const PartyWave = React.createClass({

  getInitialState() {
      return {
        route: window.location.hash.substr(1)
      }
  },

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  },

  render() {
    let Child
    switch (this.state.route) {
      case '/spots': Child = HeroImage; break;
      case '/about': Child = About; break;
      default:      Child = HeroImage;
    }

    let route = this.state.route;

	return(
		<div>
			<Header
				route={route}/>
			<div>
				<Child/>
			</div>
		</div>
	)
  }

});

module.exports = PartyWave;