var React = require('react');
// var ReactRouter = require('react-router');
// var Link = ReactRouter.Link;
var Modal = require('react-bootstrap').Modal;
var LoginModal = require('./loginModal');
var SignUpModal = require('./signUpModal');

module.exports = React.createClass({
  getInitialState(){
    return{
      showLogin: false,
      showSignUp: false
    }
  },
  closeLogin(){
    this.setState({showLogin: false});
  },
  openLogin(){
    this.setState({showLogin: true});
  },
  closeSignUp(){
    console.log('closeSignUp called from headerNav');
    this.setState({showSignUp: false});
  },
  openSignUp(){
    this.setState({showSignUp: true});
  },
  render: function(){
    return <div className="headerNav">
      <span className="">
        <button className = "hamburger">
          <img src="../images/hamburger.png"></img>
        </button>
      </span>
      <span className="login" onClick={this.openLogin}>
        <button className="headerRightButton loginButton">
          Login
        </button>
      </span>
      <span className="login" onClick={this.openSignUp}>
        <button className="headerRightButton signUpButton">
          Sign Up
        </button>
      </span>
      <Modal show={this.state.showLogin} onHide={this.closeLogin} bsSize="large">
        <LoginModal closeLogin={this.closeLogin}></LoginModal>
      </Modal>
      <Modal show={this.state.showSignUp} onHide={this.closeSignUp} bsSize="large">
        <SignUpModal closeSignUp={this.closeSignUp}></SignUpModal>
      </Modal>
    </div>
  }
});
