import { Pollux, CharEnum } from "./pollux";

const key: Record<string, number[]> = {
  [CharEnum.dash]: [0, 2, 4],
  [CharEnum.dot]: [1, 3, 5, 6],
  [CharEnum.separator]: [7, 8, 9],
};

const message = "Do you know what will happen today?";

const encrypted = Pollux.encrypt(message, key);
const decrypted = Pollux.decrypt(encrypted, key);

console.log(encrypted);
console.log(decrypted);
