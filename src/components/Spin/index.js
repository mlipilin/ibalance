import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-classnames-maker';

// Constants
import { SIZES } from '../../constants/sizes';
import { TYPES } from '../../constants/types';

import { useTheme } from '../../theme-provider';

const cx = bem('ib-spin');

class Spin extends Component {
    render() {
        const { size, type, applyClasses } = this.props;
        return <div className={applyClasses(cx('', { size, type }))} />;
    }
}

Spin.propTypes = {
    size: PropTypes.oneOf([SIZES.XS, SIZES.S, SIZES.M, SIZES.L, SIZES.XL, SIZES.XXL]),
    type: PropTypes.oneOf([
        TYPES.DEFAULT,
        TYPES.PRIMARY,
        TYPES.SECONDARY,
        TYPES.DANGER,
        TYPES.SUCCESS,
        TYPES.INFO,
        TYPES.WARNING,
        TYPES.BLACK,
        TYPES.WHITE,
    ]),
};

Spin.defaultProps = {
    type: TYPES.DEFAULT,
    size: SIZES.M,
};

export default useTheme(Spin);
