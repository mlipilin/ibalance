import React from 'react';

import { storiesOf } from '@storybook/react';

// Components
import Button from '../index';
import Icon from '../../Icon';

import './styles.css';

const TYPES = ['default', 'primary', 'secondary', 'danger', 'success', 'info', 'warning'];
const SIZES = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

let stories = storiesOf('Button');

TYPES.forEach(type => {
    let components = [];

    SIZES.forEach(size => {
        components.push(
            <div key={`${type}_${size}`}>
                <Button size={size} type={type}>
                    {type} {size}
                </Button>
                <Button size={size} type={type} disabled>
                    {type} {size}
                </Button>
                <Button size={size} type={type} processing>
                    {type} {size}
                </Button>
            </div>,
        );
    });

    SIZES.forEach(size => {
        components.push(
            <div key={`${type}_${size}_icons`}>
                <Button iconLeft={<Icon name="chevron-left" />} size={size} type={type}>
                    {type} {size}
                </Button>
                <Button iconRight={<Icon name="chevron-right" />} size={size} type={type}>
                    {type} {size}
                </Button>
                <Button iconLeft={<Icon name="chevron-left" />} size={size} type={type} disabled>
                    {type} {size}
                </Button>
                <Button iconLeft={<Icon name="chevron-left" />} size={size} type={type} processing>
                    {type} {size}
                </Button>
            </div>,
        );
    });

    SIZES.forEach(size => {
        components.push(
            <div key={`${type}_${size}_icons_block`}>
                <Button block iconLeft={<Icon name="chevron-left" />} size={size} type={type}>
                    {type} {size}
                </Button>
                <Button block iconRight={<Icon name="chevron-right" />} size={size} type={type}>
                    {type} {size}
                </Button>
            </div>,
        );
    });

    stories.add(type, () => <div className="Story__Button-Container">{components}</div>);
});
