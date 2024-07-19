export default function () {
    const sliderImages = document.querySelectorAll('.js_players_img');
    const sliderLine = document.querySelector('.js_players_wrapper');
    const sliderBtnNext = document.querySelector('.js_players_next');
    const sliderBtnPrev = document.querySelector('.js_players_prev');
    const currentPlayers = document.querySelector('.js_players_current');
    const totalPlayers = document.querySelector('.js_players_total');

    const sliderGap = 20;
    const img = document.querySelector('.players-slider__img').offsetWidth;
    const imgWidth = img + sliderGap;

    // console.log('img', img);
    // console.log('imgWidth', imgWidth);

    let shift = 1;
    let position = 0;
    let sliderCount = 0;

    if (sliderCount === 0) {
        sliderBtnPrev.setAttribute('disabled', 'disabled');
        sliderBtnNext.setAttribute('style', 'background-color: #313131;');
    }

    function nextPlayersSlide() {
        sliderBtnPrev.removeAttribute('disabled', 'disabled');
        sliderBtnNext.setAttribute('style', 'background-color: #fbce51;');

        sliderCount++;

        position += imgWidth * shift;

        // console.log('position', position);

        sliderLine.setAttribute('style', `transform: translateX(${-position}px)`);

        if (sliderCount >= sliderImages.length - 2) {
            sliderCount = 0;
            position = 0;

            sliderLine.setAttribute('style', `transform: translateX(${position}px)`);
            sliderBtnNext.setAttribute('style', 'background-color: #313131;');
            sliderBtnPrev.setAttribute('disabled', 'disabled');
        }
    }

    function prevPlayersSlide() {
        sliderBtnPrev.setAttribute('style', 'background-color: #fbce51;');
        sliderBtnNext.setAttribute('style', 'background-color: #313131;');

        sliderCount--;

        // console.log('sliderCount', sliderCount);

        if (sliderCount <= 0) {
            sliderBtnPrev.removeAttribute('style');
            sliderBtnPrev.setAttribute('disabled', 'disabled');
            sliderBtnNext.setAttribute('style', 'background-color: #313131;');
        }

        position -= imgWidth * shift;

        sliderLine.setAttribute('style', `transform: translateX(${-position}px)`);

        if (sliderCount === 0) {
            sliderBtnPrev.setAttribute('disabled', 'disabled');
            sliderBtnNext.setAttribute('style', 'background-color: #313131;');
        }
    }

    sliderBtnNext.onclick = nextPlayersSlide;
    sliderBtnPrev.onclick = prevPlayersSlide;

    setInterval(() => {
        nextPlayersSlide();
    }, 4000);
}
