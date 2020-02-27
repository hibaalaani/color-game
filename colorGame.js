var numSquires=6
var colors=generateRandomColor(numSquires)
var squires=document.querySelectorAll(".squire")
var pickedColor=pickColor()
var colorDisplay=document.getElementById("display")
var messageDisplay=document.getElementById("message")
var h1=document.querySelector("h1")
var reset=document.querySelector("#reset")
var easyBtn=document.querySelector("#easy")
var hardBtn=document.querySelector("#hard")

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected");
    numSquires=3
    colors=generateRandomColor(numSquires);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    h1.style.backgroundColor="steelblue"
    for (var i=0;i<squires.length;i++){
       if(colors[i]){
        squires[i].style.backgroundColor=colors[i]
       }else{
           squires[i].style.display="none"
       }
        
        
    }

})
hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected");
    numSquires=6
    colors=generateRandomColor(numSquires);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squires.length;i++){
        squires[i].style.backgroundColor=colors[i];
        squires[i].style.display="block";
    }
})
reset.addEventListener("click",function(){
    //generate new colors
    colors=generateRandomColor(numSquires)
    //picked new random color
    pickedColor=pickColor();
    //change display color to the picked color
    colorDisplay.textContent=pickedColor;
    //change colors of squires
    for (var i=0;i<squires.length;i++){
        squires[i].style.backgroundColor=colors[i];
    }
    //change background to the orignal
    h1.style.backgroundColor="steelblue"
})
colorDisplay.textContent=pickedColor;
for(var i=0;i<squires.length;i++){
    squires[i].style.backgroundColor=colors[i]

squires[i].addEventListener("click",function(){
    var clickedColor=this.style.backgroundColor
    if(clickedColor===pickedColor){
      messageDisplay.textContent="correct!!" 
      changedColor(clickedColor)
      h1.style.backgroundColor=clickedColor;
      reset.textContent="Play Again"
    }else{
        this.style.backgroundColor="black"
        messageDisplay.textContent="Try Again"
    }
})
}
function changedColor(color){
    for(var i=0;i<squires.length;i++){
        squires[i].style.backgroundColor=color
    }
}
function pickColor() {
     var random =Math.floor(Math.random() * colors.length)
        return colors[random]
    
}
function generateRandomColor(num) {
    ///generate arr
    var arr=[]
    // repeat num time
    for(var i=0;i<num;i++){
    //get random color and push in to arr
        arr.push(randomColor())
    }
    //return that arr
    return arr;
}
function randomColor(){
    //pick a"red" from "0-255"
    var r= Math.floor(Math.random()*256)
    var g= Math.floor(Math.random()*256)

    var b= Math.floor(Math.random()*256)
    return "rgb(" + r + ", " + g + ", "+b+ ")"

}