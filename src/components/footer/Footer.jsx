import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Salim</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className='footer__link'>Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://x.com/salimnunez01" className="footer__social-link" target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>
                    <a href="https://facebook.com/profile.php?id=61559504970376" className="footer__social-link" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>
                    <a href="https://instagram.com/salimnunez01" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                </div>
                <span className='footer__copy'>
                    Made with 🖤 by Salim Rutaganda
                </span>
            </div>
        </footer>
    )
}

export default Footer