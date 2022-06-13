import React,{Fragment} from 'react';
import {Tab as HTab} from  '@headlessui/react'
import Balances from './Balances';

import Transfer from './Transfer';
type props={ 
    tabHeaders:["Balances","Transfer"]
}

export default function Tab({tabHeaders}:props) {
  return (
      <>  <HTab.Group>
        <HTab.List className='flex w-full'>
       
    
        {tabHeaders.map((header)=>(
           <HTab as={Fragment}>
           {({ selected }) => (
            <button className={`w-1/2 text-center p-4  ${selected&&"bg-[#f8f8f8] border-t-2  border-blue-400 text-blue-400 font-extrabold"}`}>
              {header}
             </button>
           )}
         </HTab>
        ))} 
       
       </HTab.List>
       <HTab.Panels className='bg-[#f8f8f8]  w-full p-8'>
        <HTab.Panel><Balances/></HTab.Panel>
        <HTab.Panel><Transfer/></HTab.Panel>
        {/* ... */}
      </HTab.Panels>
      
      </HTab.Group>
      
     </>
  );

}
