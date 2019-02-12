import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/react';

import ThemeProvider from '../src/theme-provider';
import defaultTheme from '../src/themes/default/index.less';

setOptions({
    name: 'iBalance Components',
    url: '',
    addonPanelInRight: true,
});

addDecorator(withKnobs);
addDecorator(store => <ThemeProvider value={defaultTheme}>{store()}</ThemeProvider>);

const req = require.context('../src/components', true, /stories\/[\S]+\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
