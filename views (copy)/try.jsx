var React = require('react');
var ReactDOM = require('react-dom');


var HelloWorld = React.createClass({
  render: function(){
    return( <h1>Hello, World!</h1>);
  }
});





// module.exports = function(){

	ReactDOM.render(React.createElement(HelloWorld,
document.getElementById('x'));
// };