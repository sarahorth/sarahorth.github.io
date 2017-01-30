var myName = "Mom and Dad!";

function sayHello(myName){alert("Hello " + myName)
}
sayHello(myName);


var animals = document.getElementsByClassName("animal")
var sloth = document.getElementById("sloth")

function getBestAnimal (){
  // get the user's favourite animal
  // store the favourite animal as a variable
  var fave = prompt("What is your favorite animal?")
  console.log(fave)
  var sloth = document.getElementById("sloth")
  sloth.textContent = fave;
  // if the value of fave is empty
  if(fave ==''){
    // do something
    console.log("fave is not set")
    sloth.textContent= "Sloth"
    //if user does enter animal
  } else {
    // change the sloth to match the user's input
    console.log("fave is set")
    sloth.textContent=fave;
  }}
  getBestAnimal()
