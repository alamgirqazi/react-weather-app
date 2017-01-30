var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, hashHistory, IndexRoute} = require("react-router");
var Main = require("Main");
var Nav = require("Nav");
var Weather = require("Weather");
var About = require('About');
var Examples = require('Examples');

//load foundation

require('style!css!foundation-sites/dist/foundation.min.css')

$(document).foundation();

ReactDOM.render(
  //Props passed
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}></Route>
      <Route path="examples" component={Examples}></Route>
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById("app")
);
