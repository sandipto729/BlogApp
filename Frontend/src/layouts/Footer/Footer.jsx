import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebook,
    FaTwitter,
    FaGooglePlusG,
    FaLinkedin,
    FaMapMarkerAlt
} from "react-icons/fa";
import "./styles/Footer.css";
import footLogo from "../../assets/image/pexels-photo-262508.jpeg";

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <footer className="footer">
                    <div className="footer-top">
                        <div className="comp-logo">
                            <div className="firste">
                            <Link className="logo-link" to='/'>
                                <img className="logo-svg" src="https://infoma.me/images/StudySyn.svg" alt="infoma logo"/>
                            </Link>
                            <h1  className="infomar">infoma</h1>
                          </div>
                          <div className="filler-text">Seamless Learning for brighther futures</div>
                        </div>
                        <div className="social">
                            <a className="social-link" href="#">
                            <FaMapMarkerAlt className="fab_logo" aria-hidden="true" style={{color: '#0d7e20'}}/>
                            </a>
                            <a className="social-link" href="#">
                            <FaLinkedin className="fab_logo" aria-hidden="true" style={{color: '#007bb6'}}/>
                            </a>
                            <a className="social-link" href="https://www.facebook.com/p/Sri-Ramakrishna-Siksha-Niketan-100057181941594/">
                            <FaFacebook className="fab_logo" aria-hidden="true" style={{color: '#3b5998'}}/>
                            </a>
                            <a className="social-link" href="#">
                            <FaTwitter className="fab_logo" aria-hidden="true" style={{color: '#00aced'}}/>
                            </a>
                        </div>
                    </div>

                    <div className="footer-grid">
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">Products</div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="#overview" className="footer-link">Overview</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">Company</div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="#overview" className="footer-link">About</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">Support</div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="#overview" className="footer-link">Contact</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Chat</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">Legal</div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="tandc.html" className="footer-link" target="main">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="privacypolicy.html" className="footer-link" target="main">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#cookie" className="footer-link">Cookie Settings</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div className="footer-copyright">
        <p>...............................................................................</p>
                <p>Created and Maintained by : <a href="https://www.linkedin.com/in/pragyan-bagchi-4927a7302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={{color: 'grey'}}>Pragyan Bagchi</a> and <a href="https://www.linkedin.com/in/sandipto-roy-675600277/" style={{color: 'grey'}}>Sandipto Roy</a></p>
                    <p>© 2024 - Present infoma. All rights reserved.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;