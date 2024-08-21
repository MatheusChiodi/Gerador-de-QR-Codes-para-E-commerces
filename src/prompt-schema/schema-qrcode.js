import chalk from 'chalk';

const promptSchemaQRCode = [
  {
    name: 'link',
    description: chalk.yellow('Digite o link para gerar o QR Code'),
    pattern:
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
    message: chalk.red.bold('Por favor, digite um link válido'),
    required: true,
  },
  {
    name: 'type',
    description: chalk.yellow('Escolha o tipo (1: Imagem ou 2: Terminal)'),
    pattern: /^[1-2]+$/,
    message: chalk.red.bold('Escolha apenas entre 1 e 2'),
    required: true,
  },
];

export default promptSchemaQRCode;
