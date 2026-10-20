import chalk from "chalk";

const mainPrompt = [
    {
        name: `select`,
        description: chalk.yellow.bold(`escolha a ferramente (1- QRCode ou 2-Password)`),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic(`escolha apenas 1 ou 2`),
        required: true,
    }
]

export default mainPrompt