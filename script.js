var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")

main.addEventListener("mousemove", function(dets){
    cursor.style.left= dets.x + "px";
    cursor.style.top = dets.y + "px";
})


// for heading 1

document.querySelector("#overlay1").addEventListener("mousemove", function(dets){
    document.querySelector("#elem1 img").style.scale = 1
    document.querySelector("#elem1 img").style.opacity = 1 
    // cursor.style.opacity = 0
    document.querySelector("#elem1 img").style.left = (dets.x - 285) + "px"
    document.querySelector("#elem1 img").style.top = (dets.y -380) + "px"

})

document.querySelector("#overlay1").addEventListener("mouseleave", function(dets){
    document.querySelector("#elem1 img").style.opacity = 1 
    cursor.style.opacity = 1
    document.querySelector("#elem1 img").style.scale = 0


})


// for heading 2

document.querySelector("#overlay2").addEventListener("mousemove", function(dets){
    document.querySelector("#elem2 img").style.scale = 1
    document.querySelector("#elem2 img").style.opacity = 1 
    // cursor.style.opacity = 0
    document.querySelector("#elem2 img").style.left = (dets.x - 540) + "px"
    document.querySelector("#elem2 img").style.top = (dets.y - 450) + "px"

})

document.querySelector("#overlay2").addEventListener("mouseleave", function(dets){
    document.querySelector("#elem2 img").style.opacity = 1 
    cursor.style.opacity = 1
    document.querySelector("#elem2 img").style.scale = 0


})


// for heading 3

document.querySelector("#overlay3").addEventListener("mousemove", function(dets){
    document.querySelector("#elem3 img").style.scale = 1
    document.querySelector("#elem3 img").style.opacity = 1 
    // cursor.style.opacity = 0
    document.querySelector("#elem3 img").style.left = (dets.x - 1050) + "px"
    document.querySelector("#elem3 img").style.top = (dets.y - 450) + "px"

})

document.querySelector("#overlay3").addEventListener("mouseleave", function(dets){
    document.querySelector("#elem3 img").style.opacity = 1 
    cursor.style.opacity = 1
    document.querySelector("#elem3 img").style.scale = 0


})