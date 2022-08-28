function getSecondsSinceStartOfDay() {
  return (
    new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600
  );
}
var incs = 0;
var incm = 255;
var inch = 125;
function increasedegree() {
  if (incs >= 360) {
    incs = 0;
  }
  if (incm >= 360) {
    incm = 0;
  }
  if (inch >= 360) {
    inch = 0;
  }
  if (incs == 180) {
    incm += 6;
    document.getElementById("minutes").style.transform =
      "rotate(" + incm + "deg)";
  }
  if (incm == 180) {
    inch += 30;
    document.getElementById("hour").style.transform = "rotate(" + inch + "deg)";
  }
  incs += 6;
  document.getElementById("seconds").style.transform =
    "rotate(" + incs + "deg)";
}

setInterval(function () {
  var time = getSecondsSinceStartOfDay();
  //console.log(time);
  // your code here
  increasedegree();
}, 1000);
