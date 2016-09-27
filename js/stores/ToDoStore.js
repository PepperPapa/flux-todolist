var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

var AppDispatcher = require("../dispatcher/AppDispatcher");
var TodoConstants = require("../constants/TodoConstants");

var CHANGE_EVENT = "change";
var _todos = {};

function create(text) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

var TodoStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
      return _todos;
    },

    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },
});

AppDispatcher.register(function(action) {
  var text;

  switch (action.actionType) {
    case TodoConstants.TODO_CREATE:
      text = action.text.trim();
      if (text !== "") {
        create(text);
        TodoStore.emitChange();
      }
      break;
    default:

  }
});

module.exports = TodoStore;
