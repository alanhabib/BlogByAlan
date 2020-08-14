const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const path = require("path");
const cors = require("cors");
const routes = require("./routes/blogRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

//Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blogDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// body-parser setup -> pass the request and encode it properly
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use(cors());

routes(app);
if(process.env.NODE_ENV === "production") {
	app.use(express.static(path.resolve(__dirname, "../dist")));
	app.get("/*", (req, res) => {
		res.sendFile(path.resolve((__dirname, "../dist/index.html"), (err) => {
			if(err) {
				res.status(500).send(err)
			}
		}))
	})
}
app.get("/", (req, res) =>
	res.send(`OUR sucker application is running on port ${PORT}`)
);

app.listen(PORT, () =>
	console.log(`Your sucker server is running on port ${PORT}`)
);
