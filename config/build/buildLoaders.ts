import webpack from 'webpack'

export const buildLoaders = ():webpack.RuleSetRule[] => {
    const cssLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const typescriptLoader =  {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
    };

    return [
        cssLoader,
        typescriptLoader
    ]
}