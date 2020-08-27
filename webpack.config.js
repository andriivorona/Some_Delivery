const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/scripts/main.js",
	output: {
		filename: "bundle.[chunkhash].js",
		path: path.resolve(__dirname, "public"),
	},
	devServer: {
		port: 3000,
	},
	plugins: [
		new HTMLPlugin({
			template: "./src/index.html",
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.s?css$/i,
				use: ["style-loader", "css-loader?sourceMap=true", "sass-loader"],
			},
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: "babel-loader" 
			},
			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				loaders: [
					{
						loader: "file-loader",
						options: {
							name: "[path][name].[ext]",
						},
					},
					"img-loader",
				],
			},
		],
	},
};
