/**
    1. Com JS criar um círculo verde com 500px raio
 */

const circle = document.createElement('div');

circle.style.width = '500px';
circle.style.height = '500px';
circle.style.borderRadius = '50%';
circle.style.backgroundColor = 'gray';

document.body.appendChild(circle);

circle.addEventListener('mouseenter', () => circle.style.backgroundColor = 'red');
circle.addEventListener('mouseleave', () => circle.style.backgroundColor = 'green');