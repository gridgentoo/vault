/* eslint-env node */

module.exports = {
  framework: 'qunit',
  test_page: 'tests/index.html?hidepassed&nolint',
  tap_quiet_logs: true,
  disable_watching: true,
  timeout: 1200,
  browser_start_timeout: 2000,
  parallel: 4,
  launchers: {
    BS_Chrome_Current: {
      exe: 'node_modules/.bin/browserstack-launch',
      args: [
        '--os',
        'Windows',
        '--osv',
        '10',
        '--b',
        'chrome',
        '--bv',
        'latest',
        '-t',
        '1200',
        '--u',
        '<url>',
      ],
      protocol: 'browser',
    },
    BS_Firefox_Current: {
      exe: 'node_modules/.bin/browserstack-launch',
      args: [
        '--os',
        'Windows',
        '--osv',
        '10',
        '--b',
        'firefox',
        '--bv',
        'latest',
        '-t',
        '1200',
        '--u',
        '<url>',
      ],
      protocol: 'browser',
    },
    BS_Safari_Current: {
      exe: 'node_modules/.bin/browserstack-launch',
      args: [
        '--os',
        'OS X',
        '--osv',
        'Mojave',
        '--b',
        'safari',
        '--bv',
        'latest',
        '-t',
        '1200',
        '--u',
        '<url>',
      ],
      protocol: 'browser',
    },
    BS_Edge_Current: {
      exe: 'node_modules/.bin/browserstack-launch',
      args: ['--os', 'Windows', '--osv', '10', '--b', 'edge', '--bv', 'latest', '-t', '1200', '--u', '<url>'],
      protocol: 'browser',
    },
  },
  launch_in_dev: [],
  launch_in_ci: ['BS_Firefox_Current', 'BS_Edge_Current'],
  proxies: {
    '/v1': {
      target: 'http://localhost:9200',
    },
  },
};
