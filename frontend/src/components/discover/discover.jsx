var React = require('react');
var HeaderNav = require('../headerNav');

module.exports = React.createClass({
  getInitialState: function(){
    return{
      businessArray: [
        {title: 'Product',
          image: './images/present.png',
          titleTwo: 'Service',
          imageTwo: './images/group.png'
        },
        {title: 'Consignment',
          image: './images/consignment.png',
          titleTwo: 'Non-Profit',
          imageTwo: './images/heart.png'
        }
      ],
      entertainmentArray: [
        {title: 'Film',
          image: './images/videoCamera.png',
          titleTwo: 'Music',
          imageTwo: './images/music.png'
        },
        {title: 'Book',
          image: './images/book.png',
          titleTwo: 'Photo',
          imageTwo: './images/camera.png'
        },
        {title: 'Theater',
          image: './images/smileFrown.png',
          titleTwo: 'Dance',
          imageTwo: './images/personStanding.png'
        },
        {title: 'Art',
          image: './images/paintbrush.png',
          titleTwo: 'Other',
          imageTwo: './images/plus.png'
        }
      ]
    }
  },
  renderSection: function(array){
    return array.map(function(prop){
      return <div>
        <div>
          <button className="yellowBorderBox">
            <img src ={prop.image} />
            <div><h3>{prop.title}</h3></div>
          </button>
          <button className="yellowBorderBox">
            <img src ={prop.imageTwo} />
            <div><h3>{prop.titleTwo}</h3></div>
          </button>
        </div>
      </div>
    });
  },
  render: function(){
    return <div>
    <div className="row headerImageDiscover">
      <HeaderNav></HeaderNav>
      <div className="logo col-md-12">
        <h1 className="thought">DISCOVER</h1>
        <hr className="headerHr discoverHeadingUnderline" />
        <h1 className="cab">IDEAS</h1>
      </div>
      <div className="subHeading">
        <div>find ideas, contribute, and see the profitable impact</div>
      </div>
      <div className="browseInputGroup">
          <input type="text" className="browseTextInput" />
          <span>
            <input type="submit" value="browse" className="browseButtonInput"/>
          </span>
      </div>
    </div>
    <div className="afterHeaderDiscover">
      <h2>Business</h2>
      <hr className="businessUnderline h2Underline" />
      {this.renderSection(this.state.businessArray)}
    </div>
    <div className="afterHeaderDiscover entertainment">
      <h2>Entertainment</h2>
      <hr className="h2Underline entertainmentUnderline" />
      {this.renderSection(this.state.entertainmentArray)}
    </div>
    <div className="editorsPicksContainer">
      <h2>Editors Picks</h2>
      <hr className="h2Underline editorsPicksUnderline" />
      <span className="ideaTitle">Shop43</span>
      <button className="likeButton"><img src="./images/star.png" className="starImage"></img></button>
      <button className="profileAndMessageButtons">Message</button>
      <button className="profileAndMessageButtons">Profile</button>
      <div>
        <img src="./images/shop43.png"></img>
      </div>
      <div className="ideaDescriptionContainer">
        <p className="ideaDescription">
          The millennial generation is looking to shop their way -
          faster, easier and real deals on every item. Shop43 brings
          you up and coming startup brand names that at better prices
          than traditional name brand items. Anit only takes 43 seconds.
        </p>
      </div>
    </div>
  </div>
  }
});
