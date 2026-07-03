fetch("home.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("home").innerHTML = html;
  });



function load(file, id){
    fetch(file)
      .then(res => res.text())
      .then(html => {
          document.getElementById(id).innerHTML = html;
      });
}

load("header.html","header");
load("welcom.html","welcom");
load("add.html","add");
load("readmore.html","readmore");
load("Func.html","Func");
load("sadasy.html","sadasy");




const slides = document.querySelectorAll('#myCarousel .carousel-slide img');
  const prevBtn = document.querySelector('#myCarousel .prev');
  const nextBtn = document.querySelector('#myCarousel .next');
  const dotsContainer = document.querySelector('#myCarousel .carousel-dots');
  
  let index = 0;
  let interval = setInterval(nextSlide, 3000); // Auto Slide (3 sec)

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      index = i;
      showSlide();
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll('button');

  function showSlide() {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  } 

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide();
  }
  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide();
  }

  nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
  prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 3000);
  }

  // Pause on hover
  document.querySelector('#myCarousel').addEventListener('mouseenter', () => clearInterval(interval));
  document.querySelector('#myCarousel').addEventListener('mouseleave', () => resetInterval());







