module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  clearMocks: true,
  testEnvironment: 'enzyme',
  setupFilesAfterEnv: ['jest-enzyme'],
  collectCoverage: true,
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
};
