import React, {useState} from 'react';
import "./styles.scss"
import {NavLink} from "react-router-dom";
import Hamburger from "../../lib/Hamburger";


const navLinks = [
	{
		title: "Contact",
		path: "/contact",
		id: 4
	}, {
		title: "Blog",
		path: "/blog",
		id: 2
	}, {
		title: "Home",
		path: "/",
		id: 1
	},
];

function header(props) {
	const [menuActive, setMenuActive] = useState(false);
	return (
		<header className="s1">
			<div className="main-container">
				<div className="greeting-wrapper">
					<h1>{props.title}</h1>
				</div>
				<div className="intro-wrapper">
					<div className="nav-wrapper">
						<div className="dots-wrapper">
							<div className="browser-dot dot-1"/>
							<div className="browser-dot dot-2"/>
							<div className="browser-dot dot-3"/>
						</div>
						<div className={`navbarMenuContainer ${menuActive && "active"}`}>
							<ul className={"navbarMenuList"}>
								{navLinks.map((link) => (
									<li
										key={link.id}
										className={"navbarMenuListItem"}
									>
										<NavLink
											onClick={() => setMenuActive(false)}
											className="nav__link"
											to={link.path}>
											{link.title}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
						<Hamburger
							menuActive={menuActive}
							onClick={() => setMenuActive(!menuActive)}
						/>
					</div>
					<div className="left-column">
						<div className="preview-shadow">
							<div className="preview">
								<div id="corner-tl" className="corner"/>
								<div id="corner-tr" className="corner"/>
								<h3>{props.leftColumnTitle}</h3>
								<p>
									{props.lefttColumnText}
								</p>
								<div id="corner-br" className="corner"/>
								<div id="corner-bl" className="corner"/>
							</div>
						</div>
					</div>
					<div className="right-column">
						{props.rightContent}
					</div>
				</div>
			</div>
		</header>
	);
}

export default header;
