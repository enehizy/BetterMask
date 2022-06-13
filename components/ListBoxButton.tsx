import React from 'react'
import type { tList } from '../types'
import Token from './TokenSelector/Token'



type props={
    selected:tList,
    className:string
}
export default function ListBoxButton({selected,className}:props) {
    // `absolute right-2 bottom-2 p-2 border-2 flex ${!selected?'bg-blue-400 text-white    rounded-2xl border-blue-400  ':'bg-[#f8f8f8] border-[#f8f8f8] text-blue-400'} `
  return (
    <button  className={className}>

   <Token symbol={(selected.symbol)} logoURI={selected.logoURI} address={selected.address}/>
   
   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
    
    </button> 
  )
}
