module.exports = {
    displayName: 'Arc',
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'mjs', 'ts'],
    roots: ['<rootDir>/src'],
    testMatch: ['**/?(*.)+(spec|test).+(mjs|js|ts)'],
    transform: {
        '^.+\\.(mj|j|t)s?$': '@swc/jest',
    },
    transformIgnorePatterns: ['node_modules/(?!nanoid/.*)'],
    moduleNameMapper: {
        '^utilities': '<rootDir>/../utilities/src/index.ts',
        '^utilities/(.*)$': '<rootDir>/../utilities/$1/src/index.ts',
    },
}
