module.exports = {
    roots: ['<rootDir>/tests'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.js',
        '!<rootDir>/src/main/**',
        '!<rootDir>/src/utils/**',
    ],
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    testEnvironment: 'node'
};
