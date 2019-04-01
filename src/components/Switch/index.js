import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-classnames-maker';

// Constants
import { SIZES } from '../../constants/sizes';
import { TYPES } from '../../constants/types';

import { useTheme } from '../../theme-provider';

const cx = bem('ib-switch');

class Switch extends Component {
    handleChange = e => {
        this.props.onChange(e.target.checked, this.props);
    };

    render() {
        const { checked, children, disabled, size, type, applyClasses, ...otherProps } = this.props;

        const componentClass = applyClasses(cx(''));
        const labelClass = applyClasses(cx('label', { checked, disabled, size, type }));
        const contentClass = applyClasses(cx('content', { size }));

        return (
            <div className={componentClass}>
                <label className={labelClass}>
                    <input
                        {...otherProps}
                        checked={checked}
                        disabled={disabled}
                        type="checkbox"
                        onChange={this.handleChange}
                    />
                </label>

                {/* Content */}
                {!!children && <div className={contentClass}>{children}</div>}
            </div>
        );
    }
}

Switch.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf([SIZES.S, SIZES.M, SIZES.L]),
    type: PropTypes.oneOf([TYPES.PRIMARY, TYPES.SECONDARY]),
    onChange: PropTypes.func,
};

Switch.defaultProps = {
    checked: false,
    disabled: false,
    size: SIZES.M,
    type: TYPES.PRIMARY,
    onChange: _ => _,
};

export default useTheme(Switch);
