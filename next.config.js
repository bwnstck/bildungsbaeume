module.exports = {
  generateBuildId: () => 'build',
  pageExtensions: ['tsx'],
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: 'json',
          use: 'yaml-loader',
        },
        {
          test: /\.svg$/,
          use: '@svgr/webpack',
        },
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
      ]
    )
    return config
  },
}
