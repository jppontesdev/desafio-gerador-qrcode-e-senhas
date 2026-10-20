import prompt from "prompt";
import promptQRCode from "../../prompts-schema/prompt.js";
import handle from "./handle.js"

async function createQRCode () {
    prompt.get(promptQRCode, handle) 

    prompt.start();
}

export default createQRCode;