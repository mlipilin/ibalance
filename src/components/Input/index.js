import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-classnames-maker';
import InputMask from 'react-input-mask';

// Constants
import { SIZES } from '../../constants/sizes';

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
            mask,
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

        const componentClass = applyClasses(
            cx('', {
                size,
            }),
        );

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

        let inputProps = {
            ...otherProps,
            className: inputClass,
            placeholder: inputPlaceholder,
            value: formatValue(value),
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onFocus: this.handleFocus,
        };
        if (mask) {
            inputProps = { ...inputProps, mask, maskChar: null };
        }

        return (
            <div className={componentClass}>
                <label className={labelClass}>
                    {/* Label */}
                    {!!label && <span className={labelTextClass}>{label}</span>}

                    {/* Input */}
                    {!mask && <input {...inputProps} />}
                    {!!mask && <InputMask {...inputProps} />}
                </label>

                {/* Error */}
                {!!error && <div className={errorClass}>{error}</div>}
            </div>
        );
    }
}

Input.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    mask: PropTypes.string,
    size: PropTypes.oneOf([SIZES.S, SIZES.M, SIZES.L]),
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
    error: '',
    mask: '',
    size: SIZES.M,
    success: false,
    value: '',
    formatValue: _ => _,
    onBlur: _ => _,
    onChange: _ => _,
    onFocus: _ => _,
    parseValue: _ => _,
};

export default useTheme(Input);
