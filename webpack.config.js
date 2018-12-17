var path = require('path');
var htmlPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		host: 'localhost',
		port: 80,
		contentBase: './dist',
		disableHostCheck : true,
		historyApiFallback : true
	},

	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.css', '.eot', '.woff', ',img']
	},

	plugins: [
		new htmlPlugin({
			template: 'src/index.html'
		})
	],

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			},
			{
				test: /\.scss?$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.css?$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			},{
				test: /\.(jpg|jpeg|gif)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/'
						}
					}
				]
			}
		]
	}
};
