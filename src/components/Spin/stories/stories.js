import React from 'react';

// Components
import Spin from '../index';

// Constants
import { SIZES } from '../../../constants/sizes';
import { TYPES } from '../../../constants/types';

// Wrapeprs
import Row from '../../../storybook-wrappers/Row';

const types = [
    TYPES.DEFAULT,
    TYPES.PRIMARY,
    TYPES.SECONDARY,
    TYPES.DANGER,
    TYPES.SUCCESS,
    TYPES.INFO,
    TYPES.WARNING,
    TYPES.BLACK,
    TYPES.WHITE,
];
const sizes = [SIZES.XS, SIZES.S, SIZES.M, SIZES.L, SIZES.XL, SIZES.XXL];

let stories = {};

types.forEach(type => {
    let typeStories = [];

    let style = {};
    if (type === TYPES.WHITE) {
        style = { backgroundColor: 'grey' };
    }

    sizes.forEach(size => {
        const key = `${type}_${size}`;
        const component = (
            <Row key={key} style={style}>
                <Spin size={size} type={type} />
            </Row>
        );
        typeStories.push({ key, component });
    });

    stories[type] = typeStories;
});

export default stories;
