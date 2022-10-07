const scroll = () => {
    // document.getElementById("downhere").scrollIntoView();
    // scrollTo(500, 500)
}

var slideIndex = 1;
var slideIndex2 = 1
var slideIndex3 = 1
var slideIndex4 = 1


showDivs(slideIndex);
showDivs2(slideIndex2);
showDivs3(slideIndex3);
showDivs4(slideIndex4);





function plusDivs(n, index) {

  

  if(index == 0) {
    showDivs(slideIndex += n)
  } else if (index == 1) {
    showDivs2(slideIndex2 += n)
  } else if (index == 2) {
    showDivs3(slideIndex3 += n)
  } else if (index == 3) {
    showDivs4(slideIndex4 += n)
  }

  // if(index == 0) {
    // showDivs(slideIndex += n);
  // } else if (index == 1) {
} 

function plusDivs2(n) {

  // if(index == 0) {
    showDivs2(slideIndex += n);
  // } else if (index == 1) {
} 


function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("section-subtitle-container")
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none"
  }
  x[slideIndex-1].style.display = "block";
  y[slideIndex - 1].style.display = "block"
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  // var y = document.getElementsByClassName("section-subtitle-container2")
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    // y[i].style.display = "none"
  }
  x[slideIndex2-1].style.display = "block";
  // y[slideIndex2 - 1].style.display = "block"
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  var y = document.getElementsByClassName("section-subtitle-container3")
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none"
  }
  x[slideIndex3-1].style.display = "block";
  y[slideIndex3 - 1].style.display = "block"
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  var y = document.getElementsByClassName("section-subtitle-container4")
  if (n > x.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none"
  }
  x[slideIndex4-1].style.display = "block";
  y[slideIndex4 - 1].style.display = "block"
}