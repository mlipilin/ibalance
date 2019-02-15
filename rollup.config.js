import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json';

const external = Object.keys(pkg.dependencies);

const plugins = [
    resolve(),
    babel({
        exclude: 'node_modules/**',
    }),
    commonjs(),
];

export default [
    // browser-friendly UMD build
    {
        input: 'src/index.js',
        output: {
            name: 'ibalance',
            file: pkg.browser,
            format: 'umd',
        },
        external,
        plugins,
    },

    // CommonJS (for Node) and ES module (for bundlers) build.
    {
        input: 'src/index.js',
        output: [{ file: pkg.main, format: 'cjs' }, { file: pkg.module, format: 'es' }],
        external,
        plugins,
    },
];
