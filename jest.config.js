module.exports = {
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};