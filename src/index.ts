import { CharEnum } from "./utils";
import { Pollux } from "./pollux";
const key: Record<string, number[]> = {
  [CharEnum.dash]: [0, 2, 4],
  [CharEnum.dot]: [1, 3, 5],
  [CharEnum.separator]: [6, 7, 8, 9],
};

// const message: string = "Hi RIN";
const message: string =
  "MISs ZARvES WaS VErY GOoD At DrAWING ShAPES. WhEN mOST PEoPLE TrY To dRAW HEPTaGONS, THERe Is ALWAyS OnE SiDE THaT STIcKS OuT fUNNY. bUT MiSS zARVES'S HEPTAgON WAs PErFECT. EVeRY SiDE wAS ThE SAmE LENgTH, AnD EVErY AnGLE tHE sAME DEgREE.";

// Log message and key
console.log("Message: ");
console.log(message);
console.log();

// encrypted
const encrypted = Pollux.encrypt(message, key);
console.log("Encrypted: ");
console.log(encrypted);
console.log();

// decrypted
const decrypted = Pollux.decrypt(encrypted, key);
console.log("Decrypted: ");
console.log(decrypted);
console.log();
