import React,{ useState } from 'react';
import { Listbox } from "@headlessui/react"

import type { tList } from '../types';
import ListBox from './ListBox';
import ListBoxButton from './ListBoxButton';
import TokenList from '../TokenList.json';
const tokenList=TokenList.tokenList;

export default function Balances() {
  const [selected,setSelected] =useState<tList|null>(tokenList[0]);
  return(
    <>
     
    <ListBox selected={selected} setSelected={setSelected}
      button={()=>(
      <button className='inline-flex items-center     font-bold  '>
      <h2 className='p-2 text-blue-400'>Balance:</h2>
      <ListBoxButton selected={selected} className={`flex py-2 px-4  rounded-full font-bold border-2 bg-blue-500 text-white border-blue-500 `}/>
      </button>
      
    )} />
   
  <div className='flex justify-center items-center mt-5'>
    <h2 className='flex justify-center items-center font-extrabold text-5xl  text-blue-400'>
      <img src={selected.logoURI} className=' mr-5 w-12 h-12'/>100 {selected.symbol}</h2>
  </div>
  <div className='flex justify-center items-center mt-10'>
   <button className='bg-blue-500 text-white p-2 px-6 rounded-full mr-20'>Buy  </button>
   <button className='bg-blue-500 text-white p-2 px-6 rounded-full '>Swap </button>
  </div>
 
    
    </>
 
  )
}


