$(function() {

    $("textarea[id='text-count']").keyup(function count(){
    number = $("textarea[id='text-count']").val().length;
    $("#count").html(+number);
    });

});


$(function() {
  $("input[id='text-counter']").keyup(function count(){
    number = $("input[id='text-counter']").val().length;
    $("#counter").html(+number); 
    }); 
});



