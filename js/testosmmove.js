var boutonElt = document.getElementById("grand");
var expandedMap = false;
var carteElt = document.getElementById("carte");
var sizeMap = {"w": 500, "h":400};

function changeSizeMap(){
    if(expandedMap){
        var rateSizeMapWantedW = 0.3;
        var rateSizeMapWantedH = 0.5;
    } else {
        var rateSizeMapWantedW = 0.7;
        var rateSizeMapWantedH = 0.8;
    }
    var winW = Math.ceil(window.innerWidth * rateSizeMapWantedW);
    sizeMap.w = winW;
    var winH = Math.ceil(window.innerHeight * rateSizeMapWantedH);
    sizeMap.h = winH;
    var carteElt = document.getElementById("carte");
    carteElt.style.width = winW + "px";
    carteElt.style.height = winH + "px";
    expandedMap = !expandedMap;
}

boutonElt.addEventListener("click", function (e) {
    changeSizeMap();
    if(!expandedMap){
        var messageBoutton ="Agrandir";
    } else {
        var messageBoutton ="Rédiure";
    }
    boutonElt.textContent = messageBoutton;
});

carteElt.addEventListener("mousemove", function(){
    if(expandedMap === false){
        changeSizeMap();
    }
});

window.addEventListener("mousemove", function(e){
    if(expandedMap){
        if(e.clientX > sizeMap.w || e.clientY > sizeMap.h){
            changeSizeMap();    
        }
    }
});