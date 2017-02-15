console.log('Loaded! yupeeeee');
var element= document.getElementById("txt");
element.innerHTML="hi this is ajay ";

//move image
var img= document.getElementById("madi");
var marginLeft=0;
function moveRight(){
    if(marginLeft<900){
    marginLeft= marginLeft + 10;
    img.style.marginLeft= marginLeft + "px";

    }
}
img.onclick = function (){
    var interval = setInterval(moveRight,50 );
} ;