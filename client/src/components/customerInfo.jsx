var React = require('react');

var CustomerInfo = React.createClass({
  getInitialState: function(){
    return {
      name: this.props.info.name,
      date: this.props.info.date,
      invoiceNum: this.props.info.invoiceNum
    };
  },

  handleNameChange: function(event){
    var value = event.target.value;
    this.setState({
      name: value
    });
  },
  handleDateChange: function(event){
    var value = event.target.value;
    this.setState({
      date: value
    });
  },
  handleInvoiceNumChange: function(event){
    var value = event.target.value;
    this.setState({
      invoiceNum: value
    });
  },
  handleSubmit: function(event){
    if(event.keyCode === 13 || event.type === 'click'){
      var cusInfo = {
        name: this.state.name,
        date: this.state.date,
        invoiceNum: this.state.invoiceNum
      };
      this.props.infoChange(cusInfo);
    }
  },
  render: function(){
    return (
      <div>
        <input type="text" value={this.state.name} placeholder="Enter Name" onChange={this.handleNameChange} className="form-control" />
        <input type="date" value={this.state.date} onChange={this.handleDateChange} className="form-control"/>
        <input type="text" value={this.state.invoiceNum} placeholder="Enter Invoice Number" onChange={this.handleInvoiceNumChange} onKeyDown={this.handleSubmit} className="form-control"/>
        <button onClick={this.handleSubmit} className="btn btn-info">Save Info</button>
      </div>
    );
  }
});

module.exports = CustomerInfo;