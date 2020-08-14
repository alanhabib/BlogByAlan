import React, {Component} from 'react';
import axios from "axios";
import "./styles.scss";

class PlayerForm extends Component {

	constructor(props) {
		super(props);
		this.title = React.createRef();
		this.text = React.createRef();
	}

	emptyform = () => {
		this.title.current.value = "";
		this.text.current.value = "";
	};

	submitBlogPost = (event) => {
		event && event.preventDefault();
		axios.post(`http://localhost:4000/blogger`, {
			title: this.title.current.value,
			text: this.text.current.value
		})
			.then(response => console.log("## SUCCESS", response))
			.catch(err => console.log("ERROR IN POST", err))
	};

	render() {
		return (
			<section className="s2">
				<div className="main-container">
					<form
						action={"localhost:4000/blogger"}
						method={"post"}
						id="contact-form"
						onSubmit={() => {
							this.submitBlogPost();
							this.emptyform();
						}}
					>
						<label>Title</label>
						<input
							ref={this.title}
							type="text"
							id="title"
							name="title"
							className="input-field"
						/>

						<label>Message</label>
						<textarea
							ref={this.text}
							id="text"
							name="text"
							className="input-field"
						/>

						<input
							id="submit-btn"
							type="submit"
							value="Send"
						/>
					</form>
				</div>
			</section>
		);
	};
}

export default PlayerForm;
