import webpack from 'webpack'

export const buildLoaders = ():webpack.RuleSetRule[] => {
    return [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
    ]
}