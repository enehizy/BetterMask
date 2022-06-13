import React,{ReactNode} from 'react';
export default function Body({children}:{children:ReactNode}){
    return(
    <div className="flex flex-col justify-center items-center  w-full   space-y-8 p-2 md:p-10 mx-auto ">  
      {children}  
   </div>
 )
   }