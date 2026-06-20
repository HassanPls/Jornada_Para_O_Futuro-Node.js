import chalk from "chalk";

const mainPrompt = [
    {
        name: "Select",
        description: chalk.yellow.bold("Choose the tool (1 - QR code || 2 - Password)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Choose only 1 or 2"),
        required: true
    }
];

export default mainPrompt;