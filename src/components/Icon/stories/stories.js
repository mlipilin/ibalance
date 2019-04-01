import React from 'react';
import { icons } from 'feather-icons';

// Components
import Icon from '../index';

// Constants
import { SIZES } from '../../../constants/sizes';

const sizes = [SIZES.XS, SIZES.M, SIZES.L, SIZES.XL, SIZES.XXL];

let stories = {};

stories['Size = 24px (default)'] = Object.keys(icons).map(name => ({
    key: name,
    component: <Icon key={name} name={name} title={name} />,
}));

sizes.forEach(size => {
    let typeStories = [];

    typeStories = Object.keys(icons).map(name => ({
        key: `${name}_${size}`,
        component: <Icon key={name} name={name} size={size} title={name} />,
    }));

    stories[`Size = ${size.toUpperCase()}`] = typeStories;
});

stories['Colored'] = Object.keys(icons).map(name => ({
    key: `${name}_colored`,
    component: <Icon color="#007bff" key={`${name}_colored`} name={name} title={name} />,
}));

export default stories;
