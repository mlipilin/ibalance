import React from 'react';

// Components
import { Notification, Wrapper } from '../index';

// Constants
import { SIZES } from '../../../constants/sizes';
import { TYPES } from '../../../constants/types';
import { POSITION } from '../constants';

const capitalize = s => `${s.slice(0, 1).toUpperCase()}${s.slice(1).toLowerCase()}`;

const sizes = [SIZES.S, SIZES.M, SIZES.L];
const types = [TYPES.DANGER, TYPES.INFO, TYPES.SUCCESS, TYPES.WARNING];

let stories = {};

Object.values(POSITION).forEach(position => {
    let positionStories = [];

    Object.values(sizes).forEach(size => {
        Object.values(types).forEach(type => {
            const key = `${position}_${size}_${type}`;
            positionStories.push({
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
        const key = `${position}_${size}_cannot_close`;
        positionStories.push({
            key,
            component: (
                <Notification
                    closeAfter={4}
                    description={`Long detail description`}
                    key={key}
                    size={size}
                    title={capitalize(`Can not close!`)}
                />
            ),
        });
    });

    stories[position] = positionStories;
});

export default stories;
