import qr from "qrcode-terminal";
import chalk from "chalk";

async function handler(err, result) {
    if (err) {
        console.log("Error on aplication");
        return;
    }

    const isSmall = result.Type == 2;

    qr.generate(result.Link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green("QR Code generated with success!\n"));
        console.log(qrcode);
    });
}

export default handler;
