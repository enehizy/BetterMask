import React, { FormEventHandler, HTMLInputTypeAttribute, useRef, useState } from 'react';
import Input from './Input';
import ListBox from './ListBox';
import type { tList } from '../types';
import ListBoxButton from './ListBoxButton';
import TokenList from '../TokenList.json';
import {utils} from 'ethers'
const tokenList=TokenList.tokenList;


export default function Transfer() {
  const [selected,setSelected] =React.useState<tList|null>(tokenList[0]);
  const [sendToErrorMsg,setSendtoErrorMsg]=useState('')
  const [amountErrorMsg,setAmountErorrMsg]=useState('')

  const onMaxButtonClicked=(e)=>{
     e.preventDefault()
  }
  const transfer=(e)=>{
    e.preventDefault()
   const to=e.target.to.value;
   const value=e.target.amount.value;
   
      if(value.length<=0){
        setAmountErorrMsg('you did not provide an amount')
        if(to.length <=0){
          setSendtoErrorMsg('You did not provide any address')}
      }
   
   else{
     setAmountErorrMsg('')
     setSendtoErrorMsg('')

      if(!utils.isAddress(to)){
        setSendtoErrorMsg('incorrect address.Please provide a valid address')
   }

   }
  //  if(utils.isAddress(to)){

  //  }
  //  else{

  //  }
   
  }
  return (
    <>
    <form onSubmit={(e)=>{transfer(e)}}>
    <Input onChange={()=>{if(sendToErrorMsg){setSendtoErrorMsg('')}}} label='Send to' placeholder='enter receipent address' type="text" name="to" errorMsg={sendToErrorMsg} />
     <div className='relative w-full max-w-[500px]'>

   

        <div className="absolute right-1 translate-y-8">
          <div className='flex items-center'>
                    <button onClick={(e)=>{onMaxButtonClicked(e)}} className='h-8 px-3 rounded-lg border-blue-500 bg-blue-500   text-white '>max</button>
                    <ListBox selected={selected} setSelected={setSelected} button={()=><ListBoxButton selected={selected} className={`font-bold p-2 border-2 flex bg-[#f8f8f8] border-[#f8f8f8] text-blue-400 `}/>}/>
          </div>
                   
              </div>
            
          
              


            
          
          <Input onChange={()=>{if(amountErrorMsg){setAmountErorrMsg('')}}} label='Amount ' placeholder='how much do you want to send?' type="number" name="amount" errorMsg={amountErrorMsg}/>
        
      
     </div>
     
   
    
    
    <button type='submit' className=' bg-blue-500 
     px-6 py-2  text-center  text-white my-4 rounded-full font-bold'>SEND</button>
    </form>
    
     

    </>
 
  
  
  );
}
