var React = require('react');
var AddToList = require('./addToList');
var List = require('./list');

var Products = React.createClass({
  render: function(){
    return (
      <div>
        <AddToList add={this.props.add} />
        <List list={this.props.list} remove={this.props.remove} save={this.props.save} priceChange={this.props.priceChange} quantityChange={this.props.quantityChange} />
      </div>
    );
  }
});

module.exports = Products;