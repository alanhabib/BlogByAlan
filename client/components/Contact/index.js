import React from 'react';
import Form from "../Form";
import Header from "../Header";

function Contact(props) {
	return (
		<Header
			title={"Contact me!"}
			rightContent={<Form/>}
			leftColumnTitle={"Get in touch!"}
			lefttColumnText={
				"If you like what you see or want to give feedback feel free to contact me!"
			}
		/>);
}

export default Contact;
