import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-classnames-maker';

import { useTheme } from '../../theme-provider';

const cx = bem('ib-spin');

class Spin extends Component {
    render() {
        const { size, type, applyClasses } = this.props;
        return <div className={applyClasses(cx('', { size, type }))} />;
    }
}

Spin.propTypes = {
    size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
    type: PropTypes.oneOf([
        'default',
        'primary',
        'secondary',
        'danger',
        'success',
        'info',
        'warning',
        'black',
        'white',
    ]),
    applyClasses: PropTypes.func,
};

Spin.defaultProps = {
    type: 'default',
    size: 'm',
    applyClasses: _ => _,
};

export default useTheme(Spin);
