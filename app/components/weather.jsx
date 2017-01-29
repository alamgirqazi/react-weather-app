var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");
var Weather = React.createClass({
  getInitialState: function() {
    return {
      // location: 'Miami',
      // temp: 88
      isLoading: false
    };
  },
  handleSearch: function(location) {
    var that = this;


    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({location: location, temp: temp,
        isLoading: false});
    }, function(errorMessage) {
      that.setState({isLoading: false});

      alert("error" + errorMessage);
    });
  },
  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    return (
      <div>
        <h3>this is weather component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
