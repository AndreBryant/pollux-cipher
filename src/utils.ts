export enum CharEnum {
  dash = "-",
  dot = ".",
  separator = "X",
}

export const MORSE_CODES: Record<string, string> = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "0": "-----",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  $: "...-..-",
  '"': ".-..-.",
  "'": ".----.",
  _: "..--.-",
  " ": "X",
};

// Transforms the key record into a string
export function createString(key: Record<string, number[]>): string {
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
export function getRandomInt(min: number, max: number) {
  // Inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
