import React from 'react';

// Components
import Switch from '../index';

// Constants
import { SIZES } from '../../../constants/sizes';
import { TYPES } from '../../../constants/types';

// Wrappers
import Cell from '../../../storybook-wrappers/Cell';
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
        const key = `${type}_${size}`;
        const component = (
            <div key={key}>
                <Row>
                    <Cell>
                        <Container>
                            <Switch size={size} type={type}>
                                {type} switch with size {size.toUpperCase()}
                            </Switch>
                        </Container>
                    </Cell>
                </Row>
                <Row>
                    <Cell>
                        <Container>
                            <Switch size={size} type={type} />
                        </Container>
                    </Cell>
                    <Cell>
                        <Container>
                            <Switch size={size} type={type} disabled />
                        </Container>
                    </Cell>
                </Row>
            </div>
        );
        typeStories.push({ key, component });
    });

    stories[type] = typeStories;
});

export default stories;
