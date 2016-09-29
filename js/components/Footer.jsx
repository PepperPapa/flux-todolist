var React = require("react");

var Footer = React.createClass({
    render: function () {
      var allTodos = this.props.allTodos;
      var total = Object.keys(allTodos).length;

      if (total === 0) {
        return null;
      }

      var completed = 0;
      for (var key in allTodos) {
        if (allTodos[key].completed) {
          completed++;
        }
      }

      var clearCompletedButton;
      if (completed) {
        clearCompletedButton =
          <button
            id="clear-completed"
            onClick={this._onClearCompletedClick}>
            clear completed ({completed})
          </button>;
      }

      var itemsLeft = total - completed;
      var itemsLeftPhrase = itemsLeft === 1 ? ' item' : ' items';
      itemsLeftPhrase += "left";

      return (
        <footer id="footer">
          <span id="todo-count">
            <strong>
              {itemsLeft}
            </strong>
            {itemsLeftPhrase}
          </span>
          {clearCompletedButton}
        </footer>
      );
    },

    _onClearCompletedClick: function() {
      TodoActions.destroyCompleted();
    }
});

module.exports = Footer;
