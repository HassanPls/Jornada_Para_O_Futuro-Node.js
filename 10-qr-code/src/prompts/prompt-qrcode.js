import chalk from "chalk";

const qrcodePrompt = [
    {
        name: "Link",
        description: chalk.yellow.bold("Enter the link to generate the QR Code"),
        required: true
    },
    {
        name: "Type",
        description: chalk.yellow.bold("Choose the type (1 - Normal || 2 - QR Code)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Choose only 1 or 2"),
        required: true
    }
];

export default qrcodePrompt;