import React from 'react';
export default function ShadowContainer({children}:{children:React.ReactNode}){
    return(
        <div className={`w-full xl:max-w-[700px]  shadow-md rounded-md  p-4`}>
            {children}
        </div>
    )

}