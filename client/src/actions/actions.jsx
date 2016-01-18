var Dispatcher = require('../dispatchers/dispatcher');
var Constants = require('../constants/constants');

var Actions = {
  changeCustomerData: function(info){
    Dispatcher.handleViewAction({
      actionType: Constants.cusInfoChange,
      data: info
    });
  },
  addItem: function(item){
    Dispatcher.handleViewAction({
      actionType: Constants.addItem,
      data: item
    });
  },
  removeItem: function(index){
    Dispatcher.handleViewAction({
      actionType: Constants.removeItem,
      data: index
    });
  },
  priceChange: function(item){
    Dispatcher.handleViewAction({
      actionType: Constants.priceChange,
      data: item
    });
  },
  quantityChange: function(item){
    Dispatcher.handleViewAction({
      actionType: Constants.quantityChange,
      data: item
    });
  },
  saveInvoice: function(){
    Dispatcher.handleViewAction({
      actionType: Constants.save,
      data: null
    });
  }
};

module.exports = Actions;