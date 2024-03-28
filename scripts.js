document.documentElement.style.cursor = 'none';

document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.addEventListener('DOMContentLoaded', function () {
    const trailLength = 10;
    const trail = document.querySelector('.trail');

    document.addEventListener('mousemove', function (e) {
        const x = e.clientX;
        const y = e.clientY;
        const char = document.createElement('span');
        char.classList.add('trail-char');
        char.textContent = '+';
        char.style.left = (x - 10) + 'px';
        char.style.top = (y - 10) + 'px';
        trail.appendChild(char);
        setTimeout(() => {
            char.remove();
        }, 500);
    });
});
