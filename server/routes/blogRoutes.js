const {
	addNewBlog,
	deleteBlogPost,
	getBlog,
	getBlogById,
	updateBlogPost
} = require("../controllers/blogController");

const routes = (app) => {
	app.route("/blogger")
		// GET endpoint
		.get(getBlog)
		// POST endpoint
		.post(addNewBlog);
	app.route("/blogger/:blogPostId")
		.get(getBlogById)
		.put(updateBlogPost)
		.delete(deleteBlogPost)
};

module.exports = routes;
