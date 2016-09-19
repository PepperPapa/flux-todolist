var React = require("react");

var TodoTextInput = require("./TodoTextInput");

var Header = React.createClass({
  render: function () {
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
});

module.exports = Header;
