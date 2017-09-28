var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var num = 0;
var isGameOver = false;
var tic = " ";
var tac = " ";


for (var i = 0; i < arr.length; i++) {
  document.getElementById(arr[i].toString()).disabled = true;
}
function playerChoose(clicked_id) {
  console.log(clicked_id);
  if (clicked_id == "X") {
    tic = "X";
    tac = "O";
    document.getElementById("O").disabled = true;
  } else {
    tic = "O";
    tac = "X";
    document.getElementById("X").disabled = true;
  }
   
  for (var i = 0; i < arr.length; i++) {
   document.getElementById(arr[i].toString()).disabled = false;
  }
}

function player(e) {
  var X = e.id;
  document.getElementById(X).innerHTML = tic;
  document.getElementById(X).disabled = true;
  var int = parseInt(X);
  var i = arr.indexOf(int);
  arr.splice(i, 1);
 setTimeout(winning, 500);
 setTimeout(getNumber, 500);
setTimeout(winning, 500);
}

function showPopup(){
   $("#popup").css("display", "block");
    $("#popup").css("box-shadow", "0px 0px 0px 9999px rgba(0, 0, 0, 0)");
    $("#all").css("opacity", ".1");
    document.getElementById("playAgain").disabled = false;
}

function computer() {
setTimeout(winning, 500);
  if (isGameOver === true) {
   showPopup();
  } 
  else {
    document.getElementById(arr[num].toString()).innerHTML = tac;
    document.getElementById(arr[num].toString()).disabled = true;
    arr.splice(num, 1);
    
 setTimeout(winning, 500);
  }
}

function getNumber() {
setTimeout(winning, 500);
  num = Math.floor(Math.random() * arr.length + 0);
  computer();
}

function clearAll() {
  tic = " ";
  tac = " ";
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  isGameOver = false;
  for (var i = 0; i < arr.length; i++) {
    $("#" + arr[i].toString()).html("");
  document.getElementById(arr[i].toString()).disabled = true;
    
}
 document.getElementById("X").disabled = false;
  document.getElementById("O").disabled = false;
}
function winning() {
  if (
    $("#1").html() == $("#2").html() &&
    $("#2").html() == $("#3").html() &&
    $("#1").is(":disabled")
  ) {
    $("#winnerPop").html($("#1").html() + " WINS!");

    isGameOver = true;
       showPopup();

  }
  if (
    $("#1").html() == $("#4").html() &&
    $("#4").html() == $("#7").html() &&
    $("#1").is(":disabled")
  ) {
   $("#winnerPop").html($("#1").html() + " WINS!");
    isGameOver = true;
       showPopup();

  }
  if (
    $("#1").html() == $("#5").html() &&
    $("#5").html() == $("#9").html() &&
    $("#1").is(":disabled")
  ) {
   $("#winnerPop").html($("#1").html() + " WINS!");
    isGameOver = true;
       showPopup();

  }
  if (
    $("#2").html() == $("#5").html() &&
    $("#5").html() == $("#8").html() &&
    $("#2").is(":disabled")
  ) {
    $("#winnerPop").html($("#2").html() + " WINS!");
    isGameOver = true;
       showPopup();

  }
  if (
    $("#3").html() == $("#6").html() &&
    $("#6").html() == $("#9").html() &&
    $("#3").is(":disabled")
  ) {
   $("#winnerPop").html($("#3").html() + " WINS!");
    isGameOver = true;
       showPopup();

  }
  if (
    $("#3").html() == $("#5").html() &&
    $("#5").html() == $("#7").html() &&
    $("#3").is(":disabled")
  ) {
    $("#winnerPop").html($("#3").html() + " WINS!");
    isGameOver = true;
       showPopup();

  }
  if (
    $("#4").html() == $("#5").html() &&
    $("#5").html() == $("#6").html() &&
    $("#4").is(":disabled")
  ) {
    $("#winnerPop").html($("#4").html() + " WINS!");
    isGameOver = true;
       showPopup();

  }
  if (
    $("#7").html() == $("#8").html() &&
    $("#8").html() == $("#9").html() &&
    $("#7").is(":disabled")
  ) {
    $("#winnerPop").html($("#7").html() + " WINS!");
    isGameOver = true;
       showPopup();

  }
  if (
    $(".wrapper").find("button:disabled").length === 9 &&
    isGameOver == false
  ) {
    $("#winnerPop").html("It's a Tie!");
    isGameOver = true;
       showPopup();

  }
}

function hidePopUp(){
  $("#popup").css("display", "none");
  $("#all").css("opacity", ".9");
  clearAll();
}