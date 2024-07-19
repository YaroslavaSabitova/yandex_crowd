export default function () {
    const sliderImages = document.querySelectorAll('.js_players_img');
    const sliderLine = document.querySelector('.js_players_wrapper');
    const sliderBtnNext = document.querySelector('.js_players_next');
    const sliderBtnPrev = document.querySelector('.js_players_prev');

    const sliderWidth = document.querySelector('.players-slider').offsetWidth;
    const sliderGap = 20;
    const img = document.querySelector('.players-slider__img').offsetWidth;
    const imgWidth = img + sliderGap;

    console.log('sliderWidth', sliderWidth);
    console.log('img', img);
    console.log('imgWidth', imgWidth);

    const totalLength = imgWidth * sliderImages.length;
    console.log('totalLength', totalLength);

    const finalLength = totalLength - 3 * imgWidth;
    console.log('finalLength', finalLength);

    let shift = 1;
    let position = 0;
    let sliderCount = 0;

    if (sliderCount === 0) {
        sliderBtnPrev.setAttribute('disabled', 'disabled');
        sliderBtnNext.setAttribute('style', 'background-color: #313131;');
    }

    sliderBtnNext.onclick = function () {
        sliderBtnPrev.removeAttribute('disabled', 'disabled');
        sliderBtnNext.setAttribute('style', 'background-color: #fbce51;');

        sliderCount++;

        position += imgWidth * shift;

        sliderLine.setAttribute('style', `transform: translateX(${-position}px)`);

        console.log('position', position);

        if (sliderCount >= sliderImages.length - 2) {
            sliderCount = 0;
            position = 0;

            sliderLine.setAttribute('style', `transform: translateX(${position}px)`);
            sliderBtnPrev.setAttribute('disabled', 'disabled');
        }

        console.log('sliderCount', sliderCount);
    };

    sliderBtnPrev.onclick = function () {
        sliderBtnPrev.setAttribute('style', 'background-color: #fbce51;');
        sliderBtnNext.setAttribute('style', 'background-color: #313131;');

        sliderCount--;

        if (sliderCount <= 0) {
            sliderBtnPrev.removeAttribute('style');
            sliderBtnPrev.setAttribute('disabled', 'disabled');
            sliderBtnNext.setAttribute('style', 'background-color: #313131;');
        }

        console.log('sliderCount2', sliderCount);

        position -= imgWidth * shift;

        sliderLine.setAttribute('style', `transform: translateX(${-position}px)`);

        if (sliderCount === 0) {
            sliderBtnPrev.setAttribute('disabled', 'disabled');
            sliderBtnNext.setAttribute('style', 'background-color: #313131;');
        }
    };
}
