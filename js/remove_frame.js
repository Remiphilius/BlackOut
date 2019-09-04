function virerMilieu(){
    var dvlpElt = document.querySelector('div[style*="font-size: 20px"]');
    if(dvlpElt !== null){
        dvlpElt.remove();
    } else {
        console.log("non");
    }
}

function virerLoc(){
    var dvlpElt = document.querySelector('div[style="position: absolute; left: 0px; top: 0px;"]');
    if(dvlpElt !== null){
        dvlpElt.remove();
    } else {
        console.log("non");
    }
}

function virerBsl(){
    var cmpsElt = document.getElementsByClassName("gm-compass");
    if(cmpsElt !== null){
        cmpsElt[0].remove();
    } else {
        console.log("non");
    }
}

window.addEventListener("load", function () {
    console.log("La page est chargée");
});

setTimeout(virerLoc, 600);
setTimeout(virerBsl, 600);
setTimeout(virerMilieu, 1500);