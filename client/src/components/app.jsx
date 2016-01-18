var React = require('react');
// var ReactDOM = require('react-dom');
var Init = require('./init');
var Invoice = require('./invoice');

var App = React.createClass({
  getInitialState: function() {
    return {
      invoicePage: false
    };
  },
  handleCreate: function(){
    this.setState({
      invoicePage: true
    });
  },
  render: function(){
    if(this.state.invoicePage){
      return (
        <div>
          <Invoice />
        </div>
      );
    }
    return (
      <div>
        <Init handleCreate={this.handleCreate}/>
      </div>
    );
  }
});

module.exports = App;
// var element = React.createElement(App);
// ReactDOM.render(element, document.querySelector('#main'));