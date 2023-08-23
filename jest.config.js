// /** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    projects: [
        {
            displayName: 'Node',
            testEnvironment: 'node',
            moduleFileExtensions: ['js', 'mjs', 'ts'],
            // preset: 'ts-jest/presets/js-with-ts',
            roots: ['<rootDir>/src'],
            testMatch: [
                '**/http/**/?(*.)+(spec|test).+(mjs|js)',
                '**/shared/**/?(*.)+(spec|test).+(mjs|js|ts)',
            ],
            transform: {
                '^.+\\.(mj|j)s?$': '@swc/jest',
            },
            // transform: {
            //     '^.+\\.ts?$': 'ts-jest',
            //     '\\.(html)$': '<rootDir>/environment/htmlLoader.js',
            // },
            // transformIgnorePatterns: ['node_modules/(?!nanoid/.*)'],
        },
        {
            displayName: 'Browser',
            testEnvironment: 'jsdom',
            moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
            // preset: 'ts-jest/presets/js-with-ts',
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

// import nextJest from 'next/jest'

// const createJestConfig = nextJest({
//     // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//     dir: './',
// })

// // Add any custom config to be passed to Jest
// /** @type {import('jest').Config} */
// const config = {
//     // Add more setup options before each test is run
//     // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//     projects: [
//         {
//             displayName: 'Node',
//             testEnvironment: 'node',
//             moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'html'],
//             preset: 'ts-jest/presets/js-with-ts',
//             roots: ['<rootDir>/src'],
//             testMatch: [
//                 '**/http/**/?(*.)+(spec|test).+(ts|js)',
//                 '**/shared/**/?(*.)+(spec|test).+(ts|js)',
//                 '**/views/**/?(*.)+(spec|test).+(ts|js)',
//             ],
//             transform: {
//                 '^.+\\.ts?$': 'ts-jest',
//                 '\\.(html)$': '<rootDir>/environment/htmlLoader.js',
//             },
//             transformIgnorePatterns: ['node_modules/(?!nanoid/.*)'],
//         },
//         {
//             displayName: 'Browser',
//             testEnvironment: 'jest-environment-jsdom',
//             moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
//             // preset: 'ts-jest/presets/js-with-ts',
//             // roots: ['<rootDir>/src/apps'],
//             // testMatch: ['**/?(*.)+(spec|test).+(ts|js|tsx|jsx)'],
//             // transform: {
//             //     '^.+\\.(ts|tsx|js)?$': 'ts-jest',
//             // },
//         },
//     ],
// }

// // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// export default createJestConfig(config)
