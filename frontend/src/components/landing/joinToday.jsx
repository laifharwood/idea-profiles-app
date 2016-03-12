var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  getInitialState: function(){
    return{
      dataArray: [
        {id: 'join1', price: 'Free', linkText: '', features: ['Create idea & personal profile', 'Post publicly', 'Share feedback']},
        {id: 'join2', price: '$3/mo', linkText: 'First Month Free', features: ['Everything above', 'Post with \"Request Access\"', 'Multiple ideas and profiles']},
        {id: 'join3', price: '$7/mo', linkText: 'First Month Free', features: ['Everything above', 'Collaborate with TC Team', 'Electronic NDA\'s', 'Host idea for 2 yrs']}
      ]
    }
  },
  render: function(){
      return <div>
        {this.renderData()}
      </div>
  },
  renderData: function(){
    return this.state.dataArray.map(function(prop, index){
       return <div key={prop.id}>
         <div>
           <button className="yellowBorderButton">{prop.price}</button>
         </div>
         <div className = "linkTextContainer">
           <Link to="/login" className="linkText">{prop.linkText}</Link>
         </div>
         <div>
           {this.renderFeatures(prop.features)}
         </div>
       </div>
     }.bind(this));
  },
  renderFeatures: function(features){
      return features.map(function(feature, index){
        return <div className="descriptionBlock">
          <p className="description">{feature}</p>
        </div>
      });
  }
});
