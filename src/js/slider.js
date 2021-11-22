const slides = document.querySelectorAll('.reviews-slide'),
      slidesWrapper = document.querySelector('.reviews-wrapper'),
      sliderNavWrapper = document.querySelector('.reviews-slider__navigation'),
      sliderNavItems = document.querySelectorAll('.reviews-slider__circle');

let currentSlide;

function hideSlides() {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    })
    sliderNavItems.forEach((item) => {
        item.classList.remove('reviews-slider__circle_active');
    })
}

function showSlide(i = 0) {
    hideSlides();
    slides[i].style.display = 'grid';
    sliderNavItems[i].classList.add('reviews-slider__circle_active');
    currentSlide = i;
}

function changeSlide() {
    if (currentSlide < 2) {
        showSlide(currentSlide + 1);
    } else {
        showSlide(0);
    }
}

showSlide(0);

sliderNavWrapper.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('reviews-slider__circle')) {
        sliderNavItems.forEach((item, i) => {
            if (item == e.target) {
                showSlide(i);
            }
        })
    }
})
