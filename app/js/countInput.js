$(function() {
    $("textarea[id='text-count']").keyup(function count(){
    let number = $("textarea[id='text-count']").val().length; 
    $("#count").html(+number);
    });
});



$(function() {
  $("input[id='text-counter']").keyup(function count(){
    let number = $("input[id='text-counter']").val().length;
    $("#counter").html(+number); 
    }); 
});


$(function() {
  $("input[id='text-counters']").keyup(function count(){
    let number = $("input[id='text-counters']").val().length;
    $("#counters").html(+number); 
    }); 
});
 


