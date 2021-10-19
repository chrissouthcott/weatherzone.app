function sunny() {
    document.getElementById("background1").style.opacity = "1";
    document.getElementById("background2").style.opacity = "0";
    document.getElementById("background3").style.opacity = "0";
    document.getElementById("screenshot1").style.opacity = "1";
    document.getElementById("screenshot2").style.opacity = "0";
    document.getElementById("screenshot3").style.opacity = "0";
}

function thunderstorms() {
    document.getElementById("background1").style.opacity = "0";
    document.getElementById("background2").style.opacity = "1";
    document.getElementById("background3").style.opacity = "0";
    document.getElementById("screenshot1").style.opacity = "0";
    document.getElementById("screenshot2").style.opacity = "1";
    document.getElementById("screenshot3").style.opacity = "0";
}

function snow() {
    document.getElementById("background1").style.opacity = "0";
    document.getElementById("background2").style.opacity = "0";
    document.getElementById("background3").style.opacity = "1";
    document.getElementById("screenshot1").style.opacity = "0";
    document.getElementById("screenshot2").style.opacity = "0";
    document.getElementById("screenshot3").style.opacity = "1";
}