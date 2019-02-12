import React from 'react';

// Utils
import cssm from './utils/cssm';

const MyContext = React.createContext(null);
const ThemeProvider = MyContext.Provider;

const applyClasses = (componentStyles, themeStyles, className) => classes => {
    const stylesMerged = {
        // First style layer (default component styles)
        ...componentStyles,

        // Second style layer (styles from provider, DI)
        ...themeStyles,
    };

    return cssm(
        stylesMerged,
        classes,

        // Third style layer (className from props)
        className,
    );
};

export const useTheme = (Component, componentStyles = {}) => ({ className, ...otherProps }) => (
    <MyContext.Consumer>
        {value => {
            const themeStyles = value ? value.styles : {};
            return (
                <Component
                    {...otherProps}
                    className={className}
                    applyClasses={applyClasses(componentStyles, themeStyles, className)}
                />
            );
        }}
    </MyContext.Consumer>
);

export default ThemeProvider;
