/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');

const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  displayName: 'root-tests',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['./src/main.ts', './src/shared/*'],
  coverageDirectory: 'test/coverage/unit',
  coverageReporters: ['json', 'html'],
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/@core/$1',
    '^@infra/(.*)$': '<rootDir>/src/infra/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@test/(.*)$': '<rootDir>/test/$1',
  },
};

/**
 @rootDir - raiz do diretório que contém o arquivo de configuração do Jest
 @displayName - Permite que uma etiqueta seja impressa ao lado de um teste durante sua execução. 
 @setupFilesAfterEnv
 @testMatch - Os padrões global que Jest usa para detectar arquivos de teste.
 @testEnvironment - O ambiente de teste que será usado para teste.
 @clearMocks - Limpe automaticamente chamadas e instâncias antes de cada teste.
 @preset - Uma predefinição que é usada como base para a configuração de Jest.
 @collectCoverage - Indica que as informações de coleta do teste devem ser coletadas e reportadas no console.
 @collectCoverageFrom - Um padrão glob relativo à rootDircorrespondência dos arquivos dos quais as informações de cobertura precisam ser coletadas.
 @coverageDirectory - O diretório onde o Jest deve enviar seus arquivos de cobertura
 @coverageReporters - Uma lista de nomes de repórteres que Jest usa ao escrever relatórios de cobertura
 */
