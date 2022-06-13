import React, { ReactNode } from 'react';
export default function WalletShadowContainer({children}:{children:ReactNode}){
    return(
        <div className={`flex flex-col justify-center items-center  w-full xl:max-w-[900px]  shadow-sm border border-[#f8f8f8]   mx-auto -translate-y-6  bg-white`}>
            {children}
        </div>
    )

}