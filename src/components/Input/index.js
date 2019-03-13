import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-classnames-maker';

import { useTheme } from '../../theme-provider';

const cx = bem('ib-input');

class Input extends Component {
    handleBlur = e => {
        this.props.onBlur(this.props);
    };

    handleChange = e => {
        this.props.onChange(e.target.value, this.props);
    };

    handleFocus = e => {
        this.props.onFocus(this.props);
    };

    render() {
        const { error, size, success, applyClasses, ...otherProps } = this.props;

        const inputClass = applyClasses(cx('', {}));

        const inputInputClass = applyClasses(
            cx('input', {
                error: !!error,
                size,
                success,
            }),
        );

        const inputErrorClass = applyClasses(
            cx('error', {
                size,
            }),
        );

        return (
            <div className={inputClass}>
                <input
                    {...otherProps}
                    className={inputInputClass}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                />

                {!!error && <div className={inputErrorClass}>{error}</div>}
            </div>
        );
    }
}

Input.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['s', 'm', 'l']),
    success: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
};

Input.defaultProps = {
    disabled: false,
    size: 'm',
    success: false,
    onBlur: _ => _,
    onChange: _ => _,
    onFocus: _ => _,
};

export default useTheme(Input);
