import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src/'],
  collectCoverage: true,
  collectCoverageFrom: ['!src/**/*.stories.tsx'],
};

export default config;
