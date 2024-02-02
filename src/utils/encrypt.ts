import * as CryptoJS from "crypto-js";
export function encrypt(plainText: any, iv: string, secretKey: string): string {
  const buffIv = CryptoJS.enc.Base64.parse(iv);
  const buffKey = CryptoJS.enc.Base64.parse(secretKey);

  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(plainText), buffKey, {
    iv: buffIv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();

  return encrypted;
}
