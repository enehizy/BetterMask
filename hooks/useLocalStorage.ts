import React from 'react';
export default function useLocalStorage(key:string):[string,React.Dispatch<React.SetStateAction<string>>]{
    const [item,setItem]=React.useState("");
    React.useEffect(()=>{
         const storedItem=localStorage.getItem(key);
         if(storedItem){
              setItem(JSON.parse(storedItem))
          }
         
    },[])
    React.useEffect(()=>{
    if(item){
        localStorage.setItem(key,JSON.stringify(item));
    }
       
   },[item])

  return [item,setItem];
}