var React = require('react');
var request = require('superagent');
var SignUpStepOne = require('./signUpStepOne');
var SignUpStepTwo = require('./signUpStepTwo');

module.exports = React.createClass({
  getInitialState: function(){
    return{
      showStepOne: true,
      showStepTwo: false
    };
  },
  goToStepTwo: function(formData){
    this.setState({
      showStepOne: false,
      showStepTwo: true
    });
    // request
    // // .get('/user/login')
    // // .query(data)
    // .post('/user/signup')
    // .query(formData)
    // // .get('/api/userIdeas')
    // // .withCredentials()
    // .set('Accept', 'application/json')
    // .end(function(err, res){
    //   //Dismiss or Show error message
    //   console.log(res);
    // })
  },
  render: function(){
    return <div>
      <div className="modalExit">
          <button onClick={this.props.closeSignUp} className="modalExitButton">
            <img src="../images/exit.png" width="20px" height="20px"></img>
          </button>
      </div>
      <div className="modalTitle">
        <h2>Drive Your Ideas</h2>
      </div>
      <hr className="h2Underline driveYourIdeasUnderline" />
      <div>
        {this.state.showStepOne ? <SignUpStepOne goToStepTwo={this.goToStepTwo} /> : null}
        {this.state.showStepTwo ? <SignUpStepTwo /> : null}
      </div>
    </div>
  }
});
