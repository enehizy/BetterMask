import React from 'react';
type props={
    label:string,
    errorMsg?:string,
    ref?:React.LegacyRef<HTMLInputElement>
}&React.InputHTMLAttributes<HTMLInputElement>


export default function Input(props:props) {
  const {label,ref,errorMsg}=props
  return (<div className=' my-4'> 
    <label className={`block font-semibold ${errorMsg?'text-red-400':'text-blue-400'} bg-[#f8f8f8] translate-x-4 translate-y-3    px-1`} style={{width:(label.length +10) *4 +'px'}}>{label}</label>
  <input {...props}  ref={ref}className={`p-4 w-full max-w-[500px] border-2 ${errorMsg?'border-red-400 ':'border-blue-400 '}  ${errorMsg?'focus:border-red-400 ':'focus:border-blue-400'} rounded-lg bg-[#f8f8f8]`}/>
  {errorMsg&&<p className='text-red-400'>{errorMsg}</p>}
   </div>);
}
