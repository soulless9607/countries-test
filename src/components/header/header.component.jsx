import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';

const Header = ({ handleDarkClick, theme }) => (
	<div className={`header ${theme}`}>
		<div className="header-container">
			<Link to="/countries/" className="link">
				<h1 className={`title ${theme}`}>Where in the world?</h1>
			</Link>
			<p className="dark-mode-btn" onClick={handleDarkClick}>
				<i className="far fa-moon"></i> DARK MODE
			</p>
		</div>
	</div>
);

export default Header;
