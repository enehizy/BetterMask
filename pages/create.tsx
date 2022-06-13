import React from 'react';
import Button from '../components/Button';
import Password from '../components/Password';
import Body from '../components/Body';
import Link from 'next/link';
import {createWallet} from '../utils/wallet';
import useKey from '../hooks/useKey';
import { useRouter } from 'next/router';
import usePassword from '../hooks/usePassword';
import useAccount from '../hooks/useAccount';
export default function CreateWallet(){
  const router=useRouter();
  const [,setKey]=useKey();
  const [,setPassword]=usePassword();
  const [,setAccount]=useAccount();
  const [passwordErrorMsg,setPasswordErrorMsg]=React.useState("");
  const [cPasswordErrorMsg,setCPasswordErrorMsg]=React.useState("");
  const [passwordFieldFocused,setPasswordFieldFocused]=React.useState(false);
  const [cPasswordFieldFocused,setCPasswordFieldFocused]=React.useState(false);
  const [buttonLoading,setButtonLoading]=React.useState(false);
  // const [disabled,setDisabled]=React.useState(true);
  const removePasswordError=(value)=>{
    if(passwordErrorMsg ){
      setPasswordErrorMsg('');
    }  
    if(cPasswordErrorMsg){
      setCPasswordErrorMsg('');
   }
  }
  
  const createNewWallet=(e)=>{
    e.preventDefault();
    setButtonLoading(true);
    const form=new FormData(e.target)
    const password=form.get('password') as string;
    const confirmPassword=form.get('confirm-password') as string;
   if(password.length >= 6 && confirmPassword === password){
     createWallet(password).then((wallet)=>{
       setKey(wallet.encrypted);
       setAccount(wallet.address);
       setPassword(password);
       router.push('/wallet')
     })
   }
   else{
    if(`${password}`.length < 6){
      setPasswordErrorMsg('password must be least 6 characters long!!');
      setPasswordFieldFocused(true);
      setButtonLoading(false);
    }
    if(!confirmPassword){
      setCPasswordFieldFocused(true);
      setCPasswordErrorMsg('please confirm password!!');
      setButtonLoading(false);
    }else{
      if(confirmPassword !== password){
        setCPasswordFieldFocused(true);
        setCPasswordErrorMsg('password does not match!!')
        setButtonLoading(false);
      }

    }
    
  
   }
  }
    // console.log(passwordRef,confirmPasswordRef)
    // const wallet=Wallet.createRandom()
    // const privatekey=wallet._signingKey().privateKey
    // wallet.encrypt('31101997')
    // .then((encryptedWallet)=>[
       
    // ])
    
  
  // const passChange=(e)=>{
  //   e.preventDefault();
  //   if(e.target.value.length < 6 ){
  //     passwordErrorMsg
  //   }
  // }
    return(
    <Body>
        
            <span className="font-mono text-gray-500 cursor-pointer hover:underline ">{'< '}<Link href="/">Back</Link></span>
      
        
          <h1 className="text-xl md:text-2xl font-bold">Create a Fuse Wallet</h1>
    
       
        <form className="w-full max-w-[500px] space-y-8  " onSubmit={(e)=>{createNewWallet(e)}}>
        <div>
           <Password placeholder="Password" onChange={removePasswordError} message={passwordErrorMsg} isFocused={passwordFieldFocused}/>
        </div>
        <div>
            <Password placeholder="Confirm password" onChange={removePasswordError} message={cPasswordErrorMsg} isFocused={cPasswordFieldFocused}/>
          
        </div>
        <div className="flex justify-center items-center">
           <Button text="Create" color="blue" loading={buttonLoading}/>
        </div>
        
       
           
        </form>
    </Body>
    
   
    )
   }