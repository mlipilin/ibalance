const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
    // env has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Extend defaultConfig as you need.

    defaultConfig.module.rules.push({
        test: /\.less$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[name]_[local]_[hash:base64]',
                    sourceMap: true,
                },
            },
            'less-loader',
        ],
    });

    return defaultConfig;
};
