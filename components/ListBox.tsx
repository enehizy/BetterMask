import React from "react";
import { Listbox } from "@headlessui/react"
import TokenSelector from  './TokenSelector';
import TokenList from '../TokenList.json';
import Token from './TokenSelector/Token';
import type { tList } from '../types';


const defaultTokenList=TokenList.tokenList;

type props<T> ={
    selected:T,
    setSelected:React.Dispatch<React.SetStateAction<T>>,
    button:()=>JSX.Element
    
   
   }
export default function ListBox({selected,setSelected,button:Button}:props<tList|null>) {
   const [tokenList,setTokenList]=React.useState<tList[]>(defaultTokenList)
    return (
      
    <Listbox as="div" value={selected} onChange={setSelected}>
        {({open})=>(
           <>
           
           {/* <Listbox.Button  className={`absolute right-2 bottom-2 p-2 border-2 flex ${!selected?'bg-blue-400 text-white    rounded-2xl border-blue-400  ':'bg-[#f8f8f8] border-[#f8f8f8] text-blue-400'} `}>
                {selected?<Token symbol={selected.symbol} logoURI={selected.logoURI} address={selected.address}/>:'SELECT A TOKEN'} <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
            </Listbox.Button> */}
         <Listbox.Button as="div">
            <Button/>
         </Listbox.Button>
           
               
             <TokenSelector open={open} optionSelected={(selected?.symbol)} updateTokenList={setTokenList} tokenList={tokenList}>
                
            <div>
            
                <Listbox.Options  className=" h-auto overflow-y-scroll mt-4" style={{height:`${23}em`}}>
                    
               
                    {tokenList.map((token)=>(
    
                    <Listbox.Option key={token.symbol} value={token} as="div" className="divide-blue-200">
                        {({selected:isSelected,active})=>(
                            
                             <button disabled={isSelected} className="disabled:bg-blue-100 disabled:opacity-30  w-full p-4 text-left my-1 font-semibold hover:bg-blue-400/10 flex" >
                                <Token symbol={token.symbol} address={token.address} logoURI={token.logoURI}/></button>
                            
                          
                        
                        )}
                    </Listbox.Option>
           

                    ))}
               
                </Listbox.Options>
                
                
           
            </div>
              </TokenSelector>
            

            </>
      )}
        
    </Listbox>
     
    )
}
