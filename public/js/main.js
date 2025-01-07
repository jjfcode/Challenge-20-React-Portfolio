// This file contains the JavaScript code for the portfolio.
// It includes functionality for interactive elements, such as a mobile menu toggle and smooth scrolling.

// window.document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.getElementById('menu-toggle');
//     const navMenu = document.getElementById('nav-menu');

//     menuToggle.addEventListener('click', () => {
//         navMenu.classList.toggle('active');
//     });

//     const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
//     smoothScrollLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             const targetId = link.getAttribute('href');
//             const targetElement = document.querySelector(targetId);
//             targetElement.scrollIntoView({ behavior: 'smooth' });
//         });
//     });

//     loadSection('about.html');
// });

function loadSection(section) {
    fetch(section)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        });
}