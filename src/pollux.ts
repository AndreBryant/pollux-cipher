import { MORSE_CODES } from "./utils";

export enum CharEnum {
  dash = "-",
  dot = ".",
  separator = "X",
}

export abstract class Pollux {
  static encrypt(plaintext: string, key: Record<string, number[]>) {
    let result: string = "";

    for (let i = 0; i < plaintext.length; i++) {
      const char = plaintext[i].toUpperCase();

      if (char === " ") {
        const nums = key[CharEnum.separator];
        const idx = getRandomInt(0, nums.length - 1);
        result += nums[idx];
        continue;
      }

      const morseCode = MORSE_CODES[char];

      for (const char of morseCode) {
        const nums = key[char];
        const idx = getRandomInt(0, nums.length - 1);

        result = result + nums[idx];
      }

      const nums = key[CharEnum.separator];
      const idx = getRandomInt(0, nums.length - 1);
      result += nums[idx];
    }

    // There is alwyas an extra separator at the end, so remove
    return result.slice(0, -1);
  }

  static decrypt(ciphertext: string, key: Record<string, number[]>) {
    const keyString: string = createString(key);
    let decrypted: string = "";
    let result: string = "";

    for (let i = 0; i < ciphertext.length; i++) {
      const strIndex = parseInt(ciphertext[i]);
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

// Transforms the key record into a string
function createString(key: Record<string, number[]>): string {
  let result = Array.from({ length: 10 });
  for (const char in key) {
    const nums = key[char];
    for (const idx of nums) {
      result[idx] = char;
    }
  }
  return result.join("");
}

// https://stackoverflow.com/a/1527820/25684936
function getRandomInt(min: number, max: number) {
  // Inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
