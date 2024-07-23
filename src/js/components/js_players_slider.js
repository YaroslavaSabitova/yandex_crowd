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

    let shift = 1;
    let position = 0;
    let sliderCount = 0;
    let currentValue = currentPlayers.textContent;
    let totalValue = totalPlayers.textContent;

    // console.log('currentValue', currentValue);
    // console.log('totalValue', totalValue);

    if (sliderCount === 0) {
        sliderBtnPrev.setAttribute('disabled', 'disabled');
        sliderBtnNext.setAttribute('style', 'background-color: #313131;');
    }

    if (window.innerWidth >= 767 && 990 >= window.innerWidth) {
        currentValue = 2;
        currentPlayers.textContent = currentValue;
    }

    if (window.innerWidth <= 766) {
        currentValue = 1;
        currentPlayers.textContent = currentValue;
    }

    function nextPlayersSlide() {
        sliderBtnPrev.removeAttribute('disabled', 'disabled');
        sliderBtnNext.setAttribute('style', 'background-color: #fbce51;');

        sliderCount++;

        currentValue++;
        // console.log('currentValue2', currentValue);
        currentPlayers.textContent = currentValue;
        changeValue();

        position += imgWidth * shift;

        // console.log('sliderCount', sliderCount);

        sliderLine.setAttribute('style', `transform: translateX(${-position}px)`);

        if (window.innerWidth <= 766) {
            if (sliderCount >= sliderImages.length) {
                startPosition();
            }
        }

        if (
            window.innerWidth >= 767 &&
            990 >= window.innerWidth &&
            sliderCount >= sliderImages.length - 2
        ) {
            if (sliderCount >= sliderImages.length - 1) {
                startPosition();
            }
        }

        if (window.innerWidth >= 991 && sliderCount >= sliderImages.length - 2) {
            startPosition();
        }
    }

    function changeValue() {
        if (currentValue > totalValue && window.innerWidth >= 991) {
            currentValue = 3;
            currentPlayers.textContent = currentValue;
        }

        if (currentValue > totalValue && window.innerWidth >= 767 && 990 >= window.innerWidth) {
            currentValue = 2;
            currentPlayers.textContent = currentValue;
        }

        if (currentValue > totalValue && window.innerWidth <= 766) {
            currentValue = 1;
            currentPlayers.textContent = currentValue;
        }
    }

    function startPosition() {
        sliderCount = 0;
        position = 0;
        sliderLine.setAttribute('style', `transform: translateX(${position}px)`);
        sliderBtnNext.setAttribute('style', 'background-color: #313131;');
        sliderBtnPrev.setAttribute('disabled', 'disabled');
    }

    function prevPlayersSlide() {
        sliderBtnPrev.setAttribute('style', 'background-color: #fbce51;');
        sliderBtnNext.setAttribute('style', 'background-color: #313131;');

        sliderCount--;

        currentValue--;
        console.log('currentValuePrev', currentValue);
        currentPlayers.textContent = currentValue;

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
