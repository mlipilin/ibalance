import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-classnames-maker';

// Constants
import { POSITION } from './constants';

import { useTheme } from '../../theme-provider';

const cx = bem('ib-notification-wrapper');

class Wrapper extends Component {
    render() {
        const { notifications, position, applyClasses, ...otherProps } = this.props;

        const componentClass = applyClasses(cx('', { position }));

        return (
            <div className={componentClass} {...otherProps}>
                {this.props.children}
            </div>
        );
    }
}

Wrapper.propTypes = {
    position: PropTypes.oneOf([
        POSITION.BOTTOM_CENTER,
        POSITION.BOTTOM_LEFT,
        POSITION.BOTTOM_RIGHT,
        POSITION.TOP_CENTER,
        POSITION.TOP_LEFT,
        POSITION.TOP_RIGHT,
    ]),
};

Wrapper.defaultProps = {
    position: POSITION.TOP_RIGHT,
};

export default useTheme(Wrapper);
