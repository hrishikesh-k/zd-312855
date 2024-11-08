import path, { dirname, join } from 'path';
import Dotenv from 'dotenv-webpack';

module.exports = {
  stories: ['../src/**/src/stories/*.stories.tsx'],

  addons: [
    getAbsolutePath('@storybook/preset-scss'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
    '@chromatic-com/storybook'
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },

  babel: async (options) => {
    options.plugins.push('@babel/plugin-syntax-flow');
    options.presets.push('@babel/preset-typescript');
    return options;
  },

  docs: {},

  features: {},

  webpackFinal: async (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));

    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    config.resolve.fallback = {
      ...config.resolve.fallback,
      zlib: false,
    };

    // Add aliases if necessary
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };

    // Read from Environment variables
    config.plugins.push(
      new Dotenv({
        path: path.resolve(__dirname, '../.env.local'),
      }),
    );

    return config;
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
