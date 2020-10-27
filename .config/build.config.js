const { execSync } = require('child_process');

module.exports = {
    srcPath: './src',
    // NOTE: ignore используется при обработке статики или css,
    // но не ts файлов, для ts это правило описывается в tsconfig::exclude.
    ignore: [
        'src/internal/**',
    ],
    tsconfig: 'tsconfig.prod.json',
    distPath: './',
    postcss: [
        require('postcss-import')(),
        require('postcss-flexbugs-fixes'),
        require('postcss-url')({ url: 'inline', optimizeSvgEncode: true }),
        require('postcss-simple-vars')({ silent: true }),
        require('postcss-calc'),
        // require('postcss-csso')
    ],
    afterBuild: () => {
        // Копируем readme & docs для storybook-harvest.
        execSync('cp README.md __internal__', { stdio: 'inherit' });
    },
};