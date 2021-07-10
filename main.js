$('button').on('click', function(){
  var city = $("input").val();
  $.ajax({
    url : "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=place_for_token",
    dataType : "json"
  })
  .done(function(res) {
    console.log(res);
    var text = '<h4>Grad: '+res.name+'</h4>';
    text+='<h5>Temperatura: '+res.main.temp+'</h5>';
    text+='<h6>Maksimalna temperatura: '+res.main.temp_max+'</h6>';
    text+='<h6>Minimalna temperatura: '+res.main.temp_min+'</h6>';
    text+='<h5>Vetar: '+res.wind.speed+'</h5>'
    $('#display').html(text);
  })
})
