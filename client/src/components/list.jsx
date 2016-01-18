var React = require('react');
var Table = require('fixed-data-table').Table;
var Column = require('fixed-data-table').Column;
var Cell = require('fixed-data-table').Cell;

var ItemWrapper = React.createClass({
  handleQuantityChange: function(event){
    var data = {
      index: this.props.index,
      quantity: event.target.value
    };
    this.props.quantityChange(data);
  },
  handlePriceChange: function(event){
    var data = {
      index: this.props.index,
      price: event.target.value
    };
    this.props.priceChange(data);
  },
  handleRemove: function(){
    var index = this.props.index;
    this.props.remove(index);
  },
  render: function() {
    console.log(this.props.item);
    return (
      <tr>
        <td>{this.props.item.product}</td>
        <td><input type='number' value={this.props.item.quantity} min='0' onChange={this.handleQuantityChange} /></td>
        <td><input type='number' value={this.props.item.price} min='0.01' step='0.01' onChange={this.handlePriceChange} /></td>
        <td>${this.props.item.subtotal}</td>
        <td><button onClick={this.handleRemove}>remove</button></td>
      </tr>
    );
  }
});

var List = React.createClass({
  priceChange: function(data){
    this.props.priceChange(data);
  },
  quantityChange: function(data){
    this.props.quantityChange(data);
  },
  remove: function(index){
    this.props.remove(index);
  },
  render: function() {
    console.log('props: ', this.props.list );
    var totalQuantity = 0;
    var totalPrice = 0;
    this.props.list.forEach(function(item){
      totalPrice+=item.subtotal;
      totalQuantity+=Number(item.quantity);
    });
    var priceChange = this.priceChange;
    var quantityChange = this.quantityChange; 
    var remove = this.remove;
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{totalQuantity}</td>
              <td></td>
              <td>${totalPrice}</td>
              <td><button onClick={this.props.save}>Save</button></td>
            </tr>
          </tfoot>
          <tbody>
            {this.props.list.map(function(item, index){
              return <ItemWrapper key={index} index={index} item={item} priceChange={priceChange} quantityChange={quantityChange} remove={remove} />
            })}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = List;
