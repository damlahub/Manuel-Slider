let leftArrow = document.querySelector("#btn-left");
let rightArrow = document.querySelector("#btn-right");
let images = document.querySelector(".images");
let counter = 0;
const IMAGES = [
   {
      id: 0,
      img: "Images/bir.png"
   },
   {
      id: 1,
      img: "Images/iki.png"
   },
   {
      id: 2,
      img: "Images/uc.png"
   }
]
Counter();
ShowSlider();
function Counter() {
   leftArrow.addEventListener("click", function LeftArrow() {
      counter--;
      console.log(counter);
      if (counter < 0) {
         counter = IMAGES.length - 1;
      }
      ShowSlider();
   });
   rightArrow.addEventListener("click", function RightArrow() {
      counter++;
      console.log(counter);
      if (counter >= IMAGES.length) {
         counter = 0;
      }
      ShowSlider();
   });
}
function ShowSlider() {
   while (images.firstChild) {
      images.removeChild(images.firstChild);
   }
   let imgDOM = document.createElement("img");
   imgDOM.src = IMAGES[counter].img;
   imgDOM.classList.add("image");
   images.appendChild(imgDOM);
}