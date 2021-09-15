import React from 'react';
import Body from './Body'
import Button from './Button';
import {useRouter} from 'next/router';
import ShadowContainer from './ShadowContainer';
export default function Auth(){
const router=useRouter();
 return(
  <Body>
     <ShadowContainer>
                     <div className="flex flex-col justify-center items-center py-6 px-6 ">
                    <div className="rounded-full shadow-md w-16 h-16">
                        <img src="favicon.ico" className="w-full h-full object-cover  "/>
                        
                    </div>
                
                    <div className="text-center">
                        
                        <p className="text-gray-500 font-mono  p-2 text-sm  lg:text-lg underline ">{router.query.url}</p>
                        <p className="text-lg md:text-2xl font-extrabold text-gray-700"> wants to connect to your wallet?</p>
                    </div>
                </div>
            <div className="flex justify-center space-x-10 mt-32 mb-6"> 
            <Button text="Allow" color="blue"/>
            <p className="flex justify-center items-center font-bold text-gray-600">Or</p> <Button text="Deny" color="red"/>
            </div>  
            
     </ShadowContainer>
     
      
    
     
  </Body>
 )
}