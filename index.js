
var noOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfDrums;i++)
{

document.querySelectorAll(".drum")[i].addEventListener("click",function(){


  var buttonInnerHTML=this.innerHTML;
  buttonAnimation(buttonInnerHTML);


switch (buttonInnerHTML) {
  case "s":
  var s1 = new Audio('sounds/crash.mp3');
  s1.play();
  break;

  case "h":
  var o1 = new Audio('sounds/kick-bass.mp3');
  o1.play();
  break;

  case "i":
  var u1 = new Audio('sounds/snare.mp3');
  u1.play();
  break;

  case "v":
  var r1 = new Audio('sounds/tom-1.mp3');
  r1.play();
  break;

  case "a":
  var a1 = new Audio('sounds/tom-2.mp3');
  a1.play();
  break;

  case "n":
  var b1 = new Audio('sounds/tom-3.mp3');
  b1.play();
  break;

  case "I":
  var h1 = new Audio('sounds/tom-4.mp3');
  h1.play();
  break;





  default:console.log(buttonInnerHTML);

}

function buttonAnimation(currentKey){
    var buttonKeyAnimate=document.querySelector("."+currentKey);
    buttonKeyAnimate.classList.add(".pressed");
    //setTimeOut();
}


  //alert("I got clicked");
});
}
