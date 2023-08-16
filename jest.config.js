// /** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    projects: [
        {
            displayName: 'Node',
            testEnvironment: 'node',
            moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'html'],
            preset: 'ts-jest/presets/js-with-ts',
            roots: ['<rootDir>/src'],
            testMatch: [
                '**/http/**/?(*.)+(spec|test).+(ts|js)',
                '**/shared/**/?(*.)+(spec|test).+(ts|js)',
                '**/views/**/?(*.)+(spec|test).+(ts|js)',
            ],
            transform: {
                '^.+\\.ts?$': 'ts-jest',
                '\\.(html)$': '<rootDir>/environment/htmlLoader.js',
            },
            transformIgnorePatterns: ['node_modules/(?!nanoid/.*)'],
        },
        {
            displayName: 'Browser',
            testEnvironment: 'jsdom',
            moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'html'],
            preset: 'ts-jest/presets/js-with-ts',
            roots: ['<rootDir>/src/apps'],
            testMatch: ['**/?(*.)+(spec|test).+(ts|js|tsx|jsx)'],
            transform: {
                '^.+\\.(ts|tsx|js)?$': 'ts-jest',
            },
        },
    ],
}
