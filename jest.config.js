// /** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'html'],
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '\\.(html)$': '<rootDir>/environment/htmlLoader.js',
    },
    transformIgnorePatterns: ['node_modules/(?!nanoid/.*)'],
}
