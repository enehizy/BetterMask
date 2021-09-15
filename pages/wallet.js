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
import Identicon from '../components/Identicon';
export default function Wallet(){
   const router= useRouter();
   const [loading,setLoading]=React.useState(true);
   const [account]=useAccount();
   React.useEffect(()=>{
     //useKey and usePassword refused to work for this component
   //   so i got the value straight from local storage and sesion storage

       const key=localStorage.getItem('encrypted-key');
       const password=sessionStorage.getItem('password');
         if(key && password){
            setLoading(false);
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


     
     
   },[])
      if(loading){
         return (<Spinner/>);
      }
      return(
         <>
     
              <WalletNav/>
              <WalletShadowContainer>
                 <header  className=" flex flex-col justify-center items-center py-2  border-b-1 border-[#ccc] border-b-2der-b-2 w-full">
                     <div className="hover:bg-gray-100 w-40 md:w-[350px] flex flex-col justify-center items-center space-y-2 ">
                        
                       {/* <p className="font-medium">Address</p> */}
                       <Identicon address={`${account}`}/>
                       <p className="text-gray-400">{`${account}`.slice(0,7)+'...'+`${account}`.slice(`${account}`.length - 7,`${account}`.length)} <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
</svg></p>  
                     </div>
                  
                     </header>
                 <div>
                    <div>Assets</div>
                 </div>
              </WalletShadowContainer>
    
        
         </>)

   
    
     
   
  
   }