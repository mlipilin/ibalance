import React from 'react';

import { storiesOf } from '@storybook/react';

import Switch from '../index';

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

let stories = storiesOf('Switch');

TYPES.forEach(type => {
    let components = [];

    SIZES.forEach(size => {
        components.push(
            <div key={`${size}_1`} className="Story__Switch-Row">
                <div>
                    <Container>
                        <Switch size={size} type={type}>
                            {type} switch with size {size.toUpperCase()}
                        </Switch>
                    </Container>
                </div>
                <Container>
                    <Switch size={size} type={type} />
                </Container>
                <Container>
                    <Switch size={size} type={type} disabled />
                </Container>
            </div>,
        );
    });

    stories.add(type, () => <div className="Story__Switch-Container">{components}</div>, { notes });
});
