const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      routes: path.resolve(__dirname, 'src/routes'),
      components: path.resolve(__dirname, 'src/components'),
      contexts: path.resolve(__dirname, 'src/contexts'),
      assets: path.resolve(__dirname, 'src/assets'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      pages: path.resolve(__dirname, 'src/pages'),
      styles: path.resolve(__dirname, 'src/styles'),
      types: path.resolve(__dirname, 'src/types'),
      utils: path.resolve(__dirname, 'src/utils'),
      animations: path.resolve(__dirname, 'src/animations'),
      constants: path.resolve(__dirname, 'src/constants'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    historyApiFallback: true, 
  },
};
