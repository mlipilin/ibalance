import React, { Component } from 'react';

import './styles.css';

class StorybookRow extends Component {
    render() {
        const { children, ...otherProps } = this.props;
        return (
            <div className="storybook-row" {...otherProps}>
                {children}
            </div>
        );
    }
}

export default StorybookRow;
