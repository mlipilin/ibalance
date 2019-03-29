import React from 'react';
import { icons } from 'feather-icons';

import { storiesOf } from '@storybook/react';

import Icon from '../index';

import './styles.css';

const SIZES = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

let stories = storiesOf('Icon');

stories.add('Size = 24px (default)', () => (
    <div className="Story__Icon-Container ">
        {Object.keys(icons).map(name => (
            <Icon key={name} name={name} title={name} />
        ))}
    </div>
));

SIZES.forEach(size => {
    stories.add(`Size = ${size.toUpperCase()}`, () => (
        <div className="Story__Icon-Container">
            {Object.keys(icons).map(name => (
                <Icon key={name} name={name} size={size} title={name} />
            ))}
        </div>
    ));
});

stories.add('Colored', () => (
    <div className="Story__Icon-Container ">
        {Object.keys(icons).map(name => (
            <Icon color="#007bff" key={name} name={name} title={name} />
        ))}
    </div>
));
