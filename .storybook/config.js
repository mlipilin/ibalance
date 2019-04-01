import React from 'react';

import { configure, addDecorator, addParameters } from '@storybook/react';

import ThemeProvider from '../src/theme-provider';
import defaultTheme from '../src/themes/default/index.less';

addParameters({
    options: {
        name: 'iBalance',
    },
});

addDecorator(store => <ThemeProvider value={defaultTheme}>{store()}</ThemeProvider>);

const req = require.context('../src/components', true, /stories\/[\S]+\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
