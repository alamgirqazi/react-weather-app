var React = require('react');
var ReactDOM = require ('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error',
      message: 'city not found'
    };
  },
  propTypes: {
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
       var {title, message} = this.props;

    var modelMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>City Not Found !</p>
        <p>please try another city name e.g</p>
        <p>
          Austin <br/>
          New York <br/>
          Rawalpindi <br/>
        </p>

        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modelMarkup));
$(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {

   
   return (

     <div></div>
   )


  }
});

module.exports = ErrorModal;
