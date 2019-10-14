var slideIndex = 1;
var slideClass = 'ice-skate';
showDivs(slideIndex, slideClass);

let slideIndex2 = 1;
let slideClass2 = 'beach-day';
showDivs(slideIndex2, slideClass2);

function plusDivs(n, name) {
    showDivs(slideIndex += n, name);
}
  
function currentDiv(n, name) {
    showDivs(slideIndex = n, name);
}

function showDivs(n, name) {
    var i;
    var image_array = document.getElementsByClassName(name + "-img");
    var indicator = document.getElementsByClassName(name + "-ind");

    if(n > image_array.length) {slideIndex = 1}
    if (n < 1) {slideIndex = image_array.length}

    for (i = 0; i < image_array.length; i++){
        image_array[i].style.display = "none";
    }

    for (i =0; i < indicator.length; i++){
        indicator[i].className = indicator[i].className.replace(" active", "");
    }

    image_array[slideIndex - 1].style.display = "block";
    indicator[slideIndex - 1].className += " active";
}
