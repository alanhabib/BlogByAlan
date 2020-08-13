const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
	entry: {index: path.resolve(__dirname, "client", "index.js")},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js"
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css']
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	optimization: {
		splitChunks: {chunks: "all"}
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
			filename: "./index.html"
		})
	]
};
