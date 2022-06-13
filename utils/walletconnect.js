import WalletConnect from '@walletconnect/client';
// export const checkAllowList=(allowlist,router)=>{
//     const isIframe=window.top !== window.self;
//        if(isIframe){
//          window.addEventListener('message',(e)=>{
//              if(allowlist && !allowlist.includes(`${e.origin}`)){
//                router.push(`/?url=${e.origin}`)
//              }
//          })
          
//        }
// }
export const getUriAndKeyFromUrl=()=>{
  const search= new URLSearchParams(`${location.search}`);
  if(search.get('uri') && search.get('key')){
    const uri =`${search.get('uri')}&key=${search.get('key')}`;
    return uri;
  }
 
  return;
 
}
export const connectToWalletConnect=async(uri)=>{
       if(uri){
         try{
           console.log('connecting...')
          const connector =new WalletConnect({uri})
          subscribeToEvents(connector);

          const connected=connector.connected;
          console.log(connector.connected)
          if(!connected) {
      
             await connector.createSession()
             return connector;
         }
         console.log('connected -->',connector.connected)
         return connector;
        }
         catch(e){
           console.log('error',e)
         }
         
    }

}

export const subscribeToEvents=(connector)=>{
  connector.on("session_request", async(error, payload) => {
    if (error) {
      throw error;
    }
    console.log('on session request ->')
    // const { peerMeta } = payload.params[0];
    // console.log({peerMeta})
    console.log('please wait connecting..')
    connector.approveSession({
    chainId: 2, // Required
    accounts: ['0xe46d3AAf22F71Ad59a1bb6506A8c5Af17Cf5049e'] // Required
    })
    console.log('connected')
  //  console.log(session);
  
    // Handle Session Request
  
    /* payload:
    {
      id: 1,
      jsonrpc: '2.0'.
      method: 'session_request',
      params: [{
        peerId: '15d8b6a3-15bd-493e-9358-111e3a4e6ee4',
        peerMeta: {
          name: "WalletConnect Example",
          description: "Try out WalletConnect v1.0",
          icons: ["https://example.walletconnect.org/favicon.ico"],
          url: "https://example.walletconnect.org"
        }
      }]
    }
    */
  });
  
  // Subscribe to call requests
  connector.on("call_request", (error, payload) => {
    if (error) {
      throw error;
    }
    console.log('on call request ->',payload)
  
    // Handle Call Request
  
    /* payload:
    {
      id: 1,
      jsonrpc: '2.0'.
      method: 'eth_sign',
      params: [
        "0xbc28ea04101f03ea7a94c1379bc3ab32e65e62d3",
        "My email is john@doe.com - 1537836206101"
      ]
    }
    */
  });
  connector.on("connect", (error, payload) => {
    console.log("on connect", payload);

    if (error) {
      throw error;
    }

    
  });
  
  connector.on("disconnect", (error, payload) => {
    if (error) {
      throw error;
    }
    console.log('on disconnect ->',payload)
  
    // Delete connector
  });


  }
   
 


      

