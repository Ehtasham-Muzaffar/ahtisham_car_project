var game=document.getElementById('game')
var redcar = document.getElementById("redcar")
var bluecar=document.getElementById("bluecar")
var score=document.getElementById("score")
var count=0
var left =document.getElementById("left")
var right=document.getElementById("right")
var box2= document.getElementById("box2")



right.addEventListener("click",()=>{
    var racecar=parseInt(this.window.getComputedStyle(redcar).getPropertyValue("left"))
    if(racecar < 260){
        redcar.style.left= (racecar + 130) + "px"}    
})
left.addEventListener("click",()=>{
    var racecar=parseInt(this.window.getComputedStyle(redcar).getPropertyValue("left"))
    if(racecar > 0){
        redcar.style.left= (racecar - 130) + "px"
        }
})


window.addEventListener("keydown",function(e){
    
    if(e.keyCode == "39"){
       
var racecar=parseInt(this.window.getComputedStyle(redcar).getPropertyValue("left"))
if(racecar < 260){
    redcar.style.left= (racecar + 130) + "px"
    }}

    if(e.keyCode == "37"){
        var racecar=parseInt(this.window.getComputedStyle(redcar).getPropertyValue("left"))
        if(racecar > 0){
            redcar.style.left= (racecar - 130) + "px"
            }}
})

bluecar.addEventListener("animationiteration",()=>{
    count++
    var random= ((Math.floor(Math.random()*3))*130)
    bluecar.style.left=random + "px"

    score.innerHTML = `score: ${count}`;

})
setInterval(() => {
    
        var bluecartop=parseInt(window.getComputedStyle(bluecar).getPropertyValue('top'))
        var blueleft=parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"))
        var redcarleft=parseInt(window.getComputedStyle(redcar).getPropertyValue('left'))
    
        if((blueleft==redcarleft) && (bluecartop > 270) && (bluecartop < 480)){
        game.style.display="none"
        box2.style.display="block"
        
        count=0

        }

    
}, 10);

setTimeout(()=>{
bluecar.style.animationDuration= `${0.7}s`
},180000)

// debugger;