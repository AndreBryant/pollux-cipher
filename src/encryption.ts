import { MORSE_CODES } from "./utils";
export function polluxEncrypt(plainText: string, key: string): string {
  const xIndex = key.indexOf("X");
  let result: string = "";

  for (let i = 0; i < plainText.length; i++) {
    const char = plainText[i].toUpperCase();
    const morseCodeInNumber = MORSE_CODES[char]
      .split("")
      .map((c) => key.indexOf(c))
      .join("");
    result += morseCodeInNumber;
    if (plainText[i + 1] && plainText[i + 1] !== " ") {
      result += key.indexOf("X");
    }
  }
  return result;
}
