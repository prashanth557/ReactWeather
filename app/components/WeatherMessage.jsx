var React = require ('react');

// var WeatherMessage = React.createClass({
//     render:function(){
//         var {temp,location} =this.props;
//         return(
//         <div>
//           <h3>Its {temp} degress in {location}</h3>
//         </div>
//         );
//     }
// });


var WeatherMessage =(props) =>{
    var {temp,location} =props;
    return(
    <div>
      <h3>Its {temp} degress in {location}</h3>
    </div>
    );
};

module.exports = WeatherMessage;
