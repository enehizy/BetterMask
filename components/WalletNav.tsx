import React from "react";
import NetworkBar from "./NetworkBar";
import QrScanner from "./QrScanner";
import WalletConnect from "@walletconnect/client";
export default function WalletNav(){
    const [image,setImage]=React.useState();
    const disconnect=()=>{
        const walletconnet= JSON.parse(localStorage.getItem('walletconnect'));
        let uri = `wc:${walletconnet.peerId}?`+encodeURIComponent(`${walletconnet.bridge}&key=${walletconnet.key}`);
       
       
        console.log(uri)
        const connector=new WalletConnect({uri})
        // connector.killSession()
    }
    React.useEffect(()=>{
    const walletconnet= JSON.parse(localStorage.getItem('walletconnect'));
    if(walletconnet){
        setImage(walletconnet.peerMeta.icons[0]);
        console.log(walletconnet)
    }
    },[])
    return(
    <div className="flex justify-center items-center w-full p-2 md:p-6 border-b-0 bg-[#f8f8f8]  ">
         <nav className="flex flex-col md:flex-row justify-between items-center w-full max-w-[900px] pb-6">
         <p></p>  
         <div className="flex flex-col justify-center items-center space-y-2 ">
         <h1 className="tracking-wider font-bold text-4xl text-blue-500 ">BetterMask</h1> 
         {/* <NetworkBar/>
         {image&&(<div className="space-x-16 flex"> <div><span>Connected to </span> <img className="w-6 h-6 border inline rounded-full bg-cover object-fit" /></div> <button className="font-semibold underline" onClick={disconnect}>Disconnect</button></div> )} */}
       
        </div> 
       
        <QrScanner/>
        </nav>
    </div>
       
    )
}