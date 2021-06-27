let { PythonShell } = require("python-shell");
var path = require("path");

function get_gesture_data(){
    var gesture1 = document.getElementById('element1');
    var gesture2 = document.getElementById('element2');
    var gesture3 = document.getElementById('element3');

    var options = {
      scriptPath: path.join(__dirname, "/../engine/"),
      args : [gesture1]
    };

    let pyshell = new PythonShell("python_code.py", options);

    pyshell.on("message", function (message) {
    // swal(message);
    swal("Ended");
    });
}