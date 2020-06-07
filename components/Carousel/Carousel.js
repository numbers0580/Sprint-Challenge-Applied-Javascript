/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let crsContainer = document.querySelector('.carousel-container');
let imgIndex = 0;
crsContainer.appendChild(carouselMaker());

function carouselMaker() {
  let mainCarousel = document.createElement('div');
  let leftBtn = document.createElement('div');
  let rightBtn = document.createElement('div');
  let theImages = [];
  for(let i = 0; i < 4; i++) {
    theImages.push(document.createElement('img'));
  }

  mainCarousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  leftBtn.textContent = ' < ';
  leftBtn.addEventListener('click', function(event) {
    theImages[imgIndex].style.display = 'none';
    imgIndex--;
    if(imgIndex < 0) imgIndex = 3;
    theImages[imgIndex].style.display = 'block';
  });
  rightBtn.classList.add('right-button');
  rightBtn.textContent = ' > ';
  rightBtn.addEventListener('click', function(event) {
    theImages[imgIndex].style.display = 'none';
    imgIndex++;
    if(imgIndex > 3) imgIndex = 0;
    theImages[imgIndex].style.display = 'block';
  });
  theImages[0].setAttribute('src', './assets/carousel/mountains.jpeg');
  theImages[0].style.display = 'block';
  theImages[1].setAttribute('src', './assets/carousel/computer.jpeg');
  theImages[2].setAttribute('src', './assets/carousel/trees.jpeg');
  theImages[3].setAttribute('src', './assets/carousel/turntable.jpeg');

  mainCarousel.appendChild(leftBtn);
  for(let j = 0; j < 4; j++) {
    mainCarousel.appendChild(theImages[j]);
  }
  mainCarousel.appendChild(rightBtn);

  return mainCarousel;
}
