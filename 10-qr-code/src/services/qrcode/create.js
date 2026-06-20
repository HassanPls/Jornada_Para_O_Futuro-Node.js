import qrcodePrompt from "../../prompts/prompt-qrcode.js";
import prompt from "prompt";
import handler from "./handle.js";

async function createQRCode() {
    prompt.get(qrcodePrompt, handler);

    prompt.start();
}

export default createQRCode;