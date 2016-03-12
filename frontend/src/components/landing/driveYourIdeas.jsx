var React = require('react')

module.exports = React.createClass({
  getInitialState: function(){
    return{
      dataArray: [
        {title: 'Professional', image: '../images/sunglasses.png', description: 'Explain your idea with videos, images, charts, and more'},
        {title: 'Secure', image: '../images/lock.png', description: 'Control your share settings and who can view your idea',},
        {title: 'Easy', image: '../images/checkmark.png', description: 'User friendly enough for everyone to write home about'}
      ]
    }
  },
  render: function(){
      return <div>
        {this.renderData()}
      </div>
  },
  renderData: function(){
    return this.state.dataArray.map(function(prop){
       return <div>
         <img src={prop.image} className="icon" />
         <h3>{prop.title}</h3>
         <p className="description">{prop.description}</p>
       </div>
     });
  }
});
