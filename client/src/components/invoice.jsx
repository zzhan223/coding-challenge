var React = require('react');
var CustomerInfo = require('./customerInfo');
var Products = require('./products');
var CustomerInfoStore = require('../stores/CustomerInfoStore');
var ListStore = require('../stores/ListStore');
var Actions = require('../actions/actions');

var Invoice = React.createClass({
  getInitialState: function(){
    return {
      customerInfo: { 
        name: CustomerInfoStore.getName(),
        date: CustomerInfoStore.getDate(),
        invoiceNum: CustomerInfoStore.getInvoiceNum()
      },
      showProducts: false,
      list: ListStore.getList()
    };
  },
  componentDidMount: function(){
    CustomerInfoStore.addChangeListener(this._onCustomerInfoChange);
    ListStore.addChangeListener(this._onListChange);
  },
  componentWillUnmount: function(){
    CustomerInfoStore.removeChangeListener(this._onCustomerInfoChange);
    ListStore.addChangeListener(this._onListChange);
  },
  handlePriceChange: function(data){
    Actions.priceChange(data);
  },
  handleQuantityChange: function(data){
    Actions.quantityChange(data);
  },
  handleChange: function(info){
    console.log('info in Invoice: ', info);
    Actions.changeCustomerData(info);
  },
  handleAdd: function(item){
    Actions.addItem(item);
  },
  handleRemove: function(index){
    Actions.removeItem(index);
  },
  saveInvoice: function(){
    Actions.saveInvoice();
  },
  _onCustomerInfoChange: function(){
    console.log('from store in component: ', CustomerInfoStore.getInvoiceNum());
    this.setState({ customerInfo: { 
      name: CustomerInfoStore.getName(),
      date: CustomerInfoStore.getDate(),
      invoiceNum: CustomerInfoStore.getInvoiceNum() 
    }, showProducts: true});
  },
  _onListChange: function(){
    this.setState({
      list: ListStore.getList()
    });
  },
  render: function(){
    return (
      <div>
        <CustomerInfo info={this.state.customerInfo} infoChange={this.handleChange} />
        { this.state.showProducts ? <Products list={this.state.list} add={this.handleAdd} remove={this.handleRemove} priceChange={this.handlePriceChange} quantityChange={this.handleQuantityChange} save={this.saveInvoice} /> : null }
      </div>
    );
  }
});

module.exports = Invoice;