export default function () {
    const btn1 = document.querySelector('.js_button-1');
    const btn2 = document.querySelector('.js_button-2');

    btn1.onclick = function () {
        window.location.href = '#js_button-1';
    };

    btn2.onclick = function () {
        window.location.href = '#js_button-2';
    };
}
