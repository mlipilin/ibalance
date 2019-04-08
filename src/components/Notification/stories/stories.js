import React from 'react';

// Components
import { Notification } from '../index';

// Constants
import { SIZES } from '../../../constants/sizes';
import { TYPES } from '../../../constants/types';

const capitalize = s => `${s.slice(0, 1).toUpperCase()}${s.slice(1).toLowerCase()}`;

const sizes = [SIZES.S, SIZES.M, SIZES.L];
const types = [TYPES.DANGER, TYPES.INFO, TYPES.SUCCESS, TYPES.WARNING];

let stories = {};

Object.values(types).forEach(type => {
    const typeStories = [];

    Object.values(sizes).forEach(size => {
        const key = `${type}_${size}`;
        typeStories.push({
            key,
            component: (
                <Notification
                    canClose
                    description={`Long detail description`}
                    key={key}
                    size={size}
                    title={capitalize(`${type}!`)}
                    type={type}
                />
            ),
        });
    });

    // Can NOT close
    const key = `${type}_cannot_close`;
    typeStories.push({
        key,
        component: (
            <Notification
                closeAfter={4}
                description={`Long detail description`}
                key={key}
                title={capitalize(`Can not close!`)}
                type={type}
            />
        ),
    });

    stories[type] = typeStories;
});

export default stories;
