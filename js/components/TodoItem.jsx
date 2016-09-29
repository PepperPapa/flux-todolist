var React = require("react");
var classNames = require("classnames");

var TodoTextInput = require("./TodoTextInput");
var TodoActions = require("../actions/TodoActions");

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
          })}
          key={todo.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this._onToggleComplete}
          />
          <label>
            {todo.text}
          </label>
          <button className="destroy" onClick={this._onDestroyClick} />
        </div>
        {input}
      </li>
    );
  },

  _onToggleComplete: function() {
    TodoActions.toggleComplete(this.props.todo);
  },

  _onDestroyClick: function() {
    TodoActions.destroy(this.props.todo.id);
  }
});

module.exports = TodoItem;
