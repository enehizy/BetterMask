import React from 'react'

export default function QrScanner() {
    return (
        <button className="text-blue-600">

    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 " viewBox="0 0 100 125">
      <path fill="currentColor"  d="M22 33V22h10v-8H17c-1.7 0-3 1.3-3 3v16h8zM68 22h10v11h8V17c0-1.7-1.3-3-3-3H68v8zM32 78H22V68h-8v15c0 1.7 1.3 3 3 3h15v-8zM78 68v10H68v8h15c1.7 0 3-1.3 3-3V68h-8z"></path>
      <rect x={29} y={29} width="42" height="42" fill="none" stroke="currentColor" rx="10" ry="10" strokeWidth="3"/>
      {/* <text
        y="115"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        fontSize="5"
        fontWeight="bold"
      >
        Created by Alex Podolsky
      </text> */}
      {/* <text
        y="120"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        fontSize="5"
        fontWeight="bold"
      >
        from the Noun Project
      </text> */}
    </svg>
  


        </button> 
    )
}
