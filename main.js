
$('.btn').on('click', function(){
  var city = $('input').val();
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=77734ed9e6c447983b0cfbb12134387d",
    dataType: "json"
  })
  .done(function(res){
    console.log(res);
  })
})
