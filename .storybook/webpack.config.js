'use strict';

const { resolve } = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

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
    resolve: {
        extensions: ['.ts', '.tsx', '.scss', '.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|jsx)$/,
                use: [
                    { loader: 'babel-loader' },
                    { 
                        loader: 'ts-loader', 
                        options: {
                            transpileOnly: true
                        
                        } },
                    ...(NODE_ENV === 'development' ? [] : [ require.resolve('react-docgen-typescript-loader') ])
                ],
                exclude: [resolve('./node_modules'), resolve(__dirname, 'node_modules')]
            },
            // {
            //     test: /\.css$|\.scss$/,
            //     use: [
            //         { loader: 'style-loader' },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1,
            //                 sourceMap: true
            //             }
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 config: { path: resolve(__dirname, '..', 'postcss.config') },
            //                 sourceMap: true
            //             }
            //         }
            //     ]
            // },
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
                    postcssLoader,
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            dataUrlLimit: 1024,
                            stripdeclarations: true,
                            encoding: 'none'
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
            },
            {
                test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: '[name].[ext]'
                }
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
};