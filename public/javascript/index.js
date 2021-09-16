var darkMode = document.getElementById("footer-button-dark");
var lightMode = document.getElementById("footer-button-light");
var icons = document.getElementById("icons");
var lightTheme = true;

darkMode.onclick = function(e) {
    document.getElementById("content-wrap").style.cssText = 'background-color: white';
    footer.style.cssText = 'background-color: white';
    intro.style.cssText = 'color: black';
    var elements = icons.getElementsByTagName("i"), i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.color = 'black';
    }
    darkMode.style.cssText = 'display: none';
    lightMode.style.cssText = 'display: block';
}

lightMode.onclick = function(e) {
    document.getElementById("content-wrap").style.cssText = 'background-color: black';
    footer.style.cssText = 'background-color: black';
    intro.style.cssText = 'color: white';
    var elements = icons.getElementsByTagName("i"), i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.color = 'white';
    }
    lightMode.style.cssText = 'display: none';
    darkMode.style.cssText = 'display: block';
}