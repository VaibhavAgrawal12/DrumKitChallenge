var h = document.querySelectorAll(".drum").length;
var i = 0;
while(i < h)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    if (this.innerHTML === "w")
    {
     var audio = new Audio('sounds/crash.mp3');
     audio.play();
    }
    else if (this.innerHTML === "a")
    {
     var audio = new Audio('sounds/kick-bass.mp3');
     audio.play();
    }
    else if (this.innerHTML === "s")
    {
     var audio = new Audio('sounds/snare.mp3');
     audio.play();
    }
    else if (this.innerHTML === "d")
    {
     var audio = new Audio('sounds/tom-1.mp3');
     audio.play();
    }
    else if (this.innerHTML === "j")
    {
     var audio = new Audio('sounds/tom-2.mp3');
     audio.play();
    }
    else if (this.innerHTML === "k")
    {
     var audio = new Audio('sounds/tom-3.mp3');
     audio.play();
    }
    else if (this.innerHTML === "l")
    {
     var audio = new Audio('sounds/tom-4.mp3');
     audio.play();
    }
    addAnimations(this.innerHTML);
    });
i++;
}
document.addEventListener("keydown",function(event){
var ch = event.key;
switch(ch){
case "w":
var audio = new Audio('sounds/crash.mp3');
audio.play();
break;
case "a":
var audio = new Audio('sounds/kick-bass.mp3');
audio.play();
break;
case "s":
var audio = new Audio('sounds/snare.mp3');
audio.play();
break;
case "d":
var audio = new Audio('sounds/tom-1.mp3');
audio.play();
break;
case "j":
var audio = new Audio('sounds/tom-2.mp3');
audio.play();
break;
case "k":
var audio = new Audio('sounds/tom-3.mp3');
audio.play();
break;
case "l":
var audio = new Audio('sounds/tom-4.mp3');
audio.play();
break;
default:
console.log(ch);
}
addAnimations(ch);
});

function addAnimations(currentKey) {
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
activeButton.classList.remove("pressed");
},100);
}

