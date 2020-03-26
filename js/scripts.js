$(document).ready(function() { 
  $("form#love").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

   
    if (gender === 'male' && age < 100) {
      $('#male').show();
    
    } else {
      (gender === 'female' && age < 100);
      $('#female').show();
  }
  console.log(female);
  event.preventDefault();
  });
});