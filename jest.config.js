// /** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    projects: [
        {
            displayName: 'Node',
            testEnvironment: 'node',
            moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'html'],
            preset: 'ts-jest/presets/js-with-ts',
            roots: ['<rootDir>/src/http'],
            testMatch: ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
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
            testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
            transform: {
                '^.+\\.(ts|tsx|js)?$': 'ts-jest',
            },
        },
    ],
}
