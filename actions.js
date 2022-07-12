let slideIndex = 1;
window.onload = function () {
    showSlides(slideIndex);    
}

setInterval(function () {
    plusSlide(1);
}, 5000);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");

    if(n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

for (var i = 0; i <= 4; i++) {

    document.querySelectorAll(".menu-item")[i].addEventListener("mouseover", function () {
        var menuTitle = this.classList[1];
        var menuBoxName = "." + menuTitle.slice(0, -5);
        document.querySelector(menuBoxName).style.visibility = "visible";
        document.querySelector("." + menuTitle).style.backgroundColor = "greenyellow";
    });
}

for (var i = 0; i <= 4; i++) {

    document.querySelectorAll(".menu-item")[i].addEventListener("mouseout", function (e) {
        var menuTitle = this.classList[1];
        var menuBoxName = "." + menuTitle.slice(0, -5);

        if (e.relatedTarget != null) {
            if (e.relatedTarget.classList[1] == menuBoxName.slice(1)) {
                document.querySelector(menuBoxName).style.visibility = "visible";
                document.querySelector("." + menuTitle).style.backgroundColor = "greenyellow";
            } else {
                document.querySelector(menuBoxName).style.visibility = "hidden";
                document.querySelector("." + menuTitle).style.backgroundColor = "transparent";
            }
        }
    });
}

for (var i = 0; i <= 4; i++) {

    document.querySelectorAll(".sub-menu")[i].addEventListener("mouseenter", function () {
        var menuBoxName = this.classList[1];
        var menuTitle = "." + menuBoxName + "-menu" ;
        document.querySelector(menuTitle).style.backgroundColor = "greenyellow";
    });
}

for (var i = 0; i <= 4; i++) {

    document.querySelectorAll(".sub-menu")[i].addEventListener("mouseleave", function (e) {
        var menuBoxName = this.classList[1];
        var menuTitle = "." + menuBoxName + "-menu";

        if (e.relatedTarget != null) {
            if (e.relatedTarget.classList[1] !== menuTitle.slice(1)) {
                this.style.visibility="hidden";
                document.querySelector(menuTitle).style.backgroundColor = "transparent";
            }
        }
    });
}

for (var i = 0; i < 20; i++) {
    document.querySelectorAll(".sub-menu-article")[i].addEventListener("mouseenter", function(e) {
        var part = this.classList[1].slice(-2);
        var catPart = ".cat-" + part;
        document.querySelector(catPart).style.visibility = "visible";
    });
}

for (var i = 0; i < 20; i++) {
    document.querySelectorAll(".sub-menu-article")[i].addEventListener("mouseleave", function(e) {
        var part = this.classList[1].slice(-2);
        var catPart = ".cat-" + part;
        document.querySelector(catPart).style.visibility = "hidden";
    });
}

