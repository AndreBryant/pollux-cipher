import { MORSE_CODES, CharEnum, getRandomInt, createString } from "./utils";

export abstract class Pollux {
  static encrypt(plaintext: string, key: Record<string, number[]>) {
    let result: string = "";

    for (const char of plaintext) {
      const morseCode = MORSE_CODES[char.toUpperCase()];
      for (const code of morseCode) {
        const nums = key[code];
        const randomIndex = getRandomInt(0, nums.length - 1);
        result += nums[randomIndex];
      }

      if (char !== " ") {
        // Add a separator
        const nums = key[CharEnum.separator];
        const randomIndex = getRandomInt(0, nums.length - 1);
        result += nums[randomIndex];
      }
    }

    return result.slice(0, -1); // remove the extra separator at the end
  }

  static decrypt(ciphertext: string, key: Record<string, number[]>) {
    const keyString: string = createString(key);
    let decrypted: string = "";
    let result: string = "";

    for (const num of ciphertext) {
      const strIndex = parseInt(num);
      result += keyString[strIndex];
    }
    const words = result.split(CharEnum.separator.repeat(2));

    for (const word of words) {
      const codes = word.split(CharEnum.separator);
      for (const code of codes!) {
        const letter = Object.keys(MORSE_CODES).find(
          (key) => MORSE_CODES[key] === code
        );
        decrypted += letter;
      }

      decrypted += " ";
    }
    return decrypted;
  }
}
