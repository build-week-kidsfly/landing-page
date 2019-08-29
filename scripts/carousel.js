// /* If You've gotten this far, you're on your own! Although we will give you some hints:
//     1. You will need to write a function that creates the carousel component, you will find the HTML below.
//     2. You will need to grab a reference to all of the images
//     3. Create a current index
//     4. Those buttons are gonna need some click handlers.
//     5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
//     6. Have fun!
// */

// /* HTML:
//   <div class="carousel">
//     <div class="left-button"> < </div>
//     <img src="./assets/carousel/mountains.jpeg" />
//     <img src="./assets/carousel/computer.jpeg" />
//     <img src="./assets/carousel/trees.jpeg" />
//     <img src="./assets/carousel/turntable.jpeg" />
//     <div class="right-button"> > </div>
//   </div>
// */
// const carouselContainer = document.querySelector('.carousel-container');
// // console.log(carouselContainer);

// function carouselC() {
//   const carousel = document.createElement('div');
//   carousel.classList.add('carousel');

//   const leftButton = document.createElement('div');
//   leftButton.classList.add('left-button');
//   leftButton.textContent = '<';
//   leftButton.addEventListener('click', () => moveLeft());

//   const img1 = document.createElement('img');
//   img1.src = './assets/carousel/mountains.jpeg';
//   img1.style.display = 'block';

//   const img2 = document.createElement('img');
//   img2.src = './assets/carousel/computer.jpeg';

//   const img3 = document.createElement('img');
//   img3.src = './assets/carousel/trees.jpeg';

//   const img4 = document.createElement('img');
//   img4.src = './assets/carousel/turntable.jpeg';

//   const imgArray = [
//     img1,
//     img2,
//     img3,
//     img4
//   ]

//   console.log(imgArray);

//   i = 0;

//   function moveLeft() {
//     if (i === 0) {
//       imgArray[i].style.display = 'none';
//       i = imgArray.length - 1;
//       imgArray[i].style.display = 'block';
//     } else {
//       imgArray[i].style.display = 'none';
//       i--;
//       imgArray[i].style.display = 'block';
//     }
//   }

//   function moveRight() {
//     if (i === imgArray.length - 1) {
//       imgArray[i].style.display = 'none';
//       i = 0;
//       imgArray[i].style.display = 'block';
//     } else {
//       imgArray[i].style.display = 'none';
//       i++;
//       imgArray[i].style.display = 'block';
//     }
//   }

//   const rightButton = document.createElement('div');
//   rightButton.classList.add('right-button');
//   rightButton.textContent = '>';
//   rightButton.addEventListener('click', () => moveRight());

//   carousel.appendChild(leftButton);
//   carousel.appendChild(img1);
//   carousel.appendChild(img2);
//   carousel.appendChild(img3);
//   carousel.appendChild(img4);
//   carousel.appendChild(rightButton);

//   return carousel;
// }

// carouselContainer.appendChild(carouselC());
// console.log(carouselContainer);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
