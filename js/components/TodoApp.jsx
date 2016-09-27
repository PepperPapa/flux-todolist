var React = require("react");

var Header = require("./Header");
var MainSection = require("./MainSection");
var Footer = require("./Footer");
var TodoStore = require("../stores/TodoStore.js");

function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
  }
}

var TodoApp = React.createClass({
  getInitialState: function() {
      return getTodoState();
  },

  componentDidMount: function() {
      TodoStore.addChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <Header />
        <MainSection
          allTodos={this.state.allTodos}
        />
        <Footer />
      </div>
    );
  },

  _onChange: function() {
    this.setState(getTodoState());
  }
});

module.exports = TodoApp;
