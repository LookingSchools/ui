import { configure } from '@storybook/react';

// automatically import all files ending in *.examples.tsx
configure(require.context('../src', true, /\.examples\.tsx$/), module);

