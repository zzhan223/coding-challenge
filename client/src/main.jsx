var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app');

var element = React.createElement(App);
ReactDOM.render(element, document.querySelector('#main'));