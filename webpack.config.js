module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ['ts-loader'],
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        loaders: ['file-loader'],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loaders: ['url-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
