(function () {
    // create button, add content & insert to html
    function ipgCreateButton() {
        var ipgNewButton = document.createElement("button");
        ipgNewButton.classList.add("ipgBackToTop", "hidden");
        ipgNewButton.textContent = "Wróć";
        document.body.appendChild(ipgNewButton);
        return ipgNewButton;
    }
    // smooth animation    
    function ipgAnimateScroll() {
        if (document.body.scrollTop > 0) {
            window.scrollBy(0, -5);
            setTimeout(ipgAnimateScroll, 5);
        }
    }
    // pass reference to function
    var ipgButton = ipgCreateButton();
    // add click on button
    ipgButton.addEventListener("click", function (e) {
        e.stopPropagation();
        ipgAnimateScroll();
    }, false);
    // show & hide button
    window.addEventListener("scroll", function (e) {
        if (document.body.scrollTop >= 149) {
            ipgButton.classList.remove("hidden");
        }
        else {
            ipgButton.classList.add("hidden");
        }
    }, false);
})();