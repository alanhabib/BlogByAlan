import React from 'react';


function BlogPostPage({location}) {
	return (
		<div>
			<h2>{location.blogPost.title}</h2>
			<p>{location.blogPost.createdAt}</p>
			<p>{location.blogPost.text}</p>

		</div>
	);
}

export default BlogPostPage;
