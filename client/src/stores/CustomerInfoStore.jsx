var AppDispatcher = require('../dispatchers/dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/constants');
var assign = require('react/lib/Object.assign');
var List = require('./ListStore');

var CHANGE_EVENT = 'change';

var getDate = function(){
  var date = new Date();
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth()+1).toString();
  var dd  = date.getDate().toString();
  return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]);
};

var customerInfo = {
  name: "",
  date: getDate(),
  invoiceNum: ""
};

var setName = function(name){
  customerInfo.name = name;
};
var setDate = function(date){
  customerInfo.date = date;
};
var setInvoiceNum = function(invoiceNum){
  customerInfo.invoiceNum = invoiceNum;
};
var saveInvoice = function(){
  var invoice = {
    customerInfo: customerInfo,
    productList: List.getList()
  };
  $.post("/invoice", invoice, function(response){
    console.log('server response: ', response)
  });
};
var CustomerInfoStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getName: function(){
    return customerInfo.name;
  },
  getDate: function(){
    return customerInfo.date;
  },
  getInvoiceNum: function(){
    return customerInfo.invoiceNum;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  console.log('got to store, actionType: ', action);
  switch(action.actionType){
    case Constants.cusInfoChange:
      console.log('store: ', action.data);
      setName(action.data.name);
      setDate(action.data.date);
      setInvoiceNum(action.data.invoiceNum);
      CustomerInfoStore.emit(CHANGE_EVENT);
      break;
    case Constants.save:
      saveInvoice();
      break;
    default:
      return true;
  }
});

module.exports = CustomerInfoStore;