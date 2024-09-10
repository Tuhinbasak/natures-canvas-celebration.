let currentSlide = 1;

document.getElementById('section1').classList.add('active');

function nextSlide() {
    let current = document.querySelector('section.active');
    current.classList.remove('active');
    current.classList.add('swipe-out');

    currentSlide++;
    if (currentSlide > 4) currentSlide = 1;

    let next = document.getElementById('section' + currentSlide);
    next.classList.add('active');
    next.classList.add('swipe-in');

    // Remove the swipe-in class after animation
    next.addEventListener('animationend', () => {
        next.classList.remove('swipe-in');
        current.classList.remove('swipe-out');
    });
}

function restart() {
    currentSlide = 1;
    let current = document.querySelector('section.active');
    current.classList.remove('active');
    current.classList.add('swipe-out');

    let first = document.getElementById('section1');
    first.classList.add('active');
    first.classList.add('swipe-in');

    // Remove the swipe-in class after animation
    first.addEventListener('animationend', () => {
        first.classList.remove('swipe-in');
        current.classList.remove('swipe-out');
    });
}
