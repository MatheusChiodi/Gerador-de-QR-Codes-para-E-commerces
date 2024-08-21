import chalk from 'chalk';
import handle from './handle.js';

async function createPassword() {
  const password = await handle();
  console.log(chalk.green.bold(`Sua senha é: ${password}`));
}

export default createPassword;
