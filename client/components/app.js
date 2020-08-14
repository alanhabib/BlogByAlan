import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Home from "./Home";
import BlogPostPage from "./Blog/blogPostPage";
import Blog from "./Blog"
import Project from "./Projects"
import Contact from "./Contact"
import NotFoundPage from "./NotFoundPage"

const App = () => {
	return (
		<Router>
			<div className={"app"}>
				<Switch>
					<Route exact path={"/"} component={Home}/>
					<Route exact path={"/blog"} component={Blog}/>
					<Route
						path={"/blog/:id"}
						component={BlogPostPage}
					/>
					<Route path={"/projects/:slug"} component={Project}/>
					{/*<Route path={"/about"} component={About}/>*/}
					<Route path={"/contact"} component={Contact}/>
					<Route component={NotFoundPage}/>
				</Switch>
				{/*<Footer/>*/}
			</div>
		</Router>
	);
};

export default App;
