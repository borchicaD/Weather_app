<<<<<<< Updated upstream
$('button').on('click', function(){
  var city = $("input").val();
=======
$('.btn').on('click',function () {
  var city = $('input').val();
>>>>>>> Stashed changes
  $.ajax({
    url : "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=77734ed9e6c447983b0cfbb12134387d",
    dataType : "json"
  })
<<<<<<< Updated upstream
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
=======
   .done(function (res){
     console.log(res+"yeah");
   })
  })
>>>>>>> Stashed changes
