module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/out/**',
    '!**/coverage/**',
    '!**/.eslintrc.js',
    '!**/jest.config.js',
    '!**/next.config.js',
    '!**/types.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(svg)$': '<rootDir>/mocks/fileMock.js'
  },
  moduleDirectories: ['node_modules', './']
}
