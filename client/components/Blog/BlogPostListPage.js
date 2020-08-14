import React from 'react';
import BlogPostList from "./blogPostList";

function BlogPostListPage(props) {
	return (
		<div className={"blogPostListPageWrapper"}>
			<h1>Blog posts</h1>
			< BlogPostList {...props}/>
		</div>
	);
}

export default BlogPostListPage;
