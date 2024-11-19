import { MORSE_CODES } from "./utils";

export function decryptPollux(cipherText: string, key: string): string {
  let result: string = "";
  for (let i = 0; i < cipherText.length; i++) {
    const number = parseInt(cipherText[i]);
    result += key.charAt(number);
  }
  return result;
}
