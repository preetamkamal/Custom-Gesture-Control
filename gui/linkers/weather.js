let { PythonShell } = require("python-shell");
var path = require("path");

function get_weather() {
  // // var city = document.getElementById("city").value

  // var options = {
  //   scriptPath : path.join(__dirname, '/../engine/'),
  //   // args : [city]
  // }
  // // console.log("started to mind me")

  // let pyshell = new PythonShell('python_code.py', options);

  // pyshell.on('message', function(message) {
  //   // swal(message);
  //   swal("Ended")
  // })
  // document.getElementById("city").value = "";
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

  var options = {
    scriptPath: path.join(__dirname, "/../engine/"),
    args: [gesture1, gesture2, gesture3, gesture4, gesture5, gesture6, gesture7, gesture8, gesture9, gesture10, gesture11],
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
  });

  //  pyshell.on("message", function (message) {
  //    // swal(message);
  //    swal("Ended");
  //  });
}
