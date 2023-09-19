/** @type {import('jest').Config} */
module.exports = {
    displayName: 'Utilities',
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'mjs', 'ts'],
    roots: ['<rootDir>/src'],
    testMatch: ['**/?(*.)+(spec|test).+(mjs|js|ts)'],
    transform: {
        '^.+\\.(mj|j|t)s?$': '@swc/jest',
    },
    // nanoid is esm only, so ignore below. Otherwise we get jest errors
    transformIgnorePatterns: ['node_modules/(?!nanoid/.*)'],
    // moduleNameMapper: {
    //     '^@utils': '<rootDir>/src/utils',
    //     '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    // },
}
