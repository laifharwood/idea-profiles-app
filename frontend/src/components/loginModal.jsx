var React = require('react');

module.exports = React.createClass({
  render(){
    return <div show={this.props.showLogin}>
        <div className="modalExit">
            <button onClick={this.props.closeLogin} className="modalExitButton">
              <img src="../images/exit.png" width="20px" height="20px"></img>
            </button>
        </div>
        <div className="modalTitle">
          <h2>Drive Your Ideas</h2>
        </div>
        <hr className="h2Underline driveYourIdeasUnderline" />
        <div className="loginButtonContainer">
          <button className="linkedIn socialLogin">Sign in with LinkedIn</button>
          <button className="facebook socialLogin">Sign in with Facebook</button>
        </div>
        <form>
          <div className="loginForm">
            <input type="email" className="inputLogin" />
          </div>
          <div className="formLabel">
            <p>Email</p>
          </div>
          <div className="loginForm" >
            <input type="password" className="inputLogin"/>
          </div>
          <div className="formLabel">
            <p>Password</p>
          </div>
          <div className="goButtonContainer">
            <input type="submit" value="Go" className="submitLogin" />
          </div>
        </form>
        <br/>
    </div>
  }
});
