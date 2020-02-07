// Config file for Husky (executes git hooks checks)

const tasks = arr => arr.join(' && ');
const rootDir = __dirname;

module.exports = {
  hooks: {
    'pre-commit': tasks([
      `echo 'Beginning pre-commit checks...'`,
      `echo '..Running aries-site checks' && cd aries-site`,
      `echo '....Linting checks for aries-site' && npm run lint-fix`,
      // `echo '....Running test suite for aries-site' && npm run test`,  // Enables this once tests are added
      `cd ${rootDir}`,
      `echo '..Running aries-core checks' && cd aries-core`,
      `echo '....Linting checks for aries-core' && npm run lint-fix`,
      // `echo '....Running test suite for aries-core' && npm run test`,  // Enables this once tests are added
      `cd ${rootDir}`,
      `echo 'Pre-commit checks completed.'`,
    ]),
    'pre-push': tasks([
      `echo '..Checking for latest version of Grommet' && yarn cache clean grommet && yarn upgrade grommet && git add yarn.lock && git commit -m 'updating to latest grommet'`,
    ]),
  },
};
