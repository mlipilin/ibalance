import React from 'react';

// Components
import Checkbox from '../index';

// Constants
import { SIZES } from '../../../constants/sizes';
import { TYPES } from '../../../constants/types';

// Wrappers
import Row from '../../../storybook-wrappers/Row';

const sizes = [SIZES.S, SIZES.M, SIZES.L];
const types = [TYPES.PRIMARY, TYPES.SECONDARY];

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

let stories = {};

types.forEach(type => {
    let typeStories = [];

    sizes.forEach(size => {
        const key = `${size}_1`;
        const component = (
            <Row key={key}>
                <Container>
                    <Checkbox size={size} type={type} />
                </Container>
            </Row>
        );
        typeStories.push({ key, component });
    });

    sizes.forEach(size => {
        const key = `${size}_2`;
        const component = (
            <Row key={key}>
                <Container>
                    <Checkbox size={size} type={type}>
                        {type} checkbox with size {size.toUpperCase()}
                    </Checkbox>
                </Container>
            </Row>
        );
        typeStories.push({ key, component });
    });

    sizes.forEach(size => {
        const key = `${size}_3`;
        const component = (
            <Row key={key}>
                <Container>
                    <Checkbox disabled size={size} type={type}>
                        {type} checkbox with size {size.toUpperCase()} disabled
                    </Checkbox>
                </Container>
            </Row>
        );
        typeStories.push({ key, component });
    });

    stories[type] = typeStories;
});

export default stories;
