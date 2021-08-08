const { resolve } = require('path')
const { useCleanUpPlugin } = require('@bem-react/pack/lib/plugins/CleanUpPlugin')
const { useCopyAssetsPlugin } = require('@bem-react/pack/lib/plugins/CopyAssetsPlugin')
const { useCssPlugin } = require('@bem-react/pack/lib/plugins/CssPlugin')
const { useTypeScriptPlugin } = require('@bem-react/pack/lib/plugins/TypescriptPlugin')

/**
 * @type {import('@bem-react/pack/lib/interfaces').Config}
 */
module.exports = {
  context: resolve(__dirname, '..'),

  output: './dist',

  plugins: [
    useCleanUpPlugin(['./dist']),

    useTypeScriptPlugin({
      configPath: './tsconfig.prod.json',
    }),

    useCssPlugin({
      context: './src',
      src: './**/*.scss',
      output: ['./dist', './dist/esm'],
      ignore: ['**/*.tests/**', '**/_internal_/**'],
    }),

    useCopyAssetsPlugin([
      {
        context: './src',
        src: './**/*.{svg,png,md,json}',
        output: ['./dist', './dist/esm'],
        ignore: ['**/*.tests/**', '**/_internal_/**'],
      },
      {
        src: ['./package.json', './README.md'],
      },
    ]),

    {
        // TODO(https://github.com/yarastqt/themekit/issues/81)
        // Удалить после того, как будут поддержаны относительные пути в темах.
        onFinish(done, context) {
            const fs = require('fs');
            const path = require('path');
            // названия компонентов достаем из директории
            // если папка начинается с большой буквы, значит компонент
            const componentsNames = fs.readdirSync(context.output, { withFileTypes: true })
                .filter((dir) => dir.isDirectory() && /^[A-Z]/.test(dir.name))
                .map((dir) => ({ block: dir.name }));

            const componentsJSONPath = path.join(context.output, 'components.json');
            fs.writeFileSync(componentsJSONPath, JSON.stringify(componentsNames, null, 2));

            done();
        },
    },
  ],
}