function changeCnvColor(color){
    canvas.style.backgroundColor = color
}

function changeTxtColor(color){
    text.style.color = color
}

function getColor(item){
    return window.getComputedStyle(item ,null).getPropertyValue('background-color')
}
/****************************************
-----------------CANVAS------------------
****************************************/
redCnvBtn.addEventListener("click", function(e){
    let color = getColor(redCnvBtn)
    changeCnvColor(color);
});
orangeCnvBtn.addEventListener("click", function(e){
    let color = getColor(orangeCnvBtn)
    changeCnvColor(color);
});
yellowCnvBtn.addEventListener("click", function(e){
    let color = getColor(yellowCnvBtn)
    changeCnvColor(color);
});
greenCnvBtn.addEventListener("click", function(e){
    let color = getColor(greenCnvBtn)
    changeCnvColor(color);
});
blueCnvBtn.addEventListener("click", function(e){
    let color = getColor(blueCnvBtn)
    changeCnvColor(color);
});
purpleCnvBtn.addEventListener("click", function(e){
    let color = getColor(purpleCnvBtn)
    changeCnvColor(color);
});
whiteCnvBtn.addEventListener("click", function(e){
    let color = getColor(whiteCnvBtn)
    changeCnvColor(color);
});
blackCnvBtn.addEventListener("click", function(e){
    let color = getColor(blackCnvBtn)
    changeCnvColor(color);
});
/****************************************
------------------TEXT-------------------
****************************************/
redTxtBtn.addEventListener("click", function(e){
    let color = getColor(redTxtBtn)
    changeTxtColor(color);
});
orangeTxtBtn.addEventListener("click", function(e){
    let color = getColor(orangeTxtBtn)
    changeTxtColor(color);
});
yellowTxtBtn.addEventListener("click", function(e){
    let color = getColor(yellowTxtBtn)
    changeTxtColor(color);
});
greenTxtBtn.addEventListener("click", function(e){
    let color = getColor(greenTxtBtn)
    changeTxtColor(color);
});
blueTxtBtn.addEventListener("click", function(e){
    let color = getColor(blueTxtBtn)
    changeTxtColor(color);
});
purpleTxtBtn.addEventListener("click", function(e){
    let color = getColor(purpleTxtBtn)
    changeTxtColor(color);
});
whiteTxtBtn.addEventListener("click", function(e){
    let color = getColor(whiteTxtBtn)
    changeTxtColor(color);
});
blackTxtBtn.addEventListener("click", function(e){
    let color = getColor(blackTxtBtn)
    changeTxtColor(color);
});
/***************************************/