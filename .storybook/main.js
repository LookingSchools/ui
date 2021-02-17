// .storybook/main.js

const path = require('path');

module.exports = {
    stories: ['../src/**/*.examples.tsx'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs', '@storybook/addon-viewport', '@storybook/addon-docs'],
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.
    
        // Make whatever fine-grained changes you need
        config.module.rules.push({
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, '../src'),
        });
    
        // Return the altered config
        return config;
    },
}