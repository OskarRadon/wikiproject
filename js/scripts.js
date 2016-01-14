$(document).ready(function() {
  var exampleArray = [];

  $("form#arrayForm").submit(function(event) {
    var arrayInput = $("input#arrayInput").val();
    console.log(arrayInput);
    exampleArray.push(arrayInput);
    console.log(exampleArray);

    $("#arrayOutput").append(exampleArray);
    event.preventDefault();
  });
});
