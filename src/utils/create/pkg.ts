export const pkg: any = {
  name: 'projectName',
  version: '0.1.0',
  private: true,
  scripts: {
    dev: 'pea dev',
    build: 'pea build',
    test: 'pea test',
  },
  eslintConfig: {
    extends: 'react-app',
  },
  prettier: {
    semi: false,
    tabWidth: 2,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
  },
  browserslist: {
    production: ['>0.2%', 'not dead', 'not op_mini all'],
    development: [
      'last 1 chrome version',
      'last 1 firefox version',
      'last 1 safari version',
    ],
  },
}
