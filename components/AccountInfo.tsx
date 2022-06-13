import Identicon from "./Identicon";
import CopyToClipboard  from 'react-copy-to-clipboard'
type props={
    account: string
}
export default function AccountInfo({account}:props) {
    return (
        <CopyToClipboard text={account} onCopy={()=>alert('address copied to clipboard')}>
             <button  className=" flex flex-col justify-center items-center    border-[#ccc] w-full">   
                <div className="hover:bg-gray-100 w-40  p-2 md:w-[350px] flex flex-col justify-center items-center space-y-2 ">
                            
                {/* <p className="font-medium">Address</p> */}
                <Identicon address={`${account}`}/>
                <p className="text-gray-400">{`${account}`.slice(0,7)+'...'+`${account}`.slice(`${account}`.length - 7,`${account}`.length)} <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg></p>  
                </div>
        </button>
        </CopyToClipboard>
       
    )
}
