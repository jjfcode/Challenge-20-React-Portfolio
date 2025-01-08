// import React from 'react';

function Navbar({ handlePageChange, currentPage }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="#">Professional Portfolio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link nav-link-large" href="#" onClick={e=>handlePageChange("About")}>About Me</a></li>
                    <li className="nav-item"><a className="nav-link nav-link-large" href="#" onclick={e=>handlePageChange("Portfolio")}>Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link nav-link-large" href="#" onclick={e=>handlePageChange("Contact")}>Contact</a></li>
                    <li className="nav-item"><a className="nav-link nav-link-large" href="#" onclick={e=>handlePageChange("Resume")}>Resume</a></li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar;