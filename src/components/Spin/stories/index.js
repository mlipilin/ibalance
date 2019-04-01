import React from 'react';

import { storiesOf } from '@storybook/react';

import Spin from '../index';

import notes from '../readme.md';

import './styles.css';

const TYPES = [
    'default',
    'primary',
    'secondary',
    'danger',
    'success',
    'info',
    'warning',
    'black',
    'white',
];
const SIZES = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

let stories = storiesOf('Spin');

TYPES.forEach(type => {
    let components = [];

    let style = {};
    if (type === 'white') {
        style = { backgroundColor: 'grey' };
    }

    SIZES.forEach(size => {
        components.push(
            <div key={`${type}_${size}`} style={style}>
                <Spin size={size} type={type} />
            </div>,
        );
    });

    stories.add(type, () => <div className="Story__Spin-Container">{components}</div>, { notes });
});
