var AppDispatcher = require('../dispatchers/dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');
var Constants = require('../constants/constants');

var EVENT = 'change';

var _store = {
  list: []
};

var add = function(item){
  _store.list.push(item);
};

var remove = function(index){
  _store.list.splice(index, 1);
};

var quantityChange = function(data){
  _store.list[data.index].quantity = data.quantity;
  _store.list[data.index].subtotal = data.quantity * _store.list[data.index].price;
};

var priceChange = function(data){
  _store.list[data.index].price = data.price;
  _store.list[data.index].subtotal = data.price * _store.list[data.index].quantity;
};

var ListStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(EVENT, cb);
  },
  getList: function(){
    return _store.list;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case Constants.addItem:
      add(action.data);
      ListStore.emit(EVENT);
      break;
    case Constants.removeItem:
      remove(action.data);
      ListStore.emit(EVENT);
      break;
    case Constants.priceChange:
      priceChange(action.data);
      ListStore.emit(EVENT);
      break;
    case Constants.quantityChange:
      quantityChange(action.data);
      ListStore.emit(EVENT);
      break;
    default:
      return true;
  }
});

module.exports = ListStore;