function callMe(lyric) {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
  var lyric = "maybe";
}


function crazy() {
  // fix the code in here:
  thisIsCrazy();

  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
}

function sayMyName(name) {
  // fix the code in here:
  name = "Kristin";

  sayMy();

  function sayMy() {
    console.log(name);
    var name = "Kristin";
  }
}
