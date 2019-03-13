import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../index';

import './styles.css';

const SIZES = ['s', 'm', 'l'];

storiesOf('Input').add('Default', () => (
    <div className="Story__Input-Container">
        {SIZES.map(size => (
            <div key={size}>
                <Input
                    size={size}
                    placeholder={`Input ${size}`}
                    onBlur={props => {
                        console.log(`Input ${size} blur`, props);
                    }}
                    onChange={(value, props) => {
                        console.log(`Input ${size} change: ${value}`, props);
                    }}
                    onFocus={props => {
                        console.log(`Input ${size} focus`, props);
                    }}
                />
                <Input size={size} placeholder={`Input ${size}`} error="Some input error" />
                <Input size={size} placeholder={`Input ${size}`} success />
                <Input size={size} placeholder={`Input ${size}`} disabled />
            </div>
        ))}
    </div>
));
