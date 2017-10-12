var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var About = require('About');
var Wheather = require ('Wheather');
var Examples = require ('Examples');

var { Route, Router, IndexRoute, hashHistory } = require('react-router');
ReactDOM.render(
  <Router history={hashHistory}>
     <Route path='/' component={Main}>
       <Route path='/about' component ={About} />
       <Route path='/examples' component ={Examples} />
       <IndexRoute component ={Wheather}/>
     </Route>
  </Router>
  ,document.getElementById('app')
);
