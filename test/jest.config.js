import rootConfig from '../jest.config';

module.exports = {
  ...rootConfig,
  ...{
    rootDir: root,
    displayName: 'end2end-tests',
    coverageDirectory: 'test/coverage/e2e',
    // setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
    testMatch: ['<rootDir>/test/**/*.e2e-spec.ts'],
  },
};
