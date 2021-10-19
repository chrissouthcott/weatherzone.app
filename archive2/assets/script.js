function photoOne() {
    document.getElementById("bg1").style.opacity = "1";
    document.getElementById("bg2").style.opacity = "0";
    document.getElementById("bg3").style.opacity = "0";
    document.getElementById("screenshot1").style.opacity = "1";
    document.getElementById("screenshot2").style.opacity = "0";
    document.getElementById("screenshot3").style.opacity = "0";
}

function photoTwo() {
    document.getElementById("bg1").style.opacity = "0";
    document.getElementById("bg2").style.opacity = "1";
    document.getElementById("bg3").style.opacity = "0";
    document.getElementById("screenshot1").style.opacity = "0";
    document.getElementById("screenshot2").style.opacity = "1";
    document.getElementById("screenshot3").style.opacity = "0";
}

function photoThree() {
    document.getElementById("bg1").style.opacity = "0";
    document.getElementById("bg2").style.opacity = "0";
    document.getElementById("bg3").style.opacity = "1";
    document.getElementById("screenshot1").style.opacity = "0";
    document.getElementById("screenshot2").style.opacity = "0";
    document.getElementById("screenshot3").style.opacity = "1";
}