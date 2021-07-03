let { PythonShell } = require("python-shell");
var path = require("path");

function get_gesture_input() {
  var gesture0 = document.getElementById("element0").value;
  var gesture1 = document.getElementById("element1").value;
  var gesture2 = document.getElementById("element2").value;
  var gesture3 = document.getElementById("element3").value;
  var gesture4 = document.getElementById("element4").value;
  var gesture5 = document.getElementById("element5").value;
  var gesture6 = document.getElementById("element6").value;
  var gesture7 = document.getElementById("element7").value;
  var gesture8 = document.getElementById("element8").value;
  var gesture9 = document.getElementById("element9").value;
  var gesture10 = document.getElementById("element10").value;
  var gesture11 = document.getElementById("element11").value;
  

  document.getElementById("element0").disabled = true;
  document.getElementById("element1").disabled = true;
  document.getElementById("element2").disabled = true;
  document.getElementById("element3").disabled = true;
  document.getElementById("element4").disabled = true;
  document.getElementById("element5").disabled = true;
  document.getElementById("element6").disabled = true;
  document.getElementById("element7").disabled = true;
  document.getElementById("element8").disabled = true;
  document.getElementById("element9").disabled = true;
  document.getElementById("element10").disabled = true;
  document.getElementById("element11").disabled = true;
  document.getElementById("submit-button").disabled = true;
  var options = {
    scriptPath: path.join(__dirname, "/../engine/"),
    args: [
      gesture0,
      gesture1,
      gesture2,
      gesture3,
      gesture4,
      gesture5,
      gesture6,
      gesture7,
      gesture8,
      gesture9,
      gesture10,
      gesture11,
    ],
    // pythonPath: "/Library/Frameworks/Python.framework/Versions/3.9/bin/python3",
  };

  let pyshell = new PythonShell("python_code.py", options, function (
    err,
    results
  ) {
    if (err) throw err;
    console.log("results: %j", results);
  });
  pyshell.on("message", function (message) {
    swal(message);
    document.getElementById("element0").disabled = false;
    document.getElementById("element1").disabled = false;
    document.getElementById("element2").disabled = false;
    document.getElementById("element3").disabled = false;
    document.getElementById("element4").disabled = false;
    document.getElementById("element5").disabled = false;
    document.getElementById("element6").disabled = false;
    document.getElementById("element7").disabled = false;
    document.getElementById("element8").disabled = false;
    document.getElementById("element9").disabled = false;
    document.getElementById("element10").disabled = false;
    document.getElementById("element11").disabled = false;
    document.getElementById("submit-button").disabled = false;
  });

  pyshell.end(function (err, code, signal) {
    if (err) throw err;
    // console.log("The exit code was: " + code);
    // console.log("The exit signal was: " + signal);
    // console.log("finished");
  });
}
