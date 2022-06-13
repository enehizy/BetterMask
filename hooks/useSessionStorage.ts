import React from 'react';
export default function useSessionStorage(key:string):[string,React.Dispatch<React.SetStateAction<string>>]{
    const [item,setItem]=React.useState("");
    React.useEffect(()=>{
         const storedItem=sessionStorage.getItem(key);
         if(storedItem){
              setItem(JSON.parse(storedItem))
          }
         
    },[])
    React.useEffect(()=>{  
        if(item){
            sessionStorage.setItem(key,JSON.stringify(item));
        } 
   },[item])

  return [item,setItem];
}