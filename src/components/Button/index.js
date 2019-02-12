import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-classnames-maker';

import { useTheme } from '../../theme-provider';

import styles from './styles.less';

const cx = bem('ib-button');

class Button extends Component {
    render() {
        const { block, disabled, processing, size, type, applyClasses } = this.props;

        return (
            <button
                className={applyClasses(
                    cx('', {
                        block,
                        disabled,
                        processing,
                        size,
                        type,
                    }),
                )}
            >
                {this.props.children}
            </button>
        );
    }
}

Button.propTypes = {
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    processing: PropTypes.bool,
    size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
    styles: PropTypes.object,
    type: PropTypes.oneOf([
        'default',
        'primary',
        'secondary',
        'danger',
        'success',
        'info',
        'warning',
    ]),
    applyClasses: PropTypes.func,
};

Button.defaultProps = {
    block: false,
    disabled: false,
    processing: false,
    size: 'm',
    styles: {},
    type: 'default',
    applyClasses: _ => _,
};

export default useTheme(Button, styles);
