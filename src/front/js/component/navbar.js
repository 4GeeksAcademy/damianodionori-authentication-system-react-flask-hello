import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const handleLogout = () => {
		// Remove the token from sessionStorage
		sessionStorage.removeItem('token');

		// Redirect to the home page (public)
		window.location.href = '/';
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
					<button className="btn btn-danger ml-2" onClick={handleLogout}>Logout</button>
				</div>
			</div>
		</nav>
	);
};
