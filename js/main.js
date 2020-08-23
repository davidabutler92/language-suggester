$(document).ready(function() {
  $("#language-survey").submit(function(event) {
    event.preventDefault();

    const firstName = $("#firstName").val();
    // console.log(firstName);
    const que1 = parseInt($("input#rangeInput").val());
    const que2 = parseInt($("input#question-2").val());
    const que3 = parseInt($("input#question-3").val());
    const que4 = parseInt($("input#question-4").val());
    const que5 = parseInt($("input#question-5").val());
    // console.log(que1, que2, que3, que4, que5);
    const total = que1 + que2 + que3 + que4 + que5
    // console.log(total);
    
    if(total <= 10) {
      $("#language").text("Rust.");
      $("#language-survey").hide();
      $("#results").show();
    } else if (total >= 11 && total <= 20) {
      $("#language").text("Python.");
      $("#language-survey").hide();
      $("#results").show();
    } else if (total >= 21 && total <= 30) {
      $("#language").text("C# and .Net.");
      $("#language-survey").hide();
      $("#results").show();
    } else if (total >= 31 && total <=40) {
      $("#language").text("Javascript.");
      $("#language-survey").hide();
      $("#results").show();
    } else if (total >= 41 && total <= 50) {
      $("#language").text("Ruby on Rails.");
      $("#language-survey").hide();
      $("#results").show();
    }

    $("#userNameResults").text(firstName);
  });
});