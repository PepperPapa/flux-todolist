var React = require("react");

var Header = require("./Header");
var MainSection = require("./MainSection");
var Footer = require("./Footer");

var TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <MainSection />
        <Footer />
      </div>
    );
  }
});

module.exports = TodoApp;
