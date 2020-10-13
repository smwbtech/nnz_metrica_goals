const path = require('path');

module.exports = {
	entry: {
		'purchase-confirmation': './src/purchase-confirmation.js',
		'unregistered-purchase-confirmation': './src/unregisterd-purchase-confirmation.js'
	},
	output: {
		filename: '[name].metrika-target-bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
