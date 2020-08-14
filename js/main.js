$(document).ready(function() {
  $("#language-survey").submit(function(event) {
    event.preventDefault();

    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    // console.log(firstName, lastName);
    const que1 = parseInt($("input#question-1").val());
    const que2 = parseInt($("input#question-2").val());
    const que3 = parseInt($("input#question-3").val());
    const que4 = parseInt($("input#question-4").val());
    const que5 = parseInt($("input#question-5").val());
    console.log(que1, que2, que3, que4, que5);
  })
});