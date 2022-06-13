import { addParameters } from '@storybook/react';
import { DocsPage } from '@storybook-addons/docs';
import { cnTheme } from '../src/components/Theme';
import { presets } from '../src/components/Theme/presets';

addParameters({
    docs: {
        container: DocsPage,
    },
    themes: {
        default: 'external',
        list: [
          { name: 'external', class: cnTheme(presets['external']).split(' '), color: '#00aced' },
          { name: 'internal', class: cnTheme(presets['internal']).split(' '), color: '#3b5998' }
        ],
    },
});