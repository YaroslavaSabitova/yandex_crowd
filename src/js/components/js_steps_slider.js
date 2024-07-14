export default function () {
    const sliderImages = document.querySelectorAll('.steps-slider__img');
    const sliderLine = document.querySelector('.steps-slider__wrapper');
    const sliderDots = document.querySelectorAll('.steps-slider__dot');
    const sliderBtnNext = document.querySelector('.steps-slider__btn_next');
    const sliderBtnPrev = document.querySelector('.steps-slider__btn_prev');

    let sliderCount = 0,
        sliderWidth;

    const maxStep = sliderImages.length - 1;

    if (sliderCount >= 0) {
        sliderBtnPrev.setAttribute('disabled', 'disabled');
        sliderBtnNext.setAttribute('style', 'background-color: #313131;');
    }

    sliderBtnNext.addEventListener('click', nextSlide);
    sliderBtnPrev.addEventListener('click', prevSlide);

    function showSlide() {
        sliderWidth = document.querySelector('.steps-slider').offsetWidth;
        sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
        sliderImages.forEach(item => (item.style.width = sliderWidth + 'px'));

        rollSlider();
    }
    showSlide();

    function endSlider() {
        if (sliderCount === maxStep) {
            sliderBtnNext.removeAttribute('style');
            sliderBtnNext.setAttribute('disabled', 'disabled');
            sliderBtnPrev.setAttribute('style', 'background-color: #313131;');
        } else {
            sliderBtnNext.removeAttribute('disabled', 'disabled');
        }
    }

    function startSlider() {
        if (sliderCount === 0) {
            sliderBtnPrev.removeAttribute('style');
            sliderBtnPrev.setAttribute('disabled', 'disabled');
            sliderBtnNext.setAttribute('style', 'background-color: #313131;');
        } else {
            sliderBtnPrev.removeAttribute('disabled', 'disabled');
        }
    }

    function nextSlide() {
        sliderBtnPrev.removeAttribute('disabled', 'disabled');
        sliderBtnPrev.setAttribute('style', 'background-color: #313131;');
        sliderBtnNext.setAttribute('style', 'background-color: #fbce51;');

        sliderCount++;

        // console.log('sliderCountNext', sliderCount);

        endSlider();

        rollSlider();
        thisSlide(sliderCount);
    }

    function prevSlide() {
        sliderBtnNext.removeAttribute('disabled', 'disabled');
        sliderBtnNext.setAttribute('style', 'background-color: #313131;');
        sliderBtnPrev.setAttribute('style', 'background-color: #fbce51;');

        sliderCount--;

        // console.log('sliderCountPrev', sliderCount);

        startSlider();

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
            sliderBtnPrev.setAttribute('style', 'background-color: #313131;');
            sliderBtnNext.setAttribute('style', 'background-color: #313131;');

            sliderCount = index;

            endSlider(index);
            startSlider(index);

            // console.log('index', index);

            rollSlider();
            thisSlide(sliderCount);
        });
    });
}
