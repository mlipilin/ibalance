import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-classnames-maker';

// Components
import Spin from '../Spin';

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
    size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
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
    type: 'default',
    applyClasses: _ => _,
};

export default useTheme(Button);
