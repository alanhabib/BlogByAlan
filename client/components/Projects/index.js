import React from 'react';

function Project({location, match}) {
	console.log("match", match);
	console.log("location", location);

	return (
		<div>
			<h2>{location.project.title}</h2>
			<p>{location.project.text}</p>
		</div>
	);
}

export default Project;
