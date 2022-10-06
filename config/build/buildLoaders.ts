import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: BuildOptions):webpack.RuleSetRule[] => {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = {
        rules: [
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
        ],
    };

    const fileLoader = {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|woff2)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    };

    const cssLoader = buildCssLoader(isDev);

    return [
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ];
};
