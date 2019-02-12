import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../index';

import './styles.css';

const TYPES = ['default', 'primary', 'secondary', 'danger', 'success', 'info', 'warning'];
const SIZES = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
const BOOLEAN_PROPS = ['disabled', 'processing', 'block'];

let stories = storiesOf('Button');

TYPES.forEach(type => {
    let components = [];

    SIZES.forEach(size => {
        components.push(
            <div key={`${type}_${size}`}>
                <Button size={size} type={type}>
                    {type} {size}
                </Button>
            </div>,
        );
    });

    BOOLEAN_PROPS.forEach(prop => {
        const props = { [prop]: true };

        components.push(
            <div key={`${type}_${prop}`}>
                <Button {...props} type={type}>
                    {type} {prop}
                </Button>
            </div>,
        );
    });

    stories.add(type, () => <div className="Story__Button-Container">{components}</div>);
});
