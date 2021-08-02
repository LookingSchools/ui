const { execSync } = require('child_process');
const postCss = require('../postcss.config')

module.exports = {
    srcPath: './src',
    // NOTE: ignore используется при обработке статики или css,
    // но не ts файлов, для ts это правило описывается в tsconfig::exclude.
    ignore: [
        'src/internal/**',
    ],
    tsconfig: 'tsconfig.prod.json',
    distPath: './',
    postcss: postCss.plugins,
    afterBuild: () => {
        // Копируем readme & docs для storybook-harvest.
        execSync('cp README.md __internal__', { stdio: 'inherit' });
    },
};