import React from 'react';

function Form(props) {
	return (
		<section className="s2">
			<div className="main-container">
				{props.title && <h3>{props.title}</h3>}
				<form id="contact-form">
					<label>Name</label>
					<input className="input-field" type="text" name="name"/>

					<label>Subject</label>
					<input className="input-field" type="text" name="subject"/>

					<label>Email</label>
					<input className="input-field" type="text" name="email"/>

					<label>Message</label>
					<textarea className="input-field" name="message"/>

					<input id="submit-btn" type="submit" value="Send"/>
				</form>
			</div>
		</section>
	);
}

export default Form;
