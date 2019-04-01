import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-classnames-maker';

// Components
import Spin from '../Spin';

// Constants
import { SIZES } from '../../constants/sizes';
import { TYPES } from '../../constants/types';

import { useTheme } from '../../theme-provider';

const cx = bem('ib-button');

class Button extends Component {
    render() {
        const {
            block,
            disabled,
            iconLeft,
            iconRight,
            processing,
            size,
            type,
            applyClasses,
        } = this.props;

        const componentClass = applyClasses(
            cx('', {
                block,
                disabled,
                processing,
                size,
                type,
            }),
        );
        const containerClass = applyClasses(
            cx('container', {
                'no-icons': !iconLeft && !iconRight,
            }),
        );
        const contentClass = applyClasses(cx('content', {}));
        const iconLeftClass = applyClasses(cx('icon-left', {}));
        const iconRightClass = applyClasses(cx('icon-right', {}));
        const spinClass = applyClasses(cx('spin', {}));

        let buttonProps = { disabled };
        if (processing) {
            buttonProps.processing = 'processing';
        }

        return (
            <button className={componentClass} {...buttonProps}>
                <div className={containerClass}>
                    {/* Icon left */}
                    {!!iconLeft && <div className={iconLeftClass}>{iconLeft}</div>}

                    {/* Content */}
                    <div className={contentClass}>{this.props.children}</div>

                    {/* Icon right */}
                    {!!iconRight && <div className={iconRightClass}>{iconRight}</div>}

                    {/* Spin */}
                    {processing && (
                        <div className={spinClass}>
                            <Spin size={size} />
                        </div>
                    )}
                </div>
            </button>
        );
    }
}

Button.propTypes = {
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    iconLeft: PropTypes.object,
    iconRight: PropTypes.object,
    processing: PropTypes.bool,
    size: PropTypes.oneOf([SIZES.XS, SIZES.S, SIZES.M, SIZES.L, SIZES.XL, SIZES.XXL]),
    type: PropTypes.oneOf([
        TYPES.DEFAULT,
        TYPES.PRIMARY,
        TYPES.SECONDARY,
        TYPES.DANGER,
        TYPES.SUCCESS,
        TYPES.INFO,
        TYPES.WARNING,
    ]),
};

Button.defaultProps = {
    block: false,
    disabled: false,
    processing: false,
    size: SIZES.M,
    type: TYPES.DEFAULT,
};

export default useTheme(Button);
