import React from 'react';

function Navbar({ handlePageChange, currentPage }) {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" href="#">Professional Portfolio</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link nav-link-large" href="#about" onclick="loadSection('about.html')">About Me</a></li>
                    <li class="nav-item"><a class="nav-link nav-link-large" href="#portfolio" onclick="loadSection('portfolio.html')">Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link nav-link-large" href="#contact" onclick="loadSection('contact.html')">Contact</a></li>
                    <li class="nav-item"><a class="nav-link nav-link-large" href="#resume" onclick="loadSection('resume.html')">Resume</a></li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar;