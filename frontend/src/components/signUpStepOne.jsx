var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  getInitialState: function(){
    return {
      one: '',
      two: '',
      three: 'checked',
      checked: ''
    }
  },
  changeSelection: function(e){
    if (e.target.defaultValue == '1'){
      this.setState({
        one: 'checked',
        two: '',
        three: ''
      })
    }else if (e.target.defaultValue == '2'){
      this.setState({
        one: '',
        two: 'checked',
        three: ''
      })
    }else if (e.target.defaultValue == '3'){
      this.setState({
        one: '',
        two: '',
        three: 'checked'
      })
    }
  },
  getFormData: function(e){
      e.preventDefault();
      var formData = {
        'firstName' : this.refs.firstName.value,
        'lastName' : this.refs.lastName.value,
        'email' : this.refs.email.value,
        'password' : this.refs.password.value
      }
      this.props.goToStepTwo(formData);
  },
  renderForm: function(){
    return <div>
      <div className="loginButtonContainer">
        <button className="linkedIn socialLogin">Sign in with LinkedIn</button>
        <button className="facebook socialLogin">Sign in with Facebook</button>
      </div>
      <form onSubmit={this.getFormData}>
        <div className="loginForm">
          <span className="">
            <input type="text" className="inputLoginHalf inputLoginHalfLeft" ref="firstName" />
          </span>
          <span className="">
            <input type="text" className="inputLoginHalf inputLoginHalfRight" ref="lastName" />
          </span>
        </div>
        <span className="formLabelHalf formLabelHalfLeft">
          First Name
        </span>
        <span className="formLabelHalf formLabelHalfRight">
          Last Name
        </span>
        <div className="loginForm">
          <input type="email" className="inputLogin" ref="email" />
        </div>
        <div className="formLabel">
          <p>Email</p>
        </div>
        <div className="loginForm" >
          <input type="password" className="inputLogin" ref="password"/>
        </div>
        <div className="formLabel">
          <p>Password</p>
        </div>
        <div className="formLabel loginForm">
          <label for="1">
            <input type="radio" name="buildOrDiscover" value="1" id="1" checked={this.state.one} onChange={this.changeSelection}/>
            <span className="radioLabelSignUp">Build Idea Profiles</span>
        </label>
        <label for="2">
          <input type="radio" name="buildOrDiscover" value="2" id="2" checked={this.state.two} onChange={this.changeSelection}/>
          <span className="radioLabelSignUp">Discover Ideas</span>
        </label>
        <label for="3">
          <input type="radio" name="buildOrDiscover" value="3" id="3" checked={this.state.three} onChange={this.changeSelection}/>
          <span className="radioLabelSignUp">Both</span>
        </label>
        </div>
        <div className="formLabel loginForm termsDiv">
          <input type="checkbox" id="checkbox" checked={this.state.checked} onChange={this.check}/>
          <Link to="/terms">
            <span className="termsLink">I agree to the Terms and Conditions</span>
          </Link>
        </div>
        <div className="goButtonContainer">
          <input type="submit" value="Go" className="submitLogin" />
        </div>
      </form>
    </div>
  },
  check: function(e){
    if (e.target.checked === false){
      this.setState({
        checked: ''
      });
    }else if (e.target.checked === true){
      this.setState({
        checked: 'checked'
      });
    };
  },
  render: function(){
    return <div>
        {this.renderForm()}
    </div>
  }
});
