import React from 'react';

// Components
import Button from '../index';
import Icon from '../../Icon';

// Wrappers
import Cell from '../../../storybook-wrappers/Cell';
import Row from '../../../storybook-wrappers/Row';

const TYPES = ['default', 'primary', 'secondary', 'danger', 'success', 'info', 'warning'];
const SIZES = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

let stories = {};

TYPES.forEach(type => {
    let typeStories = [];

    SIZES.forEach(size => {
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

    SIZES.forEach(size => {
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

    SIZES.forEach(size => {
        const key = `${type}_${size}_icons_block`;
        const component = (
            <Row key={key}>
                <Cell>
                    <Button
                        block
                        iconLeft={<Icon name="arrow-left" size={size} />}
                        size={size}
                        type={type}
                    >
                        {type} {size}
                    </Button>{' '}
                </Cell>
                <Cell>
                    <Button
                        block
                        iconRight={<Icon name="arrow-right" size={size} />}
                        size={size}
                        type={type}
                    >
                        {type} {size}
                    </Button>{' '}
                </Cell>
            </Row>
        );
        typeStories.push({ key, component });
    });

    stories[type] = typeStories;
});

export default stories;
