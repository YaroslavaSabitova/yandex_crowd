export default function () {
    const logo = document.querySelector('.js_logo');
    const parallax = document.querySelector('.js_parallax');

    logo.addEventListener('click', function () {
        parallax.scrollTop = 0;
    });
}
