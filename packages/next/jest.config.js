/** @type {import('jest').Config} */
module.exports = {
    displayName: 'Next JS',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    roots: ['<rootDir>'],
    testMatch: [
        '**/app/**/?(*.)+(spec|test).+(ts|js|tsx|jsx)',
        '**/components/**/?(*.)+(spec|test).+(ts|js|tsx|jsx)',
    ],
    transform: {
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
}
