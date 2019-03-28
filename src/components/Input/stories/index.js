import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../index';

import './styles.css';

const SIZES = ['s', 'm', 'l'];

class Container extends React.Component {
    state = { value: '' };
    componentDidMount() {
        this.setState({ value: this.props.value });
    }
    handleChange = value => {
        this.setState({ value });
    };
    render() {
        const props = { value: this.state.value, onChange: this.handleChange };
        return React.cloneElement(this.props.children, props);
    }
}

storiesOf('Input')
    .add('Default', () => (
        <div className="Story__Input-Container">
            {SIZES.map(size => (
                <div key={size}>
                    <Container>
                        <Input
                            size={size}
                            placeholder={`Input ${size}`}
                            onBlur={props => {
                                console.log(`Input ${size} blur`, props);
                            }}
                            onChange={(value, props) => {
                                console.log(`Input ${size} change: ${value}`, props);
                            }}
                            onFocus={props => {
                                console.log(`Input ${size} focus`, props);
                            }}
                        />
                    </Container>
                    <Container>
                        <Input size={size} placeholder={`Input ${size}`} error="Some input error" />
                    </Container>
                    <Container>
                        <Input size={size} placeholder={`Input ${size}`} success />
                    </Container>
                    <Container>
                        <Input size={size} placeholder={`Input ${size}`} disabled />
                    </Container>
                </div>
            ))}
        </div>
    ))
    .add('Label', () => (
        <div className="Story__Input-Container">
            {SIZES.map(size => (
                <div key={size}>
                    <Container>
                        <Input
                            size={size}
                            label={`Input ${size}`}
                            placeholder="sdcdc"
                            onBlur={props => {
                                console.log(`Input ${size} blur`, props);
                            }}
                            onChange={(value, props) => {
                                console.log(`Input ${size} change: ${value}`, props);
                            }}
                            onFocus={props => {
                                console.log(`Input ${size} focus`, props);
                            }}
                        />
                    </Container>
                    <Container>
                        <Input size={size} label={`Input ${size}`} error="Some input error" />
                    </Container>
                    <Container>
                        <Input size={size} label={`Input ${size}`} success />
                    </Container>
                    <Container>
                        <Input size={size} label={`Input ${size}`} disabled />
                    </Container>
                </div>
            ))}
        </div>
    ));
