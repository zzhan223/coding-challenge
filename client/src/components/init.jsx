var React = require('react');

var Init = React.createClass({
  handleCreate: function(){
    this.props.handleCreate();
  },
  render: function(){
    var style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-50px',
      marginLeft: '-50px'
    };
    return (
      <div>
        <button className="btn btn-success" style={style} onClick={this.handleCreate}>Create new Invoice</button>
      </div>
    );
  }
});

module.exports = Init;