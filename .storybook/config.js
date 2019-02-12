import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/react';

setOptions({
    name: 'iBalance Components',
    url: '',
    addonPanelInRight: true,
});

addDecorator(withKnobs);

const req = require.context('../src/components', true, /stories\/[\S]+\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
