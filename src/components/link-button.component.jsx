import React from 'react';
import { Link } from 'react-router-dom';
import './link-button.style.scss';

const LinkButton = ({ value, children, theme, handleClick }) => {
	return (
		<Link to={value}>
			<button className={`link-btn ${theme}`} onClick={handleClick}>
				{children}
			</button>
		</Link>
	);
};

export default LinkButton;
