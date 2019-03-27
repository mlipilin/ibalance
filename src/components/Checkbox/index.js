import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-classnames-maker';

import { useTheme } from '../../theme-provider';

const cx = bem('ib-checkbox');

class Checkbox extends Component {
    handleChange = e => {
        this.props.onChange(e.target.checked, this.props);
    };

    render() {
        const { checked, children, size, type, applyClasses, ...otherProps } = this.props;

        const checkboxClass = applyClasses(cx(''));

        return (
            <div className={checkboxClass}>
                <label className={applyClasses(cx('label', { checked, size, type }))}>
                    <input
                        {...otherProps}
                        checked={checked}
                        type="checkbox"
                        onChange={this.handleChange}
                    />
                    {children}
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['s', 'm', 'l']),
    type: PropTypes.oneOf(['primary', 'secondary']),
    onChange: PropTypes.func,
};

Checkbox.defaultProps = {
    checked: false,
    disabled: false,
    size: 'm',
    type: 'primary',
    onChange: _ => _,
};

export default useTheme(Checkbox);
