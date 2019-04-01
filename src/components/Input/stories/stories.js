import React from 'react';

// Components
import Input from '../index';

// Constants
import { SIZES } from '../../../constants/sizes';

// Wrappers
import Cell from '../../../storybook-wrappers/Cell';
import Row from '../../../storybook-wrappers/Row';

const sizes = [SIZES.S, SIZES.M, SIZES.L];

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

let stories = {};

stories['Default'] = sizes.map(size => ({
    key: `default_${size}`,
    component: (
        <Row key={size}>
            <Cell>
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
            </Cell>
            <Cell>
                <Container>
                    <Input size={size} placeholder={`Input ${size}`} error="Some input error" />
                </Container>
            </Cell>
            <Cell>
                <Container>
                    <Input size={size} placeholder={`Input ${size}`} success />
                </Container>
            </Cell>
            <Cell>
                <Container>
                    <Input size={size} placeholder={`Input ${size}`} disabled />
                </Container>
            </Cell>
        </Row>
    ),
}));

stories['Label'] = sizes.map(size => ({
    key: `label_${size}`,
    component: (
        <Row key={`label_${size}`}>
            <Cell>
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
            </Cell>
            <Cell>
                <Container>
                    <Input size={size} label={`Input ${size}`} error="Some input error" />
                </Container>
            </Cell>
            <Cell>
                <Container>
                    <Input size={size} label={`Input ${size}`} success />
                </Container>
            </Cell>
            <Cell>
                <Container>
                    <Input size={size} label={`Input ${size}`} disabled />
                </Container>
            </Cell>
        </Row>
    ),
}));

stories['FormatValue'] = [
    {
        key: 'onlyNumbers',
        component: (
            <Container>
                <Input label="Only numbers" formatValue={value => value.replace(/\D/g, '')} />
            </Container>
        ),
    },
];

stories['Mask'] = [
    {
        key: 'mask',
        component: (
            <Container>
                <Input label="Mask (phone)" mask="+7\ (999) 999-99-99" />
            </Container>
        ),
    },
];

export default stories;
