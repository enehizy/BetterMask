import useSessionStorage from "./useSessionStorage";
import React from 'react'


export default function useAccount() {
   return useSessionStorage('account');
}
