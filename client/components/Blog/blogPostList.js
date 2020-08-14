import React from 'react';
import {NavLink, useRouteMatch} from "react-router-dom";
import {buildDate} from "../../lib/date";


function BlogPostList(props) {
	let {url} = useRouteMatch();
	console.log("## PROPS BLOGPOST", props.blogPosts);
	return (
		props.blogPosts.map(blogPost => (
			<div className={"blogPostListContainer"} key={blogPost._id}>
				<div className="blog-card alt">
					<div className="description">
						<h2>{blogPost.title}</h2>
						<p>{`Author: Jane ${buildDate(blogPost.createdAt)}`}</p>
						<p>{blogPost.text.substring(0, 50)}...</p>
						<p className="read-more">
							<NavLink
								to={{
									pathname: `${url}/:${blogPost._id}`,
									blogPost
								}}
								className={"blogPostListItem"}
							>
								Read More
							</NavLink>
						</p>
					</div>
				</div>
				{/*<button onClick={() => props.deletePost(blogPost._id)}>DELETE</button>*/}
			</div>
		))
	);
}

export default BlogPostList;
