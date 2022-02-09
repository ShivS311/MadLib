// Mad Lib with Js


// Event Listener
document.getElementById("Mad-Lib").addEventListener("click", buildMadLib);

function buildMadLib () {
 
  // Input
  let song = document.getElementById("song").value;
  let friendname = document.getElementById("Adjective1").value;
  let artist = document.getElementById("verb-1").value;
  

  //Process
  let result = '"I was listening to ' + song + ' .Then ' + friendname + ' suggested that I should listen to ' + artist + ' so I listened to the artist. "'; 



  //Output
  document.getElementById("result").innerHTML = result;


}