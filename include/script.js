    function sunny() {
    document.getElementById("conditionsbg").style.backgroundImage = "url('include/sunnybg.jpg')";
    document.getElementById("photo1").style.backgroundImage = "url('include/sunny01.jpg')";
    document.getElementById("photo2").style.backgroundImage = "url('include/sunny02.jpg')";
    document.getElementById("photo3").style.backgroundImage = "url('include/sunny03.jpg')";
    document.getElementById("photo4").style.backgroundImage = "url('include/sunny04.jpg')";
}

    function storm() {
    document.getElementById("conditionsbg").style.background = "#000";
}

    function snow() {
    document.getElementById("conditionsbg").style.background = "#FFF";
    document.getElementById("photo1").style.backgroundImage = "url('include/snow01.jpg')";
    document.getElementById("photo2").style.backgroundImage = "url('include/snow02.jpg')";
    document.getElementById("photo3").style.backgroundImage = "url('include/snow03.jpg')";
    document.getElementById("photo4").style.backgroundImage = "url('include/snow04.jpg')";
}

    function defaults() {
    document.getElementById("conditionsbg").style.background = "#071523";
    document.getElementById("photo1").style.backgroundImage = "url('include/default01.jpg')";
    document.getElementById("photo2").style.backgroundImage = "url('include/default02.jpg')";
    document.getElementById("photo3").style.backgroundImage = "url('include/default03.jpg')";
    document.getElementById("photo4").style.backgroundImage = "url('include/default04.jpg')";
}