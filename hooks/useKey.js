import React from 'react';
import useLocalStorage from "./useLocalStorage";
export default function useKey(){
     return useLocalStorage('encrypted-key');
}
