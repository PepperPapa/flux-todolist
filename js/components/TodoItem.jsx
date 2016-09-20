var React = require("react");
var classNames = require("classnames");

var TodoTextInput = require("./TodoTextInput");

var TodoItem = React.createClass({
  getInitialState: function() {
    return {isEditing: false};
  },

  render: function() {
    var todo = this.props.todo;

    var input;
    if (this.state.isEditing) {
      input = <TodoTextInput className="edit" value={todo.text} />;
    }
    return (
      <li className={classNames({
            "completed": todo.complete,
            "editing": this.state.isEditing
          })
      }>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
          />
          <label>
            {todo.text}
          </label>
          <button className="destroy" />
        </div>
        {input}
      </li>
    );
  }
});

module.exports = TodoItem;
