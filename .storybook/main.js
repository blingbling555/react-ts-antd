const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.[tj]sx'],
  core: {
    builder: 'webpack5',
  },
  // addons: ['@storybook/preset-scss'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
