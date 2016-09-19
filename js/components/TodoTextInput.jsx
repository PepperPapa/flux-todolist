var React = require("react");

var TodoTextInput = React.createClass({
  render: function() {
    return (
      <input
        id={this.props.id}
        placeholder={this.props.placeholder}
        autoFocus={true}
      />
    );
  }
});

module.exports = TodoTextInput;
