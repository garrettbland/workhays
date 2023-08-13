// /** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'html'],
    // transformIgnorePatterns: ['node_modules/nanoid'],
    transform: {
        '^.+\\.ts?$': 'esbuild-jest',
        '\\.(html)$': '<rootDir>/environment/htmlLoader.js',
    },
}
