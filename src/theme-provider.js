import React from 'react';

// Utils
import cssm from './utils/cssm';

const MyContext = React.createContext(null);
const ThemeProvider = MyContext.Provider;

const applyClasses = (theme, styles, className) => classes => {
    const stylesMerged = {
        // First style layer (styles from THEME)
        ...theme,

        // Second style layer (styles from PROPS)
        ...styles,
    };
    console.log({ styles });

    return cssm(
        stylesMerged,
        classes,

        // Third style layer (className from props)
        className,
    );
};

export const useTheme = Component => ({ className, styles, ...otherProps }) => (
    <MyContext.Consumer>
        {value => {
            const theme = value || {};
            return (
                <Component
                    {...otherProps}
                    className={className}
                    applyClasses={applyClasses(theme, styles, className)}
                />
            );
        }}
    </MyContext.Consumer>
);

export default ThemeProvider;
