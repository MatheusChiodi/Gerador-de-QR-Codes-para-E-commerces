import prompt from 'prompt';

import mainPrompt from './prompt-schema/schema-main.js';
import createPrompt from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main() {
  prompt.get(mainPrompt, async (err, choose) => {
    if (choose.select == 1) {
      await createPrompt();
    }
    if (choose.select == 2) {
      await createPassword();
    }
  });

  prompt.start();
}

main();
