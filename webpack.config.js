const path = require('path');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'react-hot-loader/patch',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin(),
		new NpmInstallPlugin(),
	],

	devServer: {
		contentBase: './dist',
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				enforce: 'pre',
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
			{
				test: /\.jsx?$/,
				loaders: [
					'react-hot-loader/webpack',
					{
						loader: 'babel-loader',
						options: {
							plugins: ['transform-runtime']
						}
					}],
				include: [
					path.resolve(__dirname, 'src'),
				],
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader'
			}
		],
	},
};