import {Wallet} from 'ethers'

export async  function createWallet(password) {
    const wallet = Wallet.createRandom();
    const address=wallet.address;
    const encrypted= await wallet.encrypt(password);
     return {encrypted,address};
}
export async function getWallet(encryptedData,password) {
  const wallet=await  Wallet.fromEncryptedJson(encryptedData,`${password}`);
  const address=wallet.address;
  return {wallet,address};
     
}
// export class Connector{
//   on(event,callback){
//     document.addEventListener('message',(e)=>{
//        if(event === e.data.method){
//            callback(e);
//        }
//     })
//   }
//   emit(event,data,target){
//     window.parent.postMessage({...data,method:event},`${target}`);
//   }
  

// }
