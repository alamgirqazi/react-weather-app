var React = require('react');

var WeatherMessage = ({temp,location})=> {
     
    //  var {temp, location}= props;

    return (
      <div>
        <p>It's {temp} degree in {location}</p>
      </div>
    );
  };


module.exports = WeatherMessage;
