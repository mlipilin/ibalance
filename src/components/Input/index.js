import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-classnames-maker';

import { useTheme } from '../../theme-provider';

const cx = bem('ib-input');

class Input extends Component {
    state = { hasFocus: false };

    blur = () => {
        this.setState({ hasFocus: false });
    };

    focus = () => {
        this.setState({ hasFocus: true });
    };

    handleBlur = e => {
        this.setState({ hasFocus: false }, () => {
            this.props.onBlur(this.props);
        });
    };

    handleChange = e => {
        const { onChange, parseValue } = this.props;
        onChange(parseValue(e.target.value), this.props);
    };

    handleFocus = e => {
        this.setState({ hasFocus: true }, () => {
            this.props.onFocus(this.props);
        });
    };

    render() {
        const {
            error,
            label,
            placeholder,
            size,
            success,
            value,
            applyClasses,
            formatValue,
            parseValue,
            ...otherProps
        } = this.props;

        const { hasFocus } = this.state;

        const componentClass = applyClasses(cx('', {}));

        const labelClass = applyClasses(cx('label', {}));

        const labelTextClass = applyClasses(
            cx('label-text', {
                size,
                'place-top': hasFocus || !!value,
            }),
        );

        const inputClass = applyClasses(
            cx('input', {
                error: !!error,
                size,
                success,
                'with-label': !!label,
            }),
        );

        const errorClass = applyClasses(
            cx('error', {
                size,
            }),
        );

        const inputPlaceholder = label ? '' : placeholder;

        return (
            <div className={componentClass}>
                <label className={labelClass}>
                    {/* Label */}
                    {!!label && <span className={labelTextClass}>{label}</span>}

                    {/* Input */}
                    <input
                        {...otherProps}
                        className={inputClass}
                        placeholder={inputPlaceholder}
                        value={formatValue(value)}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                    />
                </label>

                {/* Error */}
                {!!error && <div className={errorClass}>{error}</div>}
            </div>
        );
    }
}

Input.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['s', 'm', 'l']),
    success: PropTypes.bool,
    value: PropTypes.string,
    formatValue: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    parseValue: PropTypes.func,
};

Input.defaultProps = {
    disabled: false,
    size: 'm',
    success: false,
    value: '',
    formatValue: _ => _,
    onBlur: _ => _,
    onChange: _ => _,
    onFocus: _ => _,
    parseValue: _ => _,
};

export default useTheme(Input);
