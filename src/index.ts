import { Pollux, CharEnum } from "./pollux";

const key: Record<string, number[]> = {
  [CharEnum.dash]: [0, 2, 4],
  [CharEnum.dot]: [1, 3, 5, 6],
  [CharEnum.separator]: [7, 8, 9],
};

const message =
  "MISS ZARVES WAS VERY GOOD AT DRAWING SHAPES. WHEN MOST PEOPLE TRY TO DRAW HEPTAGONS, THERE IS ALWAYS ONE SIDE THAT STICKS OUT FUNNY. BUT MISS ZARVES'S HEPTAGON WAS PERFECT. EVERY SIDE WAS THE SAME LENGTH, AND EVERY ANGLE THE SAME DEGREE.";
const encrypted = Pollux.encrypt(message, key);
const decrypted = Pollux.decrypt(encrypted, key);

console.log("Encrypted String: ");
console.log(encrypted);
console.log("Decrypted String: ");
console.log(decrypted);
