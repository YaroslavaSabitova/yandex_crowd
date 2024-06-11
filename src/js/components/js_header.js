export default function () {
    const header = document.querySelector('.js_header');
    const parallax = document.querySelector('.js_parallax');

    parallax.addEventListener('scroll', function () {
        if (parallax.scrollTop > 0) {
            header.classList.add('header-fixed');
        } else {
            header.classList.remove('header-fixed');
        }
    });
}
