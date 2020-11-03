'use strict';
/*
* Старый билд для клиента.
* Вызывался командой "build": "NODE_ENV=production webpack --progress --config /.config/webpack.config.js",
* Чуть позже удалить.
*/

const { resolve } = require('path');
const ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const contextPath = resolve(__dirname, '../src/components');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        config: { path: resolve(__dirname, '../', 'postcss.config') },
        sourceMap: true
    }
};

const cssLoader = {
    loader: 'css-loader',
    options: { importLoaders: 1, sourceMap: true }
};

module.exports = {
    mode: ENV,
    target: 'node',
    context: contextPath,
    entry:  {
        Amountpicker: './Amountpicker/',
        Badge: './Badge/',
        Button: './Button/',
        Checkbox: './Checkbox/',
        ColorBox: './ColorBox/',
        Cookie: './Cookie/',
        Cut: './Cut/',
        DiscountBadge: './DiscountBadge/',
        Gallery: './Gallery/',
        Icon: './Icon/',
        Image: './Image/',
        Link: './Link/',
        Menu: './Menu/',
        Modal: './Modal/',
        Oops: './Oops/',
        Popup: './Popup/',
        Price: './Price/',
        Radiobox: './Radiobox/',
        Radiobutton: './Radiobutton/',
        Rating: './Rating/',
        Scroller: './Scroller/',
        Separator: './Separator/',
        Snippet: './Snippet/',
        Socials: './Socials/',
        Specs: './Specs/',
        Spin: './Spin/',
        TabsMenu: './TabsMenu/',
        TabsPanes: './TabsPanes/',
        Textarea: './Textarea/',
        Textinput: './Textinput/',
        Tumbler: './Tumbler/',
        Typography: './Typography/'
    },
    output: {
        path: resolve(__dirname, '../'),
        publicPath: '',
        filename: './[name]/index.js',
        library: '[name]',
        libraryTarget: "commonjs-module",
    },
    watch: ENV === 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    resolve: {
		extensions: ['.ts', '.tsx', '.scss', '.js', '.jsx', '.css']
	},
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(ts|tsx|jsx)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env','@babel/preset-react']
                        },
                    },
                    { loader: 'ts-loader', options: { happyPackMode: true } },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    // ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'style-loader',
                    cssLoader,
                    postcssLoader
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'style-loader',
                    cssLoader,
                    // postcssLoader,
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.(jpg|gif|png|eot|otf|woff2?|ttf)$/,
                use: 'file-loader'
            },
            {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            dataUrlLimit: 1024
                        }
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: true },
                                { convertColors: { shorthex: false } },
                                { convertPathData: false }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify(ENV)
        }),
        new TsconfigPathsPlugin({ 
            baseUrl: resolve(__dirname, '../'),
            configFile: resolve(__dirname, 'tsconfig.prod.json'),
        })
    ],
    optimization: {
        emitOnErrors: false // Для прода включить.
    }
};