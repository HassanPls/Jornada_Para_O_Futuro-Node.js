import chalk from "chalk";
import handler from "./handle.js";

async function createPassword() {
    console.log(chalk.green("password"));
    const password = await handler();
    console.log(password);
}

export default createPassword;