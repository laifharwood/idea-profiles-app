var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Landing = require('./components/landing/landing');
var Discover = require('./components/discover/discover');


module.exports = (
    <Router>
        <Route path="/" component={Landing}></Route>
        <Route path="/discover" component={Discover}></Route>
    </Router>
)
