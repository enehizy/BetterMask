import NetworkBar from "./NetworkBar";
import QrScanner from "./QrScanner";

export default function WalletNav(){
    return(
    <div className="flex justify-center items-center w-full p-2 md:p-6 border-b-0 bg-[#f8f8f8]  ">
         <nav className="flex flex-col md:flex-row justify-between items-center w-full max-w-[900px] pb-6">
         <p></p>  
         <div className="flex flex-col justify-center items-center space-y-2 ">
         <h1 className="tracking-wider font-semibold text-2xl ">Fuse Wallet</h1> 
         <NetworkBar/>
        </div> 
       
        <QrScanner/>
        </nav>
    </div>
       
    )
}