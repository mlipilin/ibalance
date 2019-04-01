import React, { Component } from 'react';

import './styles.css';

class StorybookRow extends Component {
    render() {
        return <div className="storybook-row">{this.props.children}</div>;
    }
}

export default StorybookRow;
