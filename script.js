const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});



document.addEventListener('DOMContentLoaded', () => {
  let timer_ =  1725042600
  let flipdown = new FlipDown(timer_)
      .start()
      .ifEnded(() => {
          document.querySelector(".flipdown").innerHTML = `<h2>Timer is ended</h2>`;
      })
})

document.addEventListener("DOMContentLoaded", function() {
  const preloaderTime = 5000;

  setTimeout(function() {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }, preloaderTime);
});

    
        $('.team-members').slick({
            slidesToShow: 3,
            speed: 300,
            prevArrow:'#left-arrow',
            nextArrow:'#right-arrow',
            centerPadding: '60px',
            responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]});
 
function myFunction() {
  var x = document.getElementById("bottom");
  var y = document.getElementById("button-24");
  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
}
    