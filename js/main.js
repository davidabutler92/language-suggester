$(document).ready(function() {
  $("#language-survey").submit(function(event) {
    event.preventDefault();

    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    // console.log(firstName, lastName);
    const que1 = parseInt($("input#question-1").val());
    // console.log(que1);
    
  })
});