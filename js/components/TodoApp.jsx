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
  }
});

module.exports = TodoApp;
