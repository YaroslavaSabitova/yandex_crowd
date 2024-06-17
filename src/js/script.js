import js_shineElem from './components/js_shineElem.js';
import js_header from './components/js_header.js';
import js_title from './components/js_title.js';

(function () {
    js_shineElem();
    js_header();
    js_title();

    document.querySelector('.js_button-1').addEventListener('click', function () {
        window.location.href = 'https://qna.habr.com/q/1306664';
    });
})();
