import PeerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";
import terser from '@rollup/plugin-terser';
import postcss from "rollup-plugin-postcss";
const packageJson = require('./package.json');

export default [
    {
        input: "index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            PeerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({tsconfig: './tsconfig.json'}),
            terser(),
            postcss({
                modules: {
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                },
                inject: false
            }),
        ],
        external: ["react", "react-dom", 'react/jsx-runtime'],
    },
    {
        input: "index.ts",
        output: [{file: packageJson.types}],
        plugins: [dts.default()],
        external: [/\.css/]
    }
]