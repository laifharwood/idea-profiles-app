var React = require('react');
var HeaderNav = require('../headerNav');
var DriveYourIdeas = require('./driveYourIdeas');
var DiscoverIdeas = require('./discoverIdeas');
var JoinToday = require('./joinToday');
var Modal = require('react-bootstrap').Modal;
var SignUpModal = require('../signUpModal');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


module.exports = React.createClass({
  getInitialState(){
    return{
      showSignUp: false
    }
  },
  closeSignUp(){
    console.log('closeSignUp called');
    this.setState({showSignUp: false});
  },
  openSignUp(){
    this.setState({showSignUp: true});
  },
  render: function(){
    return <div>
    <div className="row headerImage">
      <HeaderNav></HeaderNav>
      <div className="logo">
        <h1 className="thought">THOUGHT</h1>
        <hr className="headerHr landingHeaderUnderline" />
        <h1 className="cab">CAB</h1>
      </div>
      <div className="subHeading">
        <div>find and share ideas privately or to a network of brilliant thinkers</div>
        <button className="tryNow headerButton" onClick={this.openSignUp}>Try Now</button>
        <Link to="/discover">
          <button className="browse headerButton">Browse</button>
        </Link>
      </div>
    </div>
    <div className="howItWorks">
      <div className="howItWorksLabel">how it works</div>
      <div className="glyphicon glyphicon-chevron-down downArrow"></div>
      <h2>Drive Your Ideas</h2>
      <hr className="h2Underline driveYourIdeasUnderline" />
      <DriveYourIdeas></DriveYourIdeas>
      <div className="grayBackground">
        <h2>Discover Ideas</h2>
        <hr className="h2Underline discoverIdeasUnderline" />
        <DiscoverIdeas></DiscoverIdeas>
      </div>
      <h2>Join Today</h2>
      <hr className="h2Underline joinTodayUnderline" />
      <JoinToday></JoinToday>
      <div className="cancelAnytime">
        <p>Cancel anytime...</p>
        <p>But we'll do our best to keep you around</p>
      </div>
    </div>
    <Modal show={this.state.showSignUp} bsSize="large">
      <SignUpModal closeSignUp={this.closeSignUp}></SignUpModal>
    </Modal>
  </div>
  }
});
