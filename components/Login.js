import React from 'react';
import Body from './Body';
import Button from './Button';
import Password from './Password';
import WalletIcon from './WalletIcon';
import {useRouter} from 'next/router';
import WelcomeText from './WelcomeText';
import {Wallet} from '@ethersproject/wallet';
import { getUriAndKeyFromUrl ,subscribeToEvents,connectToWalletConnect} from '../utils/walletconnect';
import { getWallet } from '../utils/wallet';
import useKey from '../hooks/useKey';
import ButtonSpinner from './ButtonSpinner';
import usePassword from '../hooks/usePassword';
import useAccount from '../hooks/useAccount';
export default function Login(){
    const router=useRouter();
    const [key]=useKey();
    const [,setPassword]=usePassword();
    const [,setAccount]=useAccount();
    const [loading,setLoading]=React.useState(false);
    const [passwordErrorMsg,setPasswordErrorMsg]=React.useState('');
    const [focus,setFocus]=React.useState(false);
    
    const loginToWallet=(e)=>{
     e.preventDefault();
     setLoading(true);
     const form= new FormData(e.target);
     const password=form.get('password');
     const uri=getUriAndKeyFromUrl();
     if(`${password}`.length < 1){
      setFocus(true);
      setPasswordErrorMsg('No password provided');
      setLoading(false);
      return;
    }
    getWallet(key,password)
    .then(({address})=>{
      const uri=getUriAndKeyFromUrl();
      setPassword(`${password}`);
      setAccount(`${address}`);
      router.push('/wallet');
      // if(uri){
        // connectToWalletConnect(uri)
        // .then((connector)=>{
          // if(!connector.connected){
          //   setLoading(false);
          //   return;
          // }
          // connector.on("session_request", async(error, payload) => {
          //   if(error){
          //     setLoading(false);
          //     return;
          //   }
          //   console.log('-> on session request');
          //   setPassword(`${password}`);
          //   setAccount(`${address}`);
          //   router.push('/wallet');
          // })
        
        // })
        // .catch((e)=>{console.log('network error')})
      // }else{
      //   setPassword(`${password}`);
      //   setAccount(`${address}`);
      //   router.push('/wallet');
      // }
     
    })
    .catch((e)=>{
      setPasswordErrorMsg('incorrect password')
      setLoading(false);
     
      
    })
    
      //  if(uri){
      //    connectToWalletConnect(uri)
      //    .catch((e)=>{
      //      console.log(e)
      //    })
      // }
        
    }
 return(
   <Body>
       <header className="text-center space-y-2">
           

        <WelcomeText/>
      
           </header>
           <form className="w-full max-w-[500px] " onSubmit={(e)=>{loginToWallet(e)}} >
              <Password placeholder="Password" onChange={()=>{setPasswordErrorMsg('')}} message={passwordErrorMsg} isFocused={focus}/>
              <div className="flex flex-col justify-center items-center mt-10" >
                <Button text="Unlock" color="blue" loading={loading}/>
              </div>
            
           </form>
          
           <p className="font-semibold">Or</p>
           <Button  text="Create Wallet" color="blue" onClick={()=>{router.push('/create')}}/>
         
   </Body>
 )
}