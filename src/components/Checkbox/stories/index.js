import React from 'react';

import { storiesOf } from '@storybook/react';

import Checkbox from '../index';

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
            <Container key={size}>
                <Checkbox size={size} type={type}>
                    I agree with the rules
                </Checkbox>
            </Container>,
        );
    });

    stories.add(type, () => <div className="Story__Checkbox-Container">{components}</div>);
});
