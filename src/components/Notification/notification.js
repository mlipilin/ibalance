import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-classnames-maker';

// Constants
import { SIZES } from '../../constants/sizes';
import { TYPES } from '../../constants/types';

import { useTheme } from '../../theme-provider';

const cx = bem('ib-notification');

const CLOSING_TIMEOUT = 300;

class Notification extends Component {
    state = { closing: false };

    componentDidMount() {
        const { closeAfter } = this.props;

        if (closeAfter > 0) {
            setTimeout(() => {
                this.startClosing();
            }, closeAfter * 1000);
        }
    }

    handleCloseClick = e => {
        e.preventDefault();
        this.startClosing();
    };

    startClosing = () => {
        const blockHeight = this.block.offsetHeight;
        this.block.style.marginBottom = `-${blockHeight}px`;
        this.setState({ closing: true }, () => {
            setTimeout(() => {
                this.props.onClose();
            }, CLOSING_TIMEOUT);
        });
    };

    render() {
        const {
            canClose,
            closeAfter,
            description,
            size,
            title,
            type,
            applyClasses,
            ...otherProps
        } = this.props;

        const { closing } = this.state;

        const componentClass = applyClasses(cx('', { closing, size, type }));

        const closeClass = applyClasses(cx('close', { size }));

        const descriptionClass = applyClasses(cx('description', { size }));

        const titleClass = applyClasses(cx('title', { size }));

        return (
            <div ref={el => (this.block = el)} className={componentClass} {...otherProps}>
                {canClose && <a className={closeClass} onClick={this.handleCloseClick} />}

                {!!title && <div className={titleClass}>{title}</div>}

                {!!description && <div className={descriptionClass}>{description}</div>}
            </div>
        );
    }
}

Notification.propTypes = {
    canClose: PropTypes.bool,
    closeAfter: PropTypes.number, // seconds (0 - close manual, number - clsoe after number seconds)
    description: PropTypes.string,
    size: PropTypes.oneOf([SIZES.S, SIZES.M, SIZES.L]),
    title: PropTypes.string,
    type: PropTypes.oneOf([TYPES.DANGER, TYPES.INFO, TYPES.SUCCESS, TYPES.WARNING]),
    onClose: PropTypes.func,
};

Notification.defaultProps = {
    canClose: false,
    closeAfter: 0,
    description: '',
    size: SIZES.M,
    title: '',
    type: TYPES.INFO,
    onClose: _ => _,
};

export default useTheme(Notification);
