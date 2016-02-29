const React = require('react');
const Header = require('./Header');
const HeroImage = require('./HeroImage');
const Reports = require('./Reports');
const About = require('./About');
const request = require('browser-request')
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
    }),

    this.fetchSpots();
  },

  fetchSpots(){
    request({method:'GET', url:'http://combo.azurewebsites.net/spots/', body:'{"relaxed":true}', json:true}, on_response);
    let _this = this;
    function on_response(er, response, body) {
      if(er){
        throw er;
      }else {
        console.log(body)
        _this.setState({spots:body});
      }
    }
  },

  fetchSpotReports(spot){
    spot = spot.toLowerCase().replace(/\s/g, '');
    request({method:'GET', url:'http://combo.azurewebsites.net/spots/#{spot}', body:'{"relaxed":true}', json:true}, on_response);
    let _this = this;
    function on_response(er, response, body) {
      if(er){
        throw er;
      }else {
        console.log(body)
        _this.setState({reports:body});
      }
    }

  },

  render() {
    let Child
    switch (this.state.route) {
      case '/spots': Child = HeroImage; break;
      //case '/spots/easternbeaches': Child = Reports; break;
      //case '/spots/northernbeaches': Child = Reports; break;
      //case '/spots/batemansbay': Child = Reports; break;
      case '/about': Child = About; break;
      default:      Child = HeroImage;
    }

    let route = this.state.route;
    let spots = this.state.spots;

  	return(
  		<div>
  			<Header
  				route={route}
          spots={spots}/>
  			<div>
  				<Child/>
  			</div>
  		</div>
  	)
  }

});

module.exports = PartyWave;