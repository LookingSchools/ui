module.exports = {
    plugins: [
        require('postcss-import')(),
        require('postcss-flexbugs-fixes'),
        require('autoprefixer'),
        require('postcss-url')({ url: 'inline', optimizeSvgEncode: true }),
        require('postcss-simple-vars'),
        require('postcss-calc'),
        // require('postcss-csso')
    ],
    parser: require('postcss-scss')
};