import React from 'react';
import { icons } from 'feather-icons';

import { storiesOf } from '@storybook/react';

import Icon from '../index';

import styles from './styles.css';

storiesOf('Icon')
    .add('Size = 24px (default)', () => (
        <div className="Story__Icon-Container ">
            {Object.keys(icons).map(name => (
                <Icon key={name} name={name} styles={styles} title={name} />
            ))}
        </div>
    ))
    .add('Size = 32px', () => (
        <div className="Story__Icon-Container ">
            {Object.keys(icons).map(name => (
                <Icon key={name} name={name} size={32} styles={styles} title={name} />
            ))}
        </div>
    ))
    .add('Colored', () => (
        <div className="Story__Icon-Container ">
            {Object.keys(icons).map(name => (
                <Icon color="#007bff" key={name} name={name} styles={styles} title={name} />
            ))}
        </div>
    ));
