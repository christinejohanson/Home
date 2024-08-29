"use strict";

document.getElementById("imageduck").onclick = function () {
        toggleBubble();
    }; 

    function toggleBubble() {
        let talkBubble = document.getElementById("bubble");
        if (talkBubble.style.visibility === "hidden") {
            talkBubble.style.visibility = "visible";
            setInterval(displayText, 50);
        } else {
            talkBubble.style.visibility = "hidden";
        }
    }

    var text = "Sorry for the inconvenience! The form is not in function yet! Contact me through email: info@christinejohanson.se";
    var container = document.getElementById("textContainer");
    var index = 0;

    function displayText() {
        if (index < text.length) {
            container.textContent += text.charAt(index);
            index++;
        }
    }