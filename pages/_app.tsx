import React from 'react';
import '../styles/app.css';
import Head from 'next/head';
import { WagmiProvider,useBlockNumber} from 'wagmi';
import { providers } from 'ethers';

// import { useRouter } from 'next/router';
// import {connectToWalletConnect,subscribeToEvents,getUriAndKeyFromUrl} from '../utils/walletconnect';
// let provider=new AlchemyProvider('homestead',process.env.apiKey) 
// let provider=AlchemyProvider.getWebSocketProvider('homestead',process.env.apiKey) as any

let provider=new providers.AlchemyProvider('homestead',process.env.apiKey)





export default function app({Component, pageProps}){
    // const [connectingDapp,setConnetingDapp]=React.useState(false);
    // const [connectionError,setCoonectionError]=React.useState(false);
    
   
    
      return  (
        <>
        <Head>
            <title>Wallet</title>
        </Head>
        <WagmiProvider provider={provider}>
            <Component {...pageProps}/>
          
             
           
        </WagmiProvider>
       
        </>
    )
  
 
}