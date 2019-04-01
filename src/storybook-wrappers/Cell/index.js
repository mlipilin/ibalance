import React, { Component } from 'react';

import './styles.css';

class StorybookCell extends Component {
    render() {
        const { children, ...otherProps } = this.props;
        return (
            <div className="storybook-cell" {...otherProps}>
                {children}
            </div>
        );
    }
}

export default StorybookCell;
