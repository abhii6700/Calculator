var inputlabel = document.getElementById("inputlabel");
var prevelement = document.getElementById("prevelement");
function pushBtn(obj) {
  var pushed = obj.innerHTML;

  if (pushed == "=") {
    prevelement.innerHTML = inputlabel.innerHTML + "=";
    inputlabel.innerHTML = eval(inputlabel.innerHTML);
  } else if (pushed == "AC") {
    inputlabel.innerHTML = "0";
    prevelement.innerHTML = "0";
  } else {
    if (inputlabel.innerHTML == "0") {
      inputlabel.innerHTML = pushed;
    } else {
      inputlabel.innerHTML += pushed;
    }
  }
}
