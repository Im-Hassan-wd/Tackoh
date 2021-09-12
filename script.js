let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.fromTo('.skin-text', {opacity: 1}, {opacity: 0});

// mouse cursor
const mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}