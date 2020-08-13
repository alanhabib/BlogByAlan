const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now()
	}
});

module.exports = BlogSchema;
