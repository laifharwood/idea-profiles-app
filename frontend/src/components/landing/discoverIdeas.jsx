var React = require('react')

module.exports = React.createClass({
  getInitialState: function(){
    return{
      dataArray: [
        {title: 'Browse', image: '../images/search.png', description: 'Business, entertainment, fashion, and more'},
        {title: 'Contribute', image: '../images/horn.png', description: 'Offer private, public, & anonymous feedback or whatever else',},
        {title: 'Impact', image: '../images/upGraph.png', description: 'See the results of your effors pay off and help make a difference'}
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
