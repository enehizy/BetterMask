import React from 'react';
import ButtonSpinner from './ButtonSpinner';
export default function Button({text,color,onClick,disabled,loading}){
//  return(
//     <>
//     <button onClick={onClick} className={`${color == 'blue'&& 'bg-blue-500'} ${color == 'red'&& 'bg-red-600'} p-2 text-white rounded-full px-5 disabled:opacity-50 transition-opacity`} disabled={true}>{text}</button>
//    <button onClick={onClick} className={`${color == 'blue'&& 'bg-blue-500'} ${color == 'red'&& 'bg-red-600'}  rounded-full py-2 w-24 flex justify-center items-center `} disabled={disabled}> <ButtonSpinner/></button>
//    </>
//  )
if(loading){
  return(
         <button onClick={onClick} className={`${color == 'blue'&& 'bg-blue-500'} ${color == 'red'&& 'bg-red-600'}   rounded-full py-2 w-24 flex justify-center items-center `} disabled={disabled}> <ButtonSpinner/></button>
  )

}
return (<button onClick={onClick} className={`${color == 'blue'&& 'bg-blue-500'} ${color == 'red'&& 'bg-red-600'} p-2 text-white rounded-full px-5 disabled:opacity-50 transition-opacity`} disabled={disabled}>{text}</button>)
}