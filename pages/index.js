import React from "react"
import Head from 'next/head';
import {useRouter} from 'next/router';
import Login from "../components/Login";
import Welcome from "../components/Welcome";
import useKey from "../hooks/useKey";
import Spinner from "../components/Spinner";
import Auth from "../components/Auth";
export default function Index(){
    const router= useRouter();
    const [key] =useKey();
    const [loading,setLoading]=React.useState(true);
    React.useEffect(()=>{
      const password=sessionStorage.getItem('password');
      if(password){
        router.push('/wallet');
      }else{
        setLoading(false);
      }
    
    },[])
   return (
        <>
        <Head>
            <title>Wallet</title>
        </Head>
        {loading?<Spinner/>:key?<Login/>:<Welcome/>}}
       
     
       </>
    )
}