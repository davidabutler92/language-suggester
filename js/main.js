$(document).ready(function() {
  $("#language-survey").submit(function(event) {
    event.preventDefault();

    const firstName = $("#firstName").val();
    // console.log(firstName);
    const que1 = parseInt($("input#question-1").val());
    const que2 = parseInt($("input#question-2").val());
    const que3 = parseInt($("input#question-3").val());
    const que4 = parseInt($("input#question-4").val());
    const que5 = parseInt($("input#question-5").val());
    // console.log(que1, que2, que3, que4, que5);
    const total = que1 + que2 + que3 + que4 + que5
    // console.log(total);
    
    if(total <= 10) {
      $("#language").text("Ruby on Rails.");
      $("#results").show();
    } else if (total >= 11 && total <= 20) {
      $("#language").text("Javascript.");
      $("#results").show();
    } else if (total >= 21 && total <= 30) {
      $("#language").text("C# and .Net");
      $("#results").show();
    } else if (total >= 31 && total <=40) {
      $("#language").text("Python.");
      $("#results").show();
    } else if (total >= 41 && total <= 50) {
      $("#language").text("Rust.");
      $("#results").show();
    }
  });
});