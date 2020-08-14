import React from 'react';
import './styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCodepen, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import image from "../../images/m-blog-5.jpg"
import {NavLink} from "react-router-dom";
import Form from "../../components/Form"
import Header from "../../components/Header";
import projectsData from "../../projectData"

const style = {
	cursor: "pointer",
	width: 34,
	height: 34
};

function Home() {
	return (
		<main className={"mainContainer"}>
			<Header
				title={"Hi, I am Alan!"}
				rightContent={<img alt={"put here personal"} id="profile_pic" src={image}/>}
				leftColumnTitle={"What I Do"}
				lefttColumnText={
					"I was a frontend developer in a past life, now I aspire for full stack"
				}/>
			<section className="s2">
				<div className="container">
					<div className="about-wrapper">
						<div className="social-links">
							<img alt={"set pic"} id="social_img" src={image}/>
							<h4>Find me on Github & Linkedin</h4>
							<ul>
								<a
									target="_blank"
									href={"https://github.com/alanhabib"}>
									<FontAwesomeIcon
										style={style}
										size={"lg"}
										icon={faGithub}/>
								</a>
								<a
									target="_blank"
									href={"https://www.linkedin.com/in/alan-habib-43a5b9167/"}>
									<FontAwesomeIcon
										style={style}
										size={"lg"}
										icon={faLinkedinIn}/>
								</a>
								<a
									target="_blank"
									href={"https://codesandbox.io/u/alanhabib/sandboxes"}>
									<FontAwesomeIcon
										style={style}
										size={"lg"}
										icon={faCodepen}/>
								</a>
							</ul>
						</div>
						<div className="about-me">
							<h4>More about me</h4>
							<p>
								I build new projects just to tickle my brain and love teaching others how they're
								made.
							</p>
							<p>
								While I keep busy teaching courses, I still take interviews in search of a great team &
								projects that interest me.
							</p>
							<hr/>
							<h4>TOP EXPERTISE</h4>
							<p>Fullstack developer with primary focus on React.js + Node.js:
								<a
									target="_blank"
									href="resume.pdf"
								>
									Download Resume
								</a>
							</p>
							<div id="skills">
								<ul>
									<li>JavaScript</li>
									<li>React.js</li>
									<li>React Native</li>
									<li>Node.js</li>
									<li>MongoDB</li>
								</ul>
								<ul>
									<li>Redux</li>
									<li>Firebase</li>
									<li>Github</li>
									<li>Heroku</li>
									<li>HTML/CSS</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="s3">
				<div className="main-container">
					<h3> Past projects</h3>
					<div className="post-wrapper">
						{projectsData.map((project) => (
							<div key={project.id}>
								<div className="post">
									<img alt={"pics here"} className="thumbnail" src={project.image}/>
									<div className="post-preview">
										<h5 className="post-title">{project.title}</h5>
										<p className="post-intro">
											{project.text.substring(0, 80)}...
										</p>
										<NavLink
											to={{
												pathname: `projects/:${project.slug}`,
												project
											}}
											className={"blogPostListItem"}
										>
											Read More
										</NavLink>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<Form title={"Get in touch"}/>
		</main>
	)
}

export default Home;
