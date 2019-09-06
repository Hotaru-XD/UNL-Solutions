$('.slider').slick({
    prevArrow: '<img src="./images/leftArrow.png" class = "arrow__left">',
  nextArrow: '<img src="./images/rightArrow.png" class = "arrow__right">'
});


function changeLanguage(language) {
  document.getElementById('language').innerHTML = language;
}

