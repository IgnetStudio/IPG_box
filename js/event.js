var ipgBtnStart = document.querySelector("#ipgBtnStart");
var ipgBtnStop = document.querySelector("#ipgBtnStop");
var ipgBtnRemove = document.querySelector("#ipgBtnRemove");
var ipgBtnDisable = document.querySelector("#ipgBtnDisable");

var ipgAnswer01 = document.querySelector("#ipgAnswer01");
var ipgAnswer02 = document.querySelector("#ipgAnswer02");
var ipgAnswer03 = document.querySelector("#ipgAnswer03");
var ipgAnswer04 = document.querySelector("#ipgAnswer04");

var ipgSingle = document.querySelector(".ipgSingle");
var ipgChild = document.querySelector(".ipgChild");
var ipgParent = document.querySelector(".ipgParent");


// click (event)

function ipgQuestion () {
   alert ("uczeń szkoły wojskowej");
};

function ipgRemove () {
    alert ("Puste");
};

ipgBtnStart.addEventListener("click", ipgQuestion, false);
ipgBtnRemove.addEventListener("click", ipgRemove, false);
ipgBtnRemove.removeEventListener("click", ipgRemove, false);

// onclick (function)

ipgBtnDisable.onclick = function(e) {
    //    console.log(this); -> main node
    //    console.log(e.target); -> clicked node
    e.target.setAttribute("disabled", true);
};

// bubbling (capturing rarely used)

ipgSingle.addEventListener("click", function(e) {
    alert("komunikat o kliku w pomarańczową ramkę");
}, false );

ipgChild.addEventListener("click", function(e) {
    e.stopPropagation(); // stop bubbling only on parent
    // e.stopImmediatePropagation(); stop any bubbling
    alert("pierwszy komunikat o kliku w czarną ramkę");
}, false );

ipgChild.addEventListener("click", function(e) {
    alert("drugi komunikat o kliku w czarną ramkę");
}, false );

// console.log(e.eventPhase); [ phase 1 - capturing / phase 2 - on target / phase 3 - bubbling ]

// geometry

console.log(ipgParent.offsetLeft); // dimensions from window edge
console.log(ipgChild.offsetParent);

var ipgPosition = ipgParent.getBoundingClientRect();  // all dimensions & size
console.log(ipgPosition);

console.log( document.elementFromPoint(399, 200) ); // element from 0,0 (x,y)

// alternative

let btnGo = document.querySelector(".btnGo"); // local variable
        // debugger;
        btnGo.addEventListener("click", function () {
            console.log("klik #1");
        });
        btnGo.addEventListener("click", () => { // lambda function
            alert("klik #2");
        });
        btnGo.addEventListener("ownEvent", () => {
            console.log("klik #3");
        });
        setTimeout(() => {
            document.dispatchEvent(new CustomEvent("ownEvent"));
        }, 2000); // miliseconds

/*

UI

ipg.load
ipg.unload
ipg.resize
ipg.scroll

document

ipg.onreadystatechange
ipg.DOMContentLoaded

form

ipg.change
ipg.select
ipg.submit
ipg.reset

focus

ipg.blur
ipg.focus

mouse

ipg.click
ipg.dblclick
ipg.mousedown
ipg.mouseup
ipg.mouseenter
ipg.mouseleave
ipg.mouseover
ipg.mousemove

keyboard

ipg.keydown
ipg.keyup
ipg.keypress

*/