const path = require('path');

/**
 * Plugins
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/**
 * Env
 */

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

/**
 * Paths
 */
const favicon = path.resolve(__dirname, 'src/icons/favicon.ico');
const appleIcon = path.resolve(__dirname, 'src/logo192.png');

/**
 * CopyPlugin patterns
 */
const appleIconPattern = {
  from: path.resolve(__dirname, 'src/icons/logo192.png'),
  to: path.resolve(__dirname, 'dist/logo192.png'),
};

/**
 * Rules
 */

const css = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: { hmr: isDev, reload: true },
    },
    'css-loader',
  ],
};

const scss = {
  test: /\.s[ac]ss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: { hmr: isDev, reload: true },
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'postcss-loader',
    },
    {
      loader: 'sass-loader',
    },
  ],
};

const images = {
  test: /\.(png|jpg|svg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: { name: '[name].[ext]', outputPath: 'assets/images/' },
    },
  ],
};

const fonts = {
  test: /\.(ttf|woff|woff2|eot)$/,
  use: ['file-loader'],
};

const js = () => {
  const use = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    },
  ];

  if (isDev) {
    use.push('eslint-loader');
  }

  return {
    test: /\.js$/,
    exclude: /node_modules/,
    use,
  };
};

const html = {
  test: /\.html$/,
  use: ['html-loader'],
};

/**
 * Config
 */

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, 'src/index.js')],
  },
  output: {
    filename: isDev ? '[name].js' : '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [new OptimizeCssAssetsWebpackPlugin(), new TerserWebpackPlugin()],
    minimize: isProd,
  },
  devServer: {
    port: 3000,
    hot: isDev,
  },
  devtool: isDev ? 'source-map' : '',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.ejs'),
      filename: 'index.html',
      minify: { collapseWhitespace: isProd },
      favicon: favicon,
      'apple-touch-icon': appleIcon,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
    }),
    new CopyPlugin({
      patterns: [appleIconPattern],
    }),
  ],
  module: {
    rules: [css, scss, images, fonts, js(), html],
  },
};
