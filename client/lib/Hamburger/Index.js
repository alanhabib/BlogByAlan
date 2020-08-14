import React from "react";
import "./styles.scss";

const hamburger = ({menuActive, onClick}) => {
	let buttonStyle = menuActive ? "nav__toggle nav-open" : "nav__toggle";
	return (
		<button
			onClick={onClick}
			className={buttonStyle}
			aria-label="toggle navigation"
		>
			<span className={"hamburger"}/>
		</button>
	)
};

export default hamburger;
