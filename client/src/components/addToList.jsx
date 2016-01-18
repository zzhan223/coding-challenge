var React = require('react');

var AddToList = React.createClass({
  getInitialState: function(){
    return {
      product: '',
      quantity: 0,
      price: 0,
      subtotal: 0
    };
  },
  handleAdd: function(event){
    if(event.keyCode === 13 || event.type === 'click'){
      var item = {
        product: this.state.product,
        quantity: this.state.quantity,
        price: this.state.price,
        subtotal: this.state.subtotal
      };
      this.props.add(item);
    }
  },
  productChange: function(event){
    var value = event.target.value;
    this.setState({
      product: value
    });
  },
  quantityChange: function(event){
    var value = event.target.value;
    this.setState({
      quantity: value,
      subtotal: value*this.state.price
    });
  },
  priceChange: function(event){
    var value = event.target.value;
    this.setState({
      price: value,
      subtotal: value*this.state.quantity
    });
  },
  render: function(){
    return (
      <div>
        <select value={this.state.product} onChange={this.productChange}>
          <option>Select Product</option>
          <option value='Apple'>Apple</option>
          <option value='Banana'>Banana</option>
          <option value='Cherry'>Cherry</option>
        </select>
        <input type="number" value={this.state.quantity} placeholder="quantity" min="1" onChange={this.quantityChange} />
        <input type="number" value={this.state.price} placeholder="price" step="0.01" min="0.01" onChange={this.priceChange} />
        <span>subtotal: ${this.state.subtotal}</span>
        <button onClick={this.handleAdd} >submit</button>
      </div>
    );
  }
});

module.exports = AddToList;