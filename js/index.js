// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

var newCity = prompt("How's the weather up there in:");

$.simpleWeather({
    location: newCity,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
//      $('.temp').text(weather.temp + "F");
        $('.type-it').typeIt({
            strings: [weather.temp + "F", weather.city],
            speed: 500,
            lifeLike: false,
            cursor: false
          });
//      $('.city').text(weather.city);
    
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });