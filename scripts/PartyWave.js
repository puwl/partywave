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
  	
    switch (this.state.route) {
      case '/': break;
      case '/spots': break;
      case '/about': break;
    }

    let Child
    switch (this.state.route) {
      case '/spots': Child = HeroImage; break;
      case '/about': Child = About; break;
      default:      Child = HeroImage;
    }

	return(
		<div>
			<Header/>
			<div>
				<Child/>
			</div>
		</div>
	)
  }

});

module.exports = PartyWave;


/*
var App = React.createClass({
  getInitialState(){
    let	storyData = this.loadData();
    let selectedStory = null;
    let selectedStories = 0;

    return{
      storyData: storyData,
      selectedStory: selectedStory,
      selectedStories: selectedStories
    };
  },
  loadData(){
  	return require("json!../Data/stories.json");
  },
  selectStory(selectedStory){
  	var selectedStory = selectedStory;
    var selectedStories = this.state.selectedStories;

    if (!selectedStory["selected"]) {
      selectedStories++;
      selectedStory["selected"] = true;
    }
    this.setState({selectedStory:selectedStory, selectedStories:selectedStories});
  },
  render(){
  	var storyData = this.state.storyData;
  	var selectedStory = this.state.selectedStory;
  	var selectedStories = this.state.selectedStories;
  	var selectStory = this.selectStory;

    return (
      <div className="app-container">
      	<Header/>
        <Findings
          storyData={storyData}/>
        <Recommendations/>
      	<StorySelectors 
      		storyData={storyData}
      		selectedStory={selectedStory}
      		selectedStories={selectedStories}
      		selectStory={selectStory}/>
      	<Footer/>
      </div>
    )
  }
});
*/