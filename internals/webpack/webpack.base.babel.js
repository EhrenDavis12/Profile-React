/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
// const { definitions } = new Dotenv();
const fs = require('fs');

console.log(`here here here here here here here here here here here here here`);
console.log(`__dirname: ${__dirname}`);
try {
  if (fs.existsSync(path.resolve(__dirname, './.env'))) {
    console.log(`env file path is 1: ${path.resolve(__dirname, './.env')}`);
  }
  if (fs.existsSync(path.resolve(__dirname, '..', '.env'))) {
    console.log(`env file path is 2: ${path.resolve(__dirname, '..', '.env')}`);
  }
  if (fs.existsSync(path.resolve(__dirname, '..', '..', '.env'))) {
    console.log(
      `env file path is 3: ${path.resolve(__dirname, '..', '..', '.env')}`,
    );
  }
  if (fs.existsSync('./.env')) {
    console.log(`env file path is 3: ./.env}`);
  }
} catch (err) {
  console.error(err);
}
console.log(`here here here here here here here here here here here here here`);

// Remove this line once the following warning goes away (it was meant for webpack loader authors not users):
// 'DeprecationWarning: loaderUtils.parseQuery() received a non-string value which can be problematic,
// see https://github.com/webpack/loader-utils/issues/56 parseQuery() will be replaced with getOptions()
// in the next major version of loader-utils.'
process.noDeprecation = true;

module.exports = options => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      // Compile into js/build.js
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/',
    },
    options.output,
  ), // Merge with env dependent settings
  optimization: options.optimization,
  module: {
    rules: [
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: options.babelQuery,
        },
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false,
                // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                // Try enabling it in your environment by switching the config to:
                // enabled: true,
                // progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  // plugins: [new webpack.DefinePlugin({ ...definitions })],
  /* plugins: options.plugins.concat([
    new Dotenv({
      // path: path.resolve(__dirname, './.env'),
      // path: path.resolve(__dirname, '..', '..', '.env'),
      // safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      // systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      // silent: true, // hide any errors
      // defaults: false, // load '.env.defaults' as the default values if empty.
    }),
  ]), */
  // plugins: options.plugins.concat([new Dotenv()]),
  /* plugins: options.plugins.concat([
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; Terser will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        USER_UUID: JSON.stringify(process.env.USER_UUID),
        CONTACT_ME_API_URL: JSON.stringify(process.env.CONTACT_ME_API_URL),
        CONTACT_ME_API_MESSAGES: JSON.stringify(
          process.env.CONTACT_ME_API_MESSAGES,
        ),
      },
    }),
  ]), */
  /* plugins: options.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': new Dotenv(),
    }),
  ]), */
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', '.env'),
    }),
  ],
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
});
