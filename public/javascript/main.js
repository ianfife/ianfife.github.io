var darkMode = document.getElementById("footer-button-dark");
var lightMode = document.getElementById("footer-button-light");
var icons = document.getElementById("icons");
var lightTheme = true;
var theme = window.localStorage.getItem('theme');

function setLightMode() {
    document.getElementById("content-wrap").style.cssText = 'background-color: white';
    footer.style.cssText = 'background-color: white';
    intro.style.cssText = 'color: black';
    var elements = icons.getElementsByTagName("i"), i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.color = 'black';
    }
    lightMode.style.cssText = 'display: none';
    darkMode.style.cssText = 'display: block';
    window.localStorage.setItem('theme', 'light');
}

function setDarkMode() {
    document.getElementById("content-wrap").style.cssText = 'background-color: black';
    footer.style.cssText = 'background-color: black';
    intro.style.cssText = 'color: white';
    var elements = icons.getElementsByTagName("i"), i, len;
    for (i = 0, len = elements.length; i < len; i++) {
        elements[i].style.color = 'white';
    }
    lightMode.style.cssText = 'display: block';
    darkMode.style.cssText = 'display: none';
    window.localStorage.setItem('theme', 'dark');
}

function init() {
    if (theme == 'dark') {
        setDarkMode();
    }
    else {
        setLightMode();
    }
}

init();
