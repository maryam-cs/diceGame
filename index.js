var audio = new Audio('spinning-coin-1.mp3');

function startDice() {
  var num = Math.random() * 6;
  num = Math.floor(num) + 1;
  document.querySelector(".player1").setAttribute("src", "" + num + ".jpg");
  var num2 = Math.random() * 6;
  num2 = Math.floor(num2) + 1;
  document.querySelector(".player2").setAttribute("src", "" + num2 + ".jpg");
  if (num > num2) {
    document.querySelector('.result').innerHTML = " The winner is player1";
    audio.play();
  } else if (num < num2) {
    document.querySelector('.result').innerHTML = " The winner is player2";
    audio.play();
  } else
    document.querySelector('.result').innerHTML = " There is no winner";
}
