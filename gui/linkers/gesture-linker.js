let { PythonShell } = require("python-shell");
let path = require("path");
let gestureSetId = "def";
// const dialog = require('electron').dialog;
function get_gesture_input() {
  let gesture0 = document.getElementById("element0").value;
  let gesture1 = document.getElementById("element1").value;
  let gesture2 = document.getElementById("element2").value;
  let gesture3 = document.getElementById("element3").value;
  let gesture4 = document.getElementById("element4").value;
  let gesture5 = document.getElementById("element5").value;
  let gesture6 = document.getElementById("element6").value;
  let gesture7 = document.getElementById("element7").value;
  let gesture8 = document.getElementById("element8").value;
  let gesture9 = document.getElementById("element9").value;
  let gesture10 = document.getElementById("element10").value;
  let gesture11 = document.getElementById("element11").value;
  

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
 
  let options = {
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
    // swal(message);
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
  // console.log('Hi')
  pyshell.end(function (err, code, signal) {
    if (err) throw err;
    // console.log("The exit code was: " + code);
    // console.log("The exit signal was: " + signal);
    console.log("finished");
  });
}

 // --------------FIREBASE CONFIG----------------------
  const firebaseConfig = {
    apiKey: "AIzaSyA3Bzvz8ogR-rqkKc4mQib2HoyY9t5jtO8",
    authDomain: "gesture-navigation-system.firebaseapp.com",
    projectId: "gesture-navigation-system",
    storageBucket: "gesture-navigation-system.appspot.com",
    messagingSenderId: "366819068277",
    appId: "1:366819068277:web:75d3d4ec831dc94f59eb3c",
    measurementId: "G-WB4572JMRZ",
  };

  firebase.initializeApp(firebaseConfig);

  let cloudDB = firebase.firestore();
  
// --------------------WRITE TO FIREBASE --------------
function Add_Doc_WithAutoID() {
  let gesture0 = document.getElementById("element0").value;
  let gesture1 = document.getElementById("element1").value;
  let gesture2 = document.getElementById("element2").value;
  let gesture3 = document.getElementById("element3").value;
  let gesture4 = document.getElementById("element4").value;
  let gesture5 = document.getElementById("element5").value;
  let gesture6 = document.getElementById("element6").value;
  let gesture7 = document.getElementById("element7").value;
  let gesture8 = document.getElementById("element8").value;
  let gesture9 = document.getElementById("element9").value;
  let gesture10 = document.getElementById("element10").value;
  let gesture11 = document.getElementById("element11").value;


  // --- ADD RANDOM ID
  cloudDB.collection("gestures").add(
    {
      gesture0: gesture0,
      gesture1: gesture1,
      gesture2: gesture2,
      gesture3: gesture3,
      gesture4: gesture4,
      gesture5: gesture5,
      gesture6: gesture6,
      gesture7: gesture7,
      gesture8: gesture8,
      gesture9: gesture9,
      gesture10: gesture10,
      gesture11: gesture11,
      id: gestureSetId
    }
  ).then(function (docRef) {
    console.log('Doc written with ID', docRef);
  }).catch(function (err) {
    console.log("error found at 131", err)
  })
}

function Add_Doc_WithID() {
  let gesture0 = document.getElementById("element0").value;
  let gesture1 = document.getElementById("element1").value;
  let gesture2 = document.getElementById("element2").value;
  let gesture3 = document.getElementById("element3").value;
  let gesture4 = document.getElementById("element4").value;
  let gesture5 = document.getElementById("element5").value;
  let gesture6 = document.getElementById("element6").value;
  let gesture7 = document.getElementById("element7").value;
  let gesture8 = document.getElementById("element8").value;
  let gesture9 = document.getElementById("element9").value;
  let gesture10 = document.getElementById("element10").value;
  let gesture11 = document.getElementById("element11").value;

  // --- ADD CUSOM ID
  cloudDB
    .collection("gestures")
    .doc(gestureSetId)
    .set({
      gesture0: gesture0,
      gesture1: gesture1,
      gesture2: gesture2,
      gesture3: gesture3,
      gesture4: gesture4,
      gesture5: gesture5,
      gesture6: gesture6,
      gesture7: gesture7,
      gesture8: gesture8,
      gesture9: gesture9,
      gesture10: gesture10,
      gesture11: gesture11,
      id: gestureSetId,
    })
    .then(function () {
      console.log("Doc written with ID", gestureSetId);
    })
    .catch(function (err) {
      console.log("error found at 131", err);
    });
}


//  --------------UPDATE DATA _----------------------

function Update_Gesture() {
  let gesture0 = document.getElementById("element0").value;
  let gesture1 = document.getElementById("element1").value;
  let gesture2 = document.getElementById("element2").value;
  let gesture3 = document.getElementById("element3").value;
  let gesture4 = document.getElementById("element4").value;
  let gesture5 = document.getElementById("element5").value;
  let gesture6 = document.getElementById("element6").value;
  let gesture7 = document.getElementById("element7").value;
  let gesture8 = document.getElementById("element8").value;
  let gesture9 = document.getElementById("element9").value;
  let gesture10 = document.getElementById("element10").value;
  let gesture11 = document.getElementById("element11").value;

  // --- ADD CUSOM ID
  cloudDB
    .collection("gestures")
    .doc(gestureSetId)
    .update({
      gesture0: gesture0,
      gesture1: gesture1,
      gesture2: gesture2,
      gesture3: gesture3,
      gesture4: gesture4,
      gesture5: gesture5,
      gesture6: gesture6,
      gesture7: gesture7,
      gesture8: gesture8,
      gesture9: gesture9,
      gesture10: gesture10,
      gesture11: gesture11,
 
    })
    .then(function (docRef) {
      console.log("Doc written with ID", docRef);
    })
    .catch(function (err) {
      console.log("error found at 131", err);
    });
}


function RetriveData() {
  let gesture0Entity = document.getElementById("element0");
  let gesture1Entity = document.getElementById("element1");
  let gesture2Entity = document.getElementById("element2");
  let gesture3Entity = document.getElementById("element3");
  let gesture4Entity = document.getElementById("element4");
  let gesture5Entity = document.getElementById("element5");
  let gesture6Entity = document.getElementById("element6");
  let gesture7Entity = document.getElementById("element7");
  let gesture8Entity = document.getElementById("element8");
  let gesture9Entity = document.getElementById("element9");
  let gesture10Entity = document.getElementById("element10");
  let gesture11Entity = document.getElementById("element11");




  cloudDB
    .collection("gestures")
    .doc(gestureSetId)
    .get().then((docRef) => {
      if (docRef.exists) {
        gesture0Entity.value = docRef.data().gesture0;
        gesture1Entity.value = docRef.data().gesture1;
        gesture2Entity.value = docRef.data().gesture2;
        gesture3Entity.value = docRef.data().gesture3;
        gesture4Entity.value = docRef.data().gesture4;
        gesture5Entity.value = docRef.data().gesture5;
        gesture6Entity.value = docRef.data().gesture6;
        gesture7Entity.value = docRef.data().gesture7;
        gesture8Entity.value = docRef.data().gesture8;
        gesture9Entity.value = docRef.data().gesture9;
        gesture10Entity.value = docRef.data().gesture10;
        gesture11Entity.value = docRef.data().gesture11;
        console.log("DATA READ SUCCESSFUL")
      } else {
        console.log("does not exist")
      }
    }).catch(function (err) {
      console.log("error found at 263", err);
    })
}


  // -------------------BUTTON EVENT-------------------
function add_to_firebase(){
  // Add_Doc_WithAutoID();
  Add_Doc_WithID();
}

function read_from_firebase() {
  RetriveData();
}
function updateText(val) {
  gestureSetId = val;
}

// -------------- DOWNLOAD JSON ---------------
function downloadFile() {

    let gesture0 = document.getElementById("element0").value;
    let gesture1 = document.getElementById("element1").value;
    let gesture2 = document.getElementById("element2").value;
    let gesture3 = document.getElementById("element3").value;
    let gesture4 = document.getElementById("element4").value;
    let gesture5 = document.getElementById("element5").value;
    let gesture6 = document.getElementById("element6").value;
    let gesture7 = document.getElementById("element7").value;
    let gesture8 = document.getElementById("element8").value;
    let gesture9 = document.getElementById("element9").value;
    let gesture10 = document.getElementById("element10").value;
    let gesture11 = document.getElementById("element11").value;
  let UnConvertedContent = {
    gesture0: gesture0,
    gesture1: gesture1,
    gesture2: gesture2,
    gesture3: gesture3,
    gesture4: gesture4,
    gesture5: gesture5,
    gesture6: gesture6,
    gesture7: gesture7,
    gesture8: gesture8,
    gesture9: gesture9,
    gesture10: gesture10,
    gesture11: gesture11,
    gestureSetId: gestureSetId,
  };
  let content = JSON.stringify(UnConvertedContent);

  let fileName = "gesture_backup.json";
  let contentType = "application/json";
  var a = document.createElement("a");
  var file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

// ------- IMPORT ----------
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}


document.getElementById("file-upload").onchange = function () {

  let filePath = document.getElementById("file-upload").files[0].path;
  
  readTextFile(filePath, function (text) {
    var data = JSON.parse(text);
    // console.log(data);
     let gesture0Entity = document.getElementById("element0");
     let gesture1Entity = document.getElementById("element1");
     let gesture2Entity = document.getElementById("element2");
     let gesture3Entity = document.getElementById("element3");
     let gesture4Entity = document.getElementById("element4");
     let gesture5Entity = document.getElementById("element5");
     let gesture6Entity = document.getElementById("element6");
     let gesture7Entity = document.getElementById("element7");
     let gesture8Entity = document.getElementById("element8");
     let gesture9Entity = document.getElementById("element9");
     let gesture10Entity = document.getElementById("element10");
     let gesture11Entity = document.getElementById("element11");
      let gestureId = document.getElementById("gesture-set-id");

    let {
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
      gestureSetId,
    } = data;
    // console.log(gesture0, gesture1, gesture2, gesture3, gesture4)
    gesture0Entity.value = gesture0;
    gesture1Entity.value = gesture1;
    gesture2Entity.value = gesture2;
    gesture3Entity.value = gesture3;
    gesture4Entity.value = gesture4;
    gesture5Entity.value = gesture5;
    gesture6Entity.value = gesture6;
    gesture7Entity.value = gesture7;
    gesture8Entity.value = gesture8;
    gesture9Entity.value = gesture9;
    gesture10Entity.value =gesture10; 
    gesture11Entity.value =gesture11;
    gestureId.value = gestureSetId;
  });
};

