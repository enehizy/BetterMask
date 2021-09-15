import {Wallet} from '@ethersproject/wallet';

export async  function createWallet(password) {
    const wallet =Wallet.createRandom();
    const address=wallet.address;
    const encrypted= await wallet.encrypt(password);
     return {encrypted,address};
}
export async function getWallet(encryptedData,password) {
  const wallet=await  Wallet.fromEncryptedJson(encryptedData,`${password}`);
  const address=wallet.address;
  return {wallet,address};
     
}