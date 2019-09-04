var expandedMap = false;
var carteElt = document.getElementById("carte");
var rateSizeMapWantedW = 0.7;
var rateSizeMapWantedH = 0.8;
var winW = Math.ceil(window.innerWidth * rateSizeMapWantedW);
var winH = Math.ceil(window.innerHeight * rateSizeMapWantedH);
var winT = Math.ceil(window.innerHeight - winH);
var sizeMap = {"w": winW, "h":winH, "t": winT};

function changeSizeMap(){
    if(expandedMap){
        var rateSizeMapWantedW = 0.2;
        var rateSizeMapWantedH = 0.35;
    } else {
        var rateSizeMapWantedW = 0.7;
        var rateSizeMapWantedH = 0.8;
    }
    winW = Math.ceil(window.innerWidth * rateSizeMapWantedW);
    sizeMap.w = winW;
    winH = Math.ceil(window.innerHeight * rateSizeMapWantedH);
    sizeMap.h = winH;
    winT = Math.ceil(window.innerHeight - winH);
    sizeMap.t = winT;
    var carteElt = document.getElementById("carte");
    carteElt.style.width = winW + "px";
    carteElt.style.height = winH + "px";
    carteElt.style.top = winT + "px";
    expandedMap = !expandedMap;
}

carteElt.addEventListener("mousemove", function(){
    if(expandedMap === false){
        changeSizeMap();
    }
});

window.addEventListener("mousemove", function(e){
    if(expandedMap){
        if(e.clientX > sizeMap.w || e.clientY < sizeMap.t){
            changeSizeMap();    
        }
    }
});