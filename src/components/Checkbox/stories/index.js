import React from 'react';

import { storiesOf } from '@storybook/react';

import Checkbox from '../index';

import notes from '../readme.md';

import './styles.css';

const SIZES = ['s', 'm', 'l'];
const TYPES = ['primary', 'secondary'];

class Container extends React.Component {
    state = { checked: false };
    componentDidMount() {
        this.setState({ checked: this.props.checked });
    }
    handleChange = checked => {
        this.setState({ checked });
    };
    render() {
        const props = { checked: this.state.checked, onChange: this.handleChange };
        return React.cloneElement(this.props.children, props);
    }
}

let stories = storiesOf('Checkbox');

TYPES.forEach(type => {
    let components = [];

    SIZES.forEach(size => {
        components.push(
            <div key={`${size}_1`}>
                <Container>
                    <Checkbox size={size} type={type} />
                </Container>
            </div>,
        );
    });

    SIZES.forEach(size => {
        components.push(
            <div key={`${size}_2`}>
                <Container>
                    <Checkbox size={size} type={type}>
                        {type} checkbox with size {size.toUpperCase()}
                    </Checkbox>
                </Container>
            </div>,
        );
    });

    SIZES.forEach(size => {
        components.push(
            <div key={`${size}_3`}>
                <Container>
                    <Checkbox disabled size={size} type={type}>
                        {type} checkbox with size {size.toUpperCase()} disabled
                    </Checkbox>
                </Container>
            </div>,
        );
    });

    stories.add(type, () => <div className="Story__Checkbox-Container">{components}</div>, {
        notes,
    });
});
