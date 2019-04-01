import { storiesOf } from '@storybook/react';

import stories from './stories';
import notes from '../readme.md';

let componentStories = storiesOf('Input');

Object.keys(stories).forEach(type => {
    componentStories.add(type, () => stories[type].map(s => s.component), { notes });
});
