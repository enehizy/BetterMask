import React from 'react';
import '../styles/app.css';
import { useRouter } from 'next/router';
import {connectToWalletConnect,subscribeToEvents,getUriAndKeyFromUrl} from '../utils/walletconnect';
export default function app({Component, pageProps}){
    // const [connectingDapp,setConnetingDapp]=React.useState(false);
    // const [connectionError,setCoonectionError]=React.useState(false);
   
    React.useEffect(()=>{
      // console.log('url =>',getUriAndKeyFromUrl())
      // connectToWalletConnect(getUriAndKeyFromUrl())
      // document.addEventListener('message',(e)=>{
      //   alert(e.origin,e.data)
      // })
     
    
    },[])
   
   
      return  (<Component {...pageProps}/>)
    // return(
    //   //   <>
    //   //   {uri?}


    //   //   <Component {...pageProps}/>
    //   // //  {connectingDapp&&<p>Connecting to App...,please wait</p>}
    //   // //  {connectionError&&<p>Network error couldnt connect to wallet</p>}

    //   //   <p className="text-center font-semibold underline">Made by Osas Enehizy</p>
    //   //   </>
    // )
 
}