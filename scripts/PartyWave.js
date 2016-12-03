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
    request({method:'GET', url:'http://surfapi.cloudapp.net/spots/', body:'{"relaxed":true}', json:true}, on_response);
    let _this = this;
    function on_response(er, response, body) {
      if(er){
        throw er;
      }else {
        _this.setState({spots:body});
      }
    }
  },

  fetchSpotReports(spot){
    spot = spot.toLowerCase().replace(' ','-')
    let spotPath = `#${this.state.route}/${spot}`;
    let url = `http:\/\/surfapi.cloudapp.net/spots/${spot}`;
    request({method:'GET', url:url, body:'{"relaxed":true}', json:true}, on_response);
    let _this = this;

    function on_response(er, response, body) {
      if(er){
        throw er;
      }else {
        if(window.location.hash != '#/spots/' + spot){
          let spotPath = `#${_this.state.route}/${spot}`;
          window.location.href = spotPath;
        }
        _this.setState({reports:body});
      }
    }
  },

  render() {
    let Child
    switch (this.state.route) {
      case '/spots': Child = HeroImage; break;
      //todo: make these spots dynamic
      case '/spots/eastern-beaches': Child = Reports; break;
      case '/spots/northern-beaches': Child = Reports; break;
      case '/spots/south-coast': Child = Reports; break;
      case '/about': Child = About; break;
      default:      Child = HeroImage;
    }

    let route = this.state.route;
    let spots = this.state.spots;
    let reports = this.state.reports;

  	return(
  		<div>
  			<Header
  				route={route}
          spots={spots}
          fetchSpotReports={this.fetchSpotReports}/>
  			<div>
  				<Child
           fetchSpotReports={this.fetchSpotReports}
           reports={reports}/>
  			</div>
  		</div>
  	)
  }

});

module.exports = PartyWave;