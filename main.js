function writeTime() {
  let time = document.getElementById(".time").innerHTML;
  let today = new date();
  let time = today.getHours() + ":" + today.getMinutes();
  time = document.write(time);
}
function calcNumber(result) {
  document.querySelector(".area").value += result;
}
function percentage(result) {
  let result = String(result);
  if (result.includes("%")) {
    let a, b, percent;
    let splitWord = [];
    a = Number(splitWord[0]);
    b = Number(splitWord[1]);
    percent = (a / 100) * b;
    document.querySelector(".area").value = percent;
  }
}
function makeNegative(result) {
  if (result.charAt(0) == "_") {
    document.querySelector(".area").value = result.replace("-", "");
  } else {
    document.querySelector(".area").value = "-" + result;
  }
}
