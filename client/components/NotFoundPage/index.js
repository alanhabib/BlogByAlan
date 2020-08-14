import React from 'react';
import {Link} from "react-router-dom";

function NotFoundPage() {
	return (
		<h1 style={{paddingTop: 100}}>
			Not found page. 404! - <Link to={"/"}>Go home</Link>
		</h1>
	);
}

export default NotFoundPage;
