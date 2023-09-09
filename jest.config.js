/** @type {import('jest').Config} */
module.exports = {
    projects: [
        {
            displayName: 'Node',
            testEnvironment: 'node',
            moduleFileExtensions: ['js', 'mjs', 'ts'],
            roots: ['<rootDir>/src'],
            testMatch: [
                '**/http/**/?(*.)+(spec|test).+(mjs|js|ts)',
                '**/utils/**/?(*.)+(spec|test).+(mjs|js|ts)',
            ],
            transform: {
                '^.+\\.(mj|j|t)s?$': '@swc/jest',
            },
            transformIgnorePatterns: ['node_modules/(?!nanoid/.*)'],
            moduleNameMapper: {
                '^@utils': '<rootDir>/src/utils',
                '^@utils/(.*)$': '<rootDir>/src/utils/$1',
            },
        },
        {
            displayName: 'Browser',
            testEnvironment: 'jsdom',
            moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
            roots: ['<rootDir>/src'],
            testMatch: [
                '**/app/**/?(*.)+(spec|test).+(ts|js|tsx|jsx)',
                '**/components/**/?(*.)+(spec|test).+(ts|js|tsx|jsx)',
            ],
            transform: {
                '^.+\\.(t|j)sx?$': '@swc/jest',
            },
        },
    ],
}
