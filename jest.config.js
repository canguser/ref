module.exports = {
    globals: {
        __VERSION__: require('./package.json').version,
    },
    watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
    moduleFileExtensions: ['js', 'json'],
    testMatch: ['<rootDir>/src/**/__tests__/**/*spec.[jt]s?(x)'],
    coverageDirectory: 'build/test-coverage',
    coverageReporters: ['html', 'lcov', 'text'],
    collectCoverageFrom: [
        'src/main/*.js',
    ],
    rootDir: __dirname
};