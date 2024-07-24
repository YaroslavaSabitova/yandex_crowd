export default function () {
    const btn1 = document.querySelector('.js_button-1');
    const btn2 = document.querySelector('.js_button-2');
    const steps = document.querySelector('.js_steps');
    const parallax = document.querySelector('.js_parallax');

    btn1.onclick = function () {
        document.location.href = '#js_button-1';
    };

    // btn2.onclick = function () {
    //     document.location.href = '#js_button-2';
    // };

    // console.log('steps.offsetTop', steps.offsetTop);

    btn2.onclick = function () {
        parallax.scrollTo({ top: steps.offsetTop });
    };
}
