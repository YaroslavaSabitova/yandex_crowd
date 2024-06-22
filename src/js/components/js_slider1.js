export default function () {
    const sliderImages = document.querySelectorAll('.steps-slider__img');
    const sliderLine = document.querySelector('.steps-slider__wrapper');
    const sliderDots = document.querySelectorAll('.steps-slider__dot');
    const sliderBtnNext = document.querySelector('.steps-slider__btn_next');
    const sliderBtnPrev = document.querySelector('.steps-slider__btn_prev');

    let sliderCount = 0,
        sliderWidth;

    sliderBtnNext.addEventListener('click', nextSlide);
    sliderBtnPrev.addEventListener('click', prevSlide);

    function showSlide() {
        sliderWidth = document.querySelector('.steps-slider').offsetWidth;
        sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
        sliderImages.forEach(item => (item.style.width = sliderWidth + 'px'));

        rollSlider();
    }
    showSlide();

    function nextSlide() {
        sliderCount++;
        if (sliderCount >= sliderImages.length) sliderCount = 0;

        rollSlider();
        thisSlide(sliderCount);
    }

    function prevSlide() {
        sliderCount--;
        if (sliderCount < 0) sliderCount = sliderImages.length - 1;

        rollSlider();
        thisSlide(sliderCount);
    }

    function rollSlider() {
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
    }

    function thisSlide(index) {
        sliderDots.forEach(item => item.classList.remove('active-dot'));
        sliderDots[index].classList.add('active-dot');
    }

    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sliderCount = index;
            rollSlider();
            thisSlide(sliderCount);
        });
    });
}
