import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./navbar.css";

function Navbar() {
	const user = useSelector((state) => state.user.user); // Select user from Redux
	// console.log('faulty user', user); // Debug output
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<Link to='/' className="image">
				<img src="https://infoma.me/images/StudySyn.svg" alt="logo" />
				<span className="infoma">infoma</span>
			</Link>
			<h3 className="head">infoma</h3>
			<nav ref={navRef}>
				<Link to="/" className="page">Home</Link>
				<Link to="/treading" className="page">Trending</Link>
				<Link to="/blog" className="page">Blog</Link>
				<Link to="/newspaper" className="page">NewsPaper</Link>
				<Link to="/about" className="page">About</Link>
				
				{user && user._id ? (
					<Link to="/profile" className="Profilepage">Profile</Link>
				) : (
					<Link to="/login" className="page">Login</Link>
				)}

				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<div className="contact">
				<button className="contact-button-2">Contact Us</button>
			</div>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
