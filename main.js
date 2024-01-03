var element=document.querySelectorAll(".element");
 element.forEach(function(val){
val.addEventListener("mousemove",function(dets){
    val.childNodes[1].style.left=dets.x+"px";
    val.style.backgroundColor="red"
    val.childNodes[1].style.opacity="0.6";
})
val.addEventListener("mouseleave",function(dets){
    val.childNodes[1].style.opacity="0";
    val.style.backgroundColor="transparent"
})
// console.log(val.childNodes);
 })
