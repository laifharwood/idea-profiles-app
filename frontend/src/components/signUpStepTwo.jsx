var React = require('react');

module.exports = React.createClass({
  selectedStyle: {
    color: 'white',
    background: '#EFC611'
  },
  deselectedStyle: {
    color: '#EFC611',
    background: '#ffffff'
  },
  getInitialState: function(){
    return {
      dataArray: [
        {title: 'One Idea & Personal Profile', description: 'A good way to get started.', free: true, three: true, seven: true},
        {title: 'Post Publicly', description: 'Share you idea profile to the ThoughtCab community.', free: true, three: true, seven: true},
        {title: 'Share Feedback', description: 'Comment, like, and direct message on friends and colleagues idea profiles.', free: true, three: true, seven: true},
        {title: 'Post with \"Request Access\"', description: 'Protect your idea by accepting or declining those who request to view your idea profile', free: false, three: true, seven: true},
        {title: 'Multiple Ideas and Profiles', description: 'For those with all the good ideas.', free: false, three: true, seven: true},
        {title: 'Collaborate with TC Experts', description: 'Get feedback from the ThoughtCab experts and see huge results', free: false, three: false, seven: true},
        {title: 'Electronic NDA\'s', description: 'Protect your idea by having people sign electronic Non-Disclosure Agreements before viewing your idea.', free: false, three: false, seven: true}
      ],
      sevenStyle: this.selectedStyle,
      threeStyle: this.deselectedStyle,
      freeStyle: this.deselectedStyle
    }
  },
  renderFeatures: function(){
    return this.state.dataArray.map(function(feature, index){
      return <div>
        <button className="featureTitleDescrip">
          <h4>{feature.title}</h4>
          <p className="featureDescrip">{feature.description}</p>
        </button>
        {feature.free ? <button className="checkMarkSignUp"><img src="./images/grayCheckMark.png" className="checkMarkImage"></img></button> : null}
        {feature.three ? <button className="checkMarkSignUp"><img src="./images/grayCheckMark.png" className="checkMarkImage"></img></button> : null}
        {feature.seven ? <button className="checkMarkSignUp"><img src="./images/grayCheckMark.png" className="checkMarkImage"></img></button> : null}
      </div>
    });
  },
  selectPricing: function(plan){
    if (plan == 7){
      this.setState({
        sevenStyle: this.selectedStyle,
        threeStyle: this.deselectedStyle,
        freeStyle: this.deselectedStyle
      });
    }else if (plan == 3){
      this.setState({
        sevenStyle: this.deselectedStyle,
        threeStyle: this.selectedStyle,
        freeStyle: this.deselectedStyle
      });
    }else if (plan == 0){
      this.setState({
        sevenStyle: this.deselectedStyle,
        threeStyle: this.deselectedStyle,
        freeStyle: this.selectedStyle
      });
    }
  },
  render: function(){
    return <div className="planContainer">
      <div>
        <button className="signUpQuote">
          <div >"The only way to do great work is to love what you do"</div>
          <div>-Steve Jobs</div>
        </button>
        <button style={this.state.sevenStyle} className="pricingPlanButton" onClick={this.selectPricing.bind(this, 7)}>$7/mo</button>
        <button style={this.state.threeStyle} className="pricingPlanButton" onClick={this.selectPricing.bind(this, 3)}>$3/mo</button>
        <button style={this.state.freeStyle} className="pricingPlanButton" onClick={this.selectPricing.bind(this, 0)}>Free</button>
      </div>
      {this.renderFeatures()}
    </div>
  }
});
