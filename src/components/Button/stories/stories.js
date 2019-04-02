import React from 'react';

// Components
import Button from '../index';
import Icon from '../../Icon';

// Constants
import { SIZES } from '../../../constants/sizes';
import { TYPES } from '../../../constants/types';

// Wrappers
import Cell from '../../../storybook-wrappers/Cell';
import Row from '../../../storybook-wrappers/Row';

const types = [
    TYPES.DEFAULT,
    TYPES.PRIMARY,
    TYPES.SECONDARY,
    TYPES.DANGER,
    TYPES.SUCCESS,
    TYPES.INFO,
    TYPES.WARNING,
];
const sizes = [SIZES.XS, SIZES.S, SIZES.M, SIZES.L, SIZES.XL, SIZES.XXL];

let stories = {};

types.forEach(type => {
    let typeStories = [];

    sizes.forEach(size => {
        const key = `${type}_${size}`;
        const component = (
            <Row key={key}>
                <Cell>
                    <Button size={size} type={type}>
                        {type} {size}
                    </Button>
                </Cell>
                <Cell>
                    <Button size={size} type={type} disabled>
                        {type} {size}
                    </Button>
                </Cell>
                <Cell>
                    <Button size={size} type={type} processing>
                        {type} {size}
                    </Button>
                </Cell>
            </Row>
        );
        typeStories.push({ key, component });
    });

    sizes.forEach(size => {
        const key = `${type}_${size}_icons`;
        const component = (
            <Row key={key}>
                <Cell>
                    <Button
                        iconLeft={<Icon name="arrow-left" size={size} />}
                        size={size}
                        type={type}
                    >
                        {type} {size}
                    </Button>{' '}
                </Cell>
                <Cell>
                    <Button
                        iconRight={<Icon name="arrow-right" size={size} />}
                        size={size}
                        type={type}
                    >
                        {type} {size}
                    </Button>{' '}
                </Cell>
                <Cell>
                    <Button
                        iconLeft={<Icon name="arrow-left" size={size} />}
                        size={size}
                        type={type}
                        disabled
                    >
                        {type} {size}
                    </Button>{' '}
                </Cell>
                <Cell>
                    <Button
                        iconLeft={<Icon name="arrow-left" size={size} />}
                        size={size}
                        type={type}
                        processing
                    >
                        {type} {size}
                    </Button>{' '}
                </Cell>
            </Row>
        );
        typeStories.push({ key, component });
    });

    sizes.forEach(size => {
        const key = `${type}_${size}_icons_block`;
        const component = (
            <div key={key}>
                <Row>
                    <Button
                        block
                        iconLeft={<Icon name="arrow-left" size={size} />}
                        size={size}
                        type={type}
                    >
                        {type} {size}
                    </Button>
                </Row>
                <Row>
                    <Button
                        block
                        iconRight={<Icon name="arrow-right" size={size} />}
                        size={size}
                        type={type}
                    >
                        {type} {size}
                    </Button>{' '}
                </Row>
            </div>
        );
        typeStories.push({ key, component });
    });

    stories[type] = typeStories;
});

export default stories;
