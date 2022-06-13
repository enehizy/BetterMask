type props={
    address:string,
    symbol:string,
    logoURI:string
 }
export default function Token({address,symbol,logoURI}:props){
    return (
        <>
        <img className="w-6 h-6 mr-2 font-semibold" src={logoURI}/>{symbol} 
        </>
    )
}
