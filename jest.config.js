module.exports = {
    projects: [
        {
            displayName: 'Node',
            testEnvironment: 'node',
            moduleFileExtensions: ['js', 'mjs', 'ts'],
            roots: ['<rootDir>/src'],
            testMatch: [
                '**/http/**/?(*.)+(spec|test).+(mjs|js)',
                '**/shared/**/?(*.)+(spec|test).+(mjs|js|ts)',
            ],
            transform: {
                '^.+\\.(mj|j)s?$': '@swc/jest',
            },
            transformIgnorePatterns: ['node_modules/(?!nanoid/.*)'],
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
