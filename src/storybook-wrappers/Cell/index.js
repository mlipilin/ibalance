import React, { Component } from 'react';

import './styles.css';

class StorybookCell extends Component {
    render() {
        return <div className="storybook-cell">{this.props.children}</div>;
    }
}

export default StorybookCell;
