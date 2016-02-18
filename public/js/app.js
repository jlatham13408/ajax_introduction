var weatherData = {};
$(document).ready(function(){
  var baseUrl = 'https://api.forecast.io/forecast/';
  var name = "Jonnel Latham";
  $('#get-weather').on('click', getWeather);



  function buildUrl(lat, lon){
    // return 'https://api.forecast.io/forecast/df654e5baa018e9c46ebd4162f6aa910/37.8267,-122.423'
    return baseUrl + apiKey+'/'+lat+','+lon;
  }

  function getWeather(){
    var lat = $('#latitude').val();
    var lon = $('#longitude').val();
    var options = {
      url: buildUrl(lat, lon),
      dataType: 'jsonp',
      success: successHandler,
      error: errorHandler
    };

    $.ajax(options);
  }


  function successHandler(data){
    weatherData = data;
    $('#output').text(JSON.stringify(data));
    console.log(weatherData);
  }

  function errorHandler(err){
    console.log(err);
  }
});
