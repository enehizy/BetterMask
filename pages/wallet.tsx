import React from 'react';
import {useRouter} from 'next/router';
import Auth from '../components/Auth';
import useAllowList from '../hooks/useAllowList';
import Body from '../components/Body';
import WalletShadowContainer from '../components/WalletShadowContainer';
import WalletNav from '../components/WalletNav';
import usePassword from '../hooks/usePassword';
import useKey from '../hooks/useKey';
import Spinner from '../components/Spinner';
import useAccount from '../hooks/useAccount';
import AccountInfo from '../components/AccountInfo';
import Tab from '../components/Tab';

const authenticate=(router,setLoading)=>{
   const key=localStorage.getItem('encrypted-key');
   const password=sessionStorage.getItem('password');
     if(key && password){
        setLoading(false)
     }
     if(!key && !password){
        router.push('/create')
     }
     if(key && !password){
        router.push('/');
     }
     if(!key && password){
        sessionStorage.removeItem('password');
        router.push('/');;
     }


}
export default function Wallet(){
   const router= useRouter();
   const [loading,setLoading]=React.useState(true);
   const [account]=useAccount();
  
   React.useEffect(()=>{
     authenticate(router,setLoading); 
   },[])
      if(loading){
         return (<Spinner/>);
      }
      return(
         <>
     
              <WalletNav/>
              <main>
                  <WalletShadowContainer>
                  <AccountInfo account={account}/>
                     <Tab tabHeaders={["Balances","Transfer"]}/>
                  </WalletShadowContainer>
              </main>
        
         </>)

   
    
     
   
  
   }