document.getElementById('randGen').addEventListener("click", displayRandom);

function displayRandom(){
  var randomNumArr= ['1', '2', '3', '4', '5', '6'];

  for (var i = 0; i < 4; i++){
    var rand = randomNumArr[Math.floor(Math.random() * randomNumArr.length)];
  }

  var randNumString = "";
  for (var i = 0; i < 4; i++){
    var number = randNumString += " " + rand[i];
  }

  console.log(number)
}
