import React, { useEffect } from 'react';
import EyeIcon from './EyeIcon';
export default function Password({placeholder,message,isFocused,onChange}){
    const [value,setValue]=React.useState('');
    const [show,setShow]=React.useState(false);
    const ref=React.useRef();
    React.useEffect(()=>{
    
      if(`${ref.current.value}`.length >= 1){
          ref.current.focus();
      }
     
    },[])
    React.useEffect(()=>{
       if(isFocused){
           ref.current.focus();
       }
       if(ref.current.value.length > 0){
        ref.current.focus();
    }
    },[isFocused])
    const id=`${placeholder}`.toLowerCase() === 'password'?'password':'confirm-password'
    return(
    <div className="relative" > 
     <button className="absolute right-0 mt-5 w-8 h-8 text-blue-500 " onClick={(e)=>{e.preventDefault();
         setShow(!show)}} ><EyeIcon show={show}/></button> 
         
        <input onKeyPress={(e)=>{if(e.code.toLowerCase() === 'enter'){e.preventDefault();}}}  type={show?'text':'password'}   ref={ref} placeholder={placeholder} value={value}   onChange={(e)=>{setValue(e.target.value);onChange(value)}} id={id} name={id}  className={`peer placeholder-transparent focus:outline-none  border-0 border-b-2  py-4 w-full transition-colors ${!message&&'border-blue-600'} ${message&&'border-red-500'}`}/>
        <label  className={`block transition-all duration-500 -translate-y-10 peer-focus:-translate-y-16 text-gray-500 peer-focus:text-gray-600 peer-focus:font-medium ${value.length>=1&&'-translate-y-16 text-gray-600 font-medium'}`} htmlFor={id}>{placeholder}</label>
        {message&&<p className=" text-red-500  tracking-wider italic">{message}</p>}
    </div>
    )
   }