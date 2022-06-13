import React from 'react'

export default function NetworkBar() {
    return (

    <button className="flex justify-center items-center bg-white border px-2 border-gray-[#f8f8f8] p-1 rounded-full "> <svg className="w-2 h-2 mx-2"viewBox="0 0 100 100" ><circle cx="50"cy="50" r="50" fill="green"/></svg>Ethereum Mainnet <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
           </svg>
    </button>
    
    )
}
