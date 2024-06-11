export default function () {
    const parallax = document.querySelector('.js_parallax');
    const title = document.querySelector('.js_title');

    const SPEED = 1;
    const OPACITY = -0.2;

    const parallaxHeight = parallax.getBoundingClientRect().height.toFixed(0);

    function changeTitlePos() {
        const titleTransformY = (parallax.scrollTop / parallaxHeight).toFixed(3) * 100 * SPEED;

        const titleOpacity = 1 - (parallax.scrollTop / parallaxHeight).toFixed(1) + OPACITY;

        title.setAttribute(
            'style',
            `transform: translate(0, ${titleTransformY}%); opacity: ${titleOpacity};`
        );

        if (parallax.scrollTop === 0) {
            title.style.opacity = 1;
        }

        let newPos = document.documentElement.clientHeight / 9.5;

        // to prevent unlimited scrolling
        if (titleTransformY.toFixed(0) >= newPos) {
            title.setAttribute(
                'style',
                `transform: translate(0, ${newPos}%); opacity: ${titleOpacity};`
            );
        }
    }

    parallax.onscroll = changeTitlePos;
}
