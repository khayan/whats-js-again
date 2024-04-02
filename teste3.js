/**
    1. Com JS criar um círculo verde com 50px raio
 */

const circle = document.createElement('div');

circle.style.width = '500px';
circle.style.height = '500px';
circle.style.borderRadius = '50%';
circle.style.backgroundColor = 'green';

document.body.appendChild(circle);