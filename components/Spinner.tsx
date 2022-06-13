import React from 'react'

export default function Spinner() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="spinner ">
                    <div className="cube1 bg-blue-400 w-6 h-6 rounded"></div>
                    <div className="cube2 bg-blue-400 w-6 h-6 rounded"></div>
            </div>
            <p>Loading please wait ...</p>
     </div>   
    )
}
