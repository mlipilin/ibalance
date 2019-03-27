import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-classnames-maker';

import { useTheme } from '../../theme-provider';

const cx = bem('ib-switch');

class Switch extends Component {
    handleChange = e => {
        this.props.onChange(e.target.checked, this.props);
    };

    render() {
        const { checked, children, disabled, size, type, applyClasses, ...otherProps } = this.props;

        const switchClass = applyClasses(cx(''));
        const switchLabelClass = applyClasses(cx('label', { checked, disabled, size, type }));
        const switchContentClass = applyClasses(cx('content', { size }));

        return (
            <div className={switchClass}>
                <label className={switchLabelClass}>
                    <input
                        {...otherProps}
                        checked={checked}
                        disabled={disabled}
                        type="checkbox"
                        onChange={this.handleChange}
                    />
                </label>

                {/* Content */}
                {!!children && <div className={switchContentClass}>{children}</div>}
            </div>
        );
    }
}

Switch.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['s', 'm', 'l']),
    type: PropTypes.oneOf(['primary', 'secondary']),
    onChange: PropTypes.func,
};

Switch.defaultProps = {
    checked: false,
    disabled: false,
    size: 'm',
    type: 'primary',
    onChange: _ => _,
};

export default useTheme(Switch);
