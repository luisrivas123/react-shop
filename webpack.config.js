// const { plugins } = require('@babel/preset-env/lib/plugins-compat-data');
// const loader = require('html-loader');

// donde esta ubicado este proyecto
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// configuraciones necesarias del proyecto

module.exports = {
    // El punto de entrada de la aplicación
    entry: './src/index.js',
    // donde vive elk proyecto
    output: {
        // "dirname para conocer la ubicación"
        path: path.resolve(__dirname, 'dist'),
        // nombre del empaquetado
        filename: 'bundle.js',
    },
    mode: 'development',
    // Extensiones
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    // Las reglas de los loaders y plugins
    module: {
        rules: [
            {
                // crear una regla con bri... detecta js u jsx
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
 				use: {
 					loader: 'babel-loader'
 				}
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9000,
    // }
}