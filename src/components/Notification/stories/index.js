import React from 'react';

import { storiesOf } from '@storybook/react';

import stories from './stories';
import Wrapper from '../wrapper';
// import notes from '../readme.md';

let componentStories = storiesOf('Notification');

console.log('stories', stories);

Object.keys(stories).forEach(type => {
    componentStories.add(type, () => (
        <Wrapper position={type}>{stories[type].map(s => s.component)}</Wrapper>
    ));
});
