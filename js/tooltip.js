(function () {
    var globalTooltip = null; // temporary, backup variable
    function assignEvents(elems, type, event) {
        // for each title in ipgTooltip
        for (var i = 0; i < elems.length; i++) {
            elems[i].addEventListener(type, event, false);
        }
    }

    function createTooltip(text, options) {
        var tooltip = document.createElement("div");
        tooltip.className = "tooltip hidden";
        tooltip.appendChild(document.createTextNode(text));
        document.body.appendChild(tooltip);
        // add css top & left
        tooltip.style.left = options.x + (options.w / 2) - (tooltip.offsetWidth / 2) + "px";
        tooltip.style.top = (options.y - tooltip.offsetHeight - 10) + "px";
        tooltip.classList.remove("hidden");
        globalTooltip = tooltip; // reference to new div element tooltip
    }

    function showTooltip(e) {
        // show tooltip on mouseenter
        var options = {
            w: e.target.offsetWidth
            , x: e.target.offsetLeft
            , y: e.target.offsetTop
        };
        var text = e.target.getAttribute("title");
        createTooltip(text, options);
        e.target.removeAttribute("title");
    }

    function removeTooltip(e) {
        // remove tooltip on mouseleave
        e.target.setAttribute("title", globalTooltip.textContent);
        globalTooltip.parentNode.removeChild(globalTooltip);
    }

    function init(elems) {
        // initialize
        assignEvents(elems, "mouseenter", showTooltip);
        assignEvents(elems, "mouseleave", removeTooltip);
    }
    window.ipgTooltip = init; // export reference to init outside of the function
})();
ipgTooltip(document.querySelectorAll("[title]")); // catch all title attributes