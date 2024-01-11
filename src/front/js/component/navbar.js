import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	const handleLogout = () => {
		// Remove the token from sessionStorage
		sessionStorage.removeItem('token');

		// Redirect to the home page (public)
		window.location.href = '/';
	};

	return (
		<nav className="navbar navbar-light bg-light">
		  <div className="container navbar-container">
			<Link to="/">
			  <span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto navbar-buttons">
			  <Link to="/private">
				<button className="btn btn-primary">Private Area</button>
			  </Link>
			  <Link to="/signup">
				<button className="btn btn-success">Signup</button>
			  </Link>
			  <Link to="/login">
				<button className="btn btn-info">Login</button>
			  </Link>
			  <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
			</div>
		  </div>
		</nav>
	  );
	};