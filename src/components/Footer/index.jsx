function Footer({ handlePageChange, currentPage }) {
    return (
        <>
            <footer class="bg-dark text-white text-center py-3">
                <div>
                    <a href="https://github.com/jjfcode" target="_blank" class="text-white mx-2 footer-icon">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/john-ferlito-7a29084a/" target="_blank" class="text-white mx-2 footer-icon">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/john.ferlito.7" target="_blank" class="text-white mx-2 footer-icon">
                        <i class="fab fa-facebook"></i>
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;