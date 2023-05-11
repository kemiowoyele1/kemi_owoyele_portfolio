var galleryContainer = document.querySelector(".gallery-container");
var description = document.querySelector(".description1");
var linkToCode = document.querySelector(".description");
var image1 = document.querySelector(".image");
var seeCode = document.querySelector("#see-code");
var next1 = document.querySelector(".next");
var back1 = document.querySelector(".back");
var currentNumber = 0;
var flip = document.querySelector(".flip-cover");
var flipImage = document.querySelector(".flip-image");

function displayCard() {
  var card = flashItems[currentNumber];
  image1.style.backgroundImage = "url(" + card.image + ")";

  description.textContent = card.aboutImage;
  linkToCode.setAttribute("href", card.link);
  seeCode.textContent = card.seeMore;
}
next1.addEventListener("click", function () {
  loadNextCard();
  flipPage();
  setTimeout(function () {
    flip.style.display = "none";
    displayCard(currentNumber);
  }, 300);
});

back1.addEventListener("click", function () {
  loadPreviousCard();
  setTimeout(function () {
    flip.style.display = "none";
    displayCard(currentNumber);
  }, 300);
});

var animate;

function flipPage() {
  var card = flashItems[currentNumber];

  flip.style.display = "block";
  flip.style.animation = animate + " .5s ease";
  flipImage.style.backgroundImage = "url(" + card.image + ")";
  setTimeout(function () {
    flip.style.display = "none";
    displayCard(currentNumber);
  }, 300);
}

function loadNextCard() {
  animate = "flip";
  if (currentNumber >= flashItems.length - 1) {
    currentNumber = 0;
    //  displayCard(currentNumber);
    flipPage();
  } else {
    currentNumber += 1;
    // displayCard(currentNumber);
    flipPage();
  }
}

function loadPreviousCard() {
  animate = "flip-back";

  if (currentNumber === 0) {
    currentNumber = flashItems.length - 1;
    displayCard(currentNumber);
    flipPage("flip-back");
  } else {
    flipPage();
    currentNumber--;
    displayCard(currentNumber);
  }
}

displayCard();

//slide touch function
galleryContainer.addEventListener("touchstart", function (evt) {
  startingX = evt.touches[0].clientX;
});galleryContainer.addEventListener("touchmove", function (evt) {
  var touch = evt.touches[0];
  var change = startingX - touch.clientX;
});galleryContainer.addEventListener("touchend", function (evt) {
  var change = startingX - evt.changedTouches[0].clientX;
  var threshold = screen.width / 8;
  //	 if (change < threshold){

  if (change > 0 && change > threshold) {
    loadNextCard();
   
  } else if (change < threshold && change < 0) {
    loadPreviousCard();
    
  } else {
    displayCard(currentNumber);
   
  }
});


